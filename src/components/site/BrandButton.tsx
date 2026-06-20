import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "dark" | "light";

const base =
  "inline-flex items-center justify-center rounded-[4px] px-6 py-2.5 text-sm font-medium font-sans border transition-colors";

const variants: Record<Variant, string> = {
  dark: "border-brand text-brand bg-transparent hover:bg-brand hover:text-brand-foreground",
  light: "border-white text-white bg-transparent hover:bg-white hover:text-brand",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; as: "a" };

export const BrandButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "dark", className, ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
  ),
);
BrandButton.displayName = "BrandButton";

export function BrandLink({ variant = "dark", className, as: _as, ...props }: LinkProps) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}
