import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`d-container ${className}`.trim()}>{children}</div>;
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function ButtonLink({
  children,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`d-button ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
