'use client';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { sunSignFromDate, quickAdvice, type Sign } from '@/lib/astrology';

export default function Onboarding() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [sign, setSign] = useState<Sign | null>(null);

  const handle = () => {
    if (!dob) return;
    const s = sunSignFromDate(dob);
    setSign(s);
  };

  return (
    <div className="py-10 max-w-2xl mx-auto">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold">Get your daily guidance</h2>
        <p className="text-sub">Two quick fields and we’ll personalize your dashboard.</p>
        <div className="mt-6 grid gap-4">
          <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
          <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" type="date" value={dob} onChange={e=>setDob(e.target.value)} />
          <Button onClick={handle}>Show my sign</Button>
        </div>
        {sign && (
          <div className="mt-6 rounded-xl border border-white/10 p-4">
            <div className="text-sub">Your sun sign</div>
            <div className="text-3xl font-semibold mt-1">{sign}</div>
            <div className="mt-3">{quickAdvice(sign)}</div>
            <div className="mt-4">
              <Button asLink="/dashboard">Continue</Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
