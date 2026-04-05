import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost" | "icon";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

type LinkButtonProps = BaseProps & {
  to: string;
  href?: never;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">;

type AnchorButtonProps = BaseProps & {
  href: string;
  to?: never;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

type NativeButtonProps = BaseProps & {
  href?: never;
  to?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps;

function getClasses(variant: Variant, className?: string) {
  return ["button", `button--${variant}`, className].filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className, iconLeft, iconRight } = props;
  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if ("to" in props) {
    const {
      to,
      children: _children,
      variant: _variant,
      className: _className,
      iconLeft: _iconLeft,
      iconRight: _iconRight,
      ...rest
    } = props;

    return (
      <Link className={getClasses(variant, className)} to={to} {...rest}>
        {content}
      </Link>
    );
  }

  if ("href" in props) {
    const {
      href,
      rel,
      target,
      children: _children,
      variant: _variant,
      className: _className,
      iconLeft: _iconLeft,
      iconRight: _iconRight,
      ...rest
    } = props;
    const external = href.startsWith("http") || href.startsWith("mailto:");

    return (
      <a
        className={getClasses(variant, className)}
        href={href}
        target={external ? "_blank" : target}
        rel={external ? "noreferrer" : rel}
        {...rest}
      >
        {content}
      </a>
    );
  }

  const {
    type = "button",
    children: _children,
    variant: _variant,
    className: _className,
    iconLeft: _iconLeft,
    iconRight: _iconRight,
    ...rest
  } = props;

  return (
    <button className={getClasses(variant, className)} type={type} {...rest}>
      {content}
    </button>
  );
}
