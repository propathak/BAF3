import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Dashboard() {
  return (
    <div className="py-10 grid gap-6 md:grid-cols-3">
      <Card className="p-6 md:col-span-2">
        <div className="text-sub">Today</div>
        <h3 className="text-2xl font-semibold mt-1">Tiny step > perfect plan</h3>
        <p className="mt-2 text-sub">Pick one thing you can finish in 20 minutes. Start now, adjust later.</p>
        <div className="mt-4"><Button variant="secondary">Get a focused nudge</Button></div>
      </Card>
      <Card className="p-6">
        <div className="text-sub">Pro</div>
        <h3 className="text-xl font-semibold mt-1">Unlock deeper insights</h3>
        <p className="text-sub mt-2">Advanced compatibility + expert review.</p>
        <div className="mt-4"><Button asLink="/paywall">Go Pro</Button></div>
      </Card>
      <Card className="p-6 md:col-span-3">
        <div className="text-sub">Saved Compatibility Checks</div>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Array.from({length:3}).map((_,i)=>(
            <div key={i} className="rounded-xl border border-white/10 p-3">
              <div className="text-sm">Alex ♥ Priya</div>
              <div className="text-sub text-xs">82% · 2 shared interests</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
