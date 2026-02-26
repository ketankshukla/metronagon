# make_business_plan.ps1
# Combines all business plan sections into a single professional DOCX using pandoc.
# Usage: .\make_business_plan.ps1

$ErrorActionPreference = "Stop"

$planDir = "E:\metronagon\metronagon-business-plan"

# --- Find pandoc ---
$pandocCmd = Get-Command pandoc -ErrorAction SilentlyContinue
if ($pandocCmd) {
  $pandoc = $pandocCmd.Source
} else {
  $common = @(@(
    Join-Path $env:LOCALAPPDATA "Pandoc\pandoc.exe"
    Join-Path $env:ProgramFiles "Pandoc\pandoc.exe"
    Join-Path ${env:ProgramFiles(x86)} "Pandoc\pandoc.exe"
  ) | Where-Object { $_ -and (Test-Path $_) })
  if ($common.Count -gt 0) { $pandoc = $common[0] }
  else {
    $winGetRoot = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Packages"
    if (Test-Path $winGetRoot) {
      $found = Get-ChildItem -Path $winGetRoot -Recurse -Filter "pandoc.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
      if ($found) { $pandoc = $found.FullName }
    }
  }
  if (-not $pandoc) { throw "pandoc.exe not found." }
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# --- Output paths ---
$outMd  = Join-Path $planDir "_temp_combined.md"
$outDoc = Join-Path $planDir "Metronagon Media - Business Plan.docx"
Remove-Item $outMd  -ErrorAction SilentlyContinue
Remove-Item $outDoc -ErrorAction SilentlyContinue

$sb = New-Object System.Text.StringBuilder

# --- Ordered list of sections ---
$sections = @(
  @{ File = "00-title-page.md";                Heading = "Metronagon Media - Business Plan" }
  @{ File = "01-executive-summary.md";         Heading = "Executive Summary" }
  @{ File = "02-company-overview.md";          Heading = "Company Overview" }
  @{ File = "03-products-and-services.md";     Heading = "Products and Services" }
  @{ File = "04-market-analysis.md";           Heading = "Market Analysis" }
  @{ File = "05-pricing-strategy.md";          Heading = "Pricing Strategy" }
  @{ File = "06-marketing-and-sales.md";       Heading = "Marketing and Sales Strategy" }
  @{ File = "07-operations-and-technology.md"; Heading = "Operations and Technology" }
  @{ File = "08-digital-portfolio.md";         Heading = "Digital Portfolio and Proof of Work" }
  @{ File = "09-financial-projections.md";     Heading = "Financial Projections" }
  @{ File = "10-growth-strategy.md";           Heading = "Growth Strategy" }
  @{ File = "11-risk-analysis.md";             Heading = "Risk Analysis" }
  @{ File = "12-appendices.md";                Heading = "Appendices" }
)

foreach ($section in $sections) {
  $filePath = Join-Path $planDir $section.File
  if (-not (Test-Path $filePath)) {
    Write-Warning "Skipping missing file: $($section.File)"
    continue
  }

  $content = [System.IO.File]::ReadAllText($filePath, $utf8NoBom).Trim()

  # Strip the first heading line (we replace it with a page-break heading)
  $content = [regex]::Replace($content, '\A\s*#{1,3}\s+[^\r\n]*(\r?\n){0,2}', '')
  $content = $content.Trim()

  $heading = $section.Heading
  $safe = $heading -replace '&','&amp;' -replace '<','&lt;' -replace '>','&gt;'

  $fence = '``````{=openxml}'
  [void]$sb.AppendLine('')
  [void]$sb.AppendLine($fence)
  $xmlLine = '<w:p><w:pPr><w:pStyle w:val="Heading1"/><w:pageBreakBefore/></w:pPr><w:r><w:t>' + $safe + '</w:t></w:r></w:p>'
  [void]$sb.AppendLine($xmlLine)
  [void]$sb.AppendLine('``````')
  [void]$sb.AppendLine('')
  [void]$sb.Append($content)
  [void]$sb.AppendLine("")
}

# --- Write combined markdown and convert to DOCX with TOC ---
[System.IO.File]::WriteAllText($outMd, $sb.ToString(), $utf8NoBom)
& $pandoc $outMd '--from=markdown+raw_attribute' '--to=docx' '--toc' '--toc-depth=2' '-o' $outDoc
Remove-Item $outMd -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Business plan created successfully!" -ForegroundColor Green
Write-Host "Output: $outDoc" -ForegroundColor Cyan
Write-Host ""
