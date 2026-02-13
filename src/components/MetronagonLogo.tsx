export default function MetronagonLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Metronagon — The Measure of Excellence"
    >
      {/* Geometric logomark — angular polygon "M" referencing -agon (angles/sides) */}
      <g>
        {/* Outer pentagon/polygon frame */}
        <path
          d="M30 95 L5 50 L30 5 L55 5 L80 50 L55 95 Z"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        {/* Inner stylized M */}
        <path
          d="M20 80 L20 25 L42.5 55 L65 25 L65 80"
          stroke="#D4AF37"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Golden ratio dot — precision mark */}
        <circle cx="42.5" cy="18" r="3" fill="#D4AF37" />
      </g>

      {/* METRONAGON wordmark */}
      <text
        x="95"
        y="62"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="38"
        fontWeight="400"
        letterSpacing="12"
        fill="#D4AF37"
      >
        METRONAGON
      </text>

      {/* Tagline */}
      <text
        x="95"
        y="85"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="11"
        fontWeight="400"
        letterSpacing="4"
        fill="#D4AF37"
        opacity="0.6"
      >
        THE MEASURE OF EXCELLENCE
      </text>

      {/* Thin gold line separator */}
      <line x1="95" y1="68" x2="560" y2="68" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
