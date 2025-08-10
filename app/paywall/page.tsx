import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { PRICING } from "@/lib/pricing";

export default function Paywall() {
  return (
    <div className="py-10 max-w-4xl mx-auto">
      <Card className="p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sub">BeAstroFit Pro</div>
            <h2 className="text-3xl font-semibold mt-2">Make better moves, faster.</h2>
            <ul className="mt-4 space-y-2 text-sub">
              <li>• Full compatibility breakdown</li>
              <li>• Advanced filters & insights</li>
              <li>• Expert review: ask a human</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Card className="p-5">
              <div className="text-lg">Monthly</div>
              <div className="text-3xl font-bold mt-1">₹{PRICING.monthly.amount}<span className="text-base font-medium text-sub">/mo</span></div>
              <Button className="mt-4 w-full">Start monthly</Button>
            </Card>
            <Card className="p-5 border-neon/30">
              <div className="text-lg">Yearly</div>
              <div className="text-3xl font-bold mt-1">₹{PRICING.yearly.amount}<span className="text-base font-medium text-sub">/yr</span></div>
              <Button className="mt-4 w-full" variant="secondary">Start yearly</Button>
            </Card>
          </div>
        </div>
      </Card>
      <p className="text-center text-xs text-sub mt-4">Payments by Stripe. Cancel anytime.</p>
    </div>
  );
}
