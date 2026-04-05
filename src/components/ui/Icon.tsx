type IconProps = {
  src: string;
  alt?: string;
  className?: string;
  decorative?: boolean;
};

export function Icon({ src, alt = "", className = "", decorative = true }: IconProps) {
  return <img className={["icon", className].filter(Boolean).join(" ")} src={src} alt={decorative ? "" : alt} aria-hidden={decorative} />;
}
