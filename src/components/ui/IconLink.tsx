import { Link } from "react-router-dom";
import { Icon } from "@/components/ui/Icon";

type IconLinkProps = {
  label: string;
  icon: string;
  href?: string;
  to?: string;
  className?: string;
};

export function IconLink({ label, icon, href, to, className = "" }: IconLinkProps) {
  const classes = ["icon-link", className].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link aria-label={label} className={classes} to={to}>
        <Icon src={icon} decorative className="icon--lg" />
      </Link>
    );
  }

  if (!href) {
    return null;
  }

  const external = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a aria-label={label} className={classes} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <Icon src={icon} decorative className="icon--lg" />
    </a>
  );
}
