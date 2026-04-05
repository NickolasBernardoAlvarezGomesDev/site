import Image from "next/image";
import { ICONS } from "@/lib/assets";

export type EngineeringIconName = keyof typeof ICONS.engineering;

type EngineeringIconProps = {
  name: EngineeringIconName;
  alt?: string;
  size?: number;
  className?: string;
  decorative?: boolean;
};

export function EngineeringIcon({
  name,
  alt = "",
  size = 20,
  className,
  decorative = true
}: EngineeringIconProps) {
  return (
    <Image
      src={ICONS.engineering[name]}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      width={size}
      height={size}
      className={className}
    />
  );
}
