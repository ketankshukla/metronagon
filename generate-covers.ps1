# Generate example book covers via OpenAI API
# Reads prompts from api-example-prompts\, outputs to api-images\

$ErrorActionPreference = "Stop"

# Load API key
$envContent = Get-Content "E:\cartoon-stories\.env" | Where-Object { $_ -match "^OPENAI_API_KEY=" }
$key = ($envContent -split "=", 2)[1].Trim().Trim('"').Trim("'")

$promptDir = "E:\metronagon\api-example-prompts"
$outDir = "E:\metronagon\api-images"

# Create output directory if it doesn't exist
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$files = Get-ChildItem -Path $promptDir -Filter "*.txt" | Sort-Object Name
$total = $files.Count
$i = 0

foreach ($f in $files) {
    $i++
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($f.Name)
    $outFile = Join-Path $outDir "$baseName.jpg"

    if (Test-Path $outFile) {
        Write-Host "[$i/$total] SKIP $baseName (exists)"
        continue
    }

    # Read the full file, strip header lines (everything before the --- separator)
    $raw = Get-Content $f.FullName -Raw -Encoding UTF8
    if ($raw -match "(?s)---\s*\r?\n(.+)$") {
        $prompt = $Matches[1].Trim()
    } else {
        $prompt = $raw.Trim()
    }

    Write-Host "[$i/$total] Generating $baseName... " -NoNewline

    $headers = @{
        "Authorization" = "Bearer $key"
        "Content-Type"  = "application/json"
    }

    $body = @{
        model         = "gpt-image-1"
        prompt        = $prompt
        n             = 1
        size          = "1024x1536"
        quality       = "high"
        output_format = "jpeg"
        background    = "opaque"
    } | ConvertTo-Json -Depth 10

    try {
        $resp = Invoke-RestMethod -Method Post -Uri "https://api.openai.com/v1/images/generations" -Headers $headers -Body $body
        $bytes = [System.Convert]::FromBase64String($resp.data[0].b64_json)
        [System.IO.File]::WriteAllBytes($outFile, $bytes)
        Write-Host "OK -> $outFile"
    }
    catch {
        Write-Host "FAILED: $($_.Exception.Message)"
    }

    if ($i -lt $total) {
        Write-Host "  Waiting 30s..."
        Start-Sleep -Seconds 30
    }
}

Write-Host "`nDONE. Generated $total covers."
