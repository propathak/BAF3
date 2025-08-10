import { clsx } from "clsx";

export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={clsx("rounded-blob bg-surface/80 backdrop-blur shadow-soft border border-white/5", className)}>
      {children}
    </div>
  );
}
