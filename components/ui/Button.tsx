import { clsx } from "clsx";
import Link from "next/link";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLink?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ asLink, className, variant="primary", ...props }: Props) {
  const base = clsx(
    "inline-flex items-center justify-center rounded-full px-5 py-3 font-medium transition",
    {
      "bg-neon text-black hover:opacity-90": variant === "primary",
      "bg-lavender text-black hover:opacity-90": variant === "secondary",
      "bg-transparent text-text border border-white/10 hover:border-white/20": variant === "ghost",
    },
    className
  );

  if (asLink) return <Link href={asLink} className={base}>{props.children}</Link>;
  return <button className={base} {...props} />;
}
