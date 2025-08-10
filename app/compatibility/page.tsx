'use client';
import { useMemo, useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CompatibilityMeter from '@/components/ui/CompatibilityMeter';
import { sunSignFromDate, compatibility, type Sign } from '@/lib/astrology';

export default function CompatibilityPage() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [aDate, setADate] = useState('');
  const [bDate, setBDate] = useState('');
  const [interests, setInterests] = useState(1);

  const aSign: Sign | null = useMemo(()=> aDate ? sunSignFromDate(aDate) : null, [aDate]);
  const bSign: Sign | null = useMemo(()=> bDate ? sunSignFromDate(bDate) : null, [bDate]);
  const pct = useMemo(()=> (aSign && bSign) ? compatibility(aSign, bSign, interests) : 0, [aSign, bSign, interests]);

  return (
    <div className="py-10 max-w-3xl mx-auto">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold">Cosmic Compatibility</h2>
        <p className="text-sub">Fast, fun, and a little neon. Get a quick sense—and an action step.</p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="space-y-2">
            <div className="text-sm text-sub">You</div>
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Your name" value={a} onChange={e=>setA(e.target.value)} />
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" type="date" value={aDate} onChange={e=>setADate(e.target.value)} />
            <div className="text-sm text-sub mt-1">{aDate && `Sign: ${aSign}`}</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-sub">Partner</div>
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Their name" value={b} onChange={e=>setB(e.target.value)} />
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" type="date" value={bDate} onChange={e=>setBDate(e.target.value)} />
            <div className="text-sm text-sub mt-1">{bDate && `Sign: ${bSign}`}</div>
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm text-sub">Shared interests (rough guess):</label>
          <input type="range" min={0} max={3} value={interests} onChange={e=>setInterests(parseInt(e.target.value))} className="w-full" />
        </div>

        {pct>0 && (
          <div className="mt-6">
            <CompatibilityMeter value={pct} />
            <div className="mt-3 text-sub">Action:</div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Plan a small shared activity this week—momentum matters.</li>
              <li>Be explicit about one need and one boundary.</li>
              <li>Keep first plans short and fun; recalibrate after.</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Button asLink="/paywall">Unlock full reading</Button>
              <Button variant="ghost">Save</Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
