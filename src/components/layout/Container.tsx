import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  narrow?: boolean;
};

export function Container({ children, className = "", narrow = false, ...props }: ContainerProps) {
  const classes = [narrow ? "container-narrow" : "container", className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
