import Image from "next/image";
import { ICONS } from "@/lib/assets";

export type UIIconName = keyof typeof ICONS.ui;

type UIIconProps = {
  name: UIIconName;
  alt?: string;
  size?: number;
  className?: string;
  decorative?: boolean;
};

export function UIIcon({
  name,
  alt = "",
  size = 20,
  className,
  decorative = true
}: UIIconProps) {
  return (
    <Image
      src={ICONS.ui[name]}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      width={size}
      height={size}
      className={className}
    />
  );
}
