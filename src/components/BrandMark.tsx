export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "brand-mark"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
    >
      <rect width="512" height="512" rx="112" fill="#080A0F" />
      <rect x="12" y="12" width="488" height="488" rx="100" fill="none" stroke="#f68c36" strokeWidth="12" />
      <text
        x="256"
        y="334"
        textAnchor="middle"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="342"
        fontWeight="850"
        letterSpacing="-18"
        fill="#F8FAFC"
      >
        S
      </text>
      <rect x="354" y="390" width="68" height="28" rx="7" fill="#f68c36" />
    </svg>
  );
}
