import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3 text-sm font-medium font-sans transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-bordo text-white hover:bg-bordo/90",
  outline: "border border-ink text-ink bg-transparent hover:bg-ink hover:text-white",
  "outline-light": "border border-white text-white bg-transparent hover:bg-white hover:text-ink",
};

export function brandButtonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; as: "a" };

export const BrandButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
  ),
);
BrandButton.displayName = "BrandButton";

export function BrandLink({ variant = "primary", className, as: _as, ...props }: LinkProps) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}
