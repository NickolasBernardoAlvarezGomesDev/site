import Image from "next/image";
import { ICONS } from "@/lib/assets";

export type BrandIconName = keyof typeof ICONS.brands;

type BrandIconProps = {
  name: BrandIconName;
  alt?: string;
  size?: number;
  className?: string;
  decorative?: boolean;
};

export function BrandIcon({
  name,
  alt = "",
  size = 20,
  className,
  decorative = true
}: BrandIconProps) {
  return (
    <Image
      src={ICONS.brands[name]}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      width={size}
      height={size}
      className={className}
    />
  );
}
