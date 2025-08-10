import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Navbar from "@/components/ui/Navbar";
import Blob from "@/components/ui/Blob";

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="relative overflow-hidden rounded-blob border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-10">
        <div className="absolute -left-24 -top-24 w-72 opacity-30 blur-2xl"><Blob/></div>
        <div className="absolute -right-24 -bottom-24 w-96 opacity-20 blur-3xl"><Blob/></div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold leading-tight">
              Astrology you can <span className="text-gradient">feel, live, act on</span>.
            </h1>
            <p className="text-sub max-w-prose">
              BeAstroFit blends AI insights with expert validation. Get clear guidance, not vague forecasts.
            </p>
            <div className="flex gap-3">
              <Button asLink="/compatibility">Free Compatibility</Button>
              <Button asLink="/onboarding" variant="secondary">Get Daily Guidance</Button>
            </div>
            <div className="text-xs text-sub pt-2">No spam. Your data stays yours.</div>
          </div>
          <Card className="p-6">
            <div className="aspect-[9/16] w-full rounded-2xl bg-[url('/hero-placeholder.jpg')] bg-cover bg-center flex items-end p-4">
              <div className="w-full rounded-2xl bg-black/50 p-4">
                <div className="text-sm text-sub">Today’s vibe</div>
                <div className="text-lg">Take the step you’ve been circling. Momentum beats perfect timing.</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <section className="py-16 grid md:grid-cols-3 gap-6">
        {[
          {title: 'AI + Expert', desc: 'Machine precision meets human wisdom.'},
          {title: 'Actionable', desc: 'Clear next steps for love, career, wellness.'},
          {title: 'Private', desc: 'Own your data. Delete anytime.'},
        ].map((f,i)=>(
          <Card key={i} className="p-6">
            <div className="text-neon font-semibold">{f.title}</div>
            <p className="text-sub mt-2">{f.desc}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
