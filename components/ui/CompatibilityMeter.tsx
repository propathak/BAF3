export default function CompatibilityMeter({ value }:{ value:number }) {
  const pct = Math.max(1, Math.min(99, Math.round(value)));
  return (
    <div className="p-4">
      <div className="relative h-3 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon via-lavender to-pink"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-sub">Compatibility: <span className="text-text font-semibold">{pct}%</span></div>
    </div>
  );
}
