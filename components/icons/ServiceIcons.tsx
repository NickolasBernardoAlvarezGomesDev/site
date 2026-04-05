import Image from "next/image";
import { ICONS } from "@/lib/assets";

export type ServiceIconName = keyof typeof ICONS.services;

type ServiceIconProps = {
  name: ServiceIconName;
  alt?: string;
  size?: number;
  className?: string;
  decorative?: boolean;
};

export function ServiceIcon({
  name,
  alt = "",
  size = 20,
  className,
  decorative = true
}: ServiceIconProps) {
  return (
    <Image
      src={ICONS.services[name]}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      width={size}
      height={size}
      className={className}
    />
  );
}
