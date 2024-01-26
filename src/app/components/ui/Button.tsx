import classNames from "classnames";
import Link from "next/link";
import { MouseEvent } from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "sm" | "md" | "lg" | "xl" | "3/4" | "full" | "contact" | "default";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ variant, href, onClick, children }: ButtonProps) {
  const buttonClassNames = classNames(
    "py-2 px-4  justify-center rounded-lg bg-deepblue-600  text-white hover:bg-deepblue-500  font-semibold  border-sb-400 hover:text-sb-400",
    {
      "px-2.5 py-1 text-sm": variant === "sm",
      "px-3 py-1.5 text-sm": variant === "md",
      "px-3.5 py-2 text-sm": variant === "lg",
      "px-9 py-2.5 text-sm": variant === "xl",
      "w-full py-2.5 text-sm": variant === "full",
      "w-3/4 py-2.5 text-sm flex items-center gap-x-2": variant === "3/4",
      "w-12 h-12 rounded-full grid place-items-center": variant === "contact",
    }
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <div className={buttonClassNames}>{children}</div>
      </Link>
    );
  }

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
