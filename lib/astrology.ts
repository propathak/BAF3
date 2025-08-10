export type Sign =
  | "Aries" | "Taurus" | "Gemini" | "Cancer" | "Leo" | "Virgo"
  | "Libra" | "Scorpio" | "Sagittarius" | "Capricorn" | "Aquarius" | "Pisces";

export function sunSignFromDate(dateStr: string): Sign {
  const d = new Date(dateStr);
  const m = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  // Simplified Western ranges; good enough for MVP (edge dates can be refined).
  if ((m===3 && day>=21) || (m===4 && day<=19)) return "Aries";
  if ((m===4 && day>=20) || (m===5 && day<=20)) return "Taurus";
  if ((m===5 && day>=21) || (m===6 && day<=20)) return "Gemini";
  if ((m===6 && day>=21) || (m===7 && day<=22)) return "Cancer";
  if ((m===7 && day>=23) || (m===8 && day<=22)) return "Leo";
  if ((m===8 && day>=23) || (m===9 && day<=22)) return "Virgo";
  if ((m===9 && day>=23) || (m===10 && day<=22)) return "Libra";
  if ((m===10 && day>=23) || (m===11 && day<=21)) return "Scorpio";
  if ((m===11 && day>=22) || (m===12 && day<=21)) return "Sagittarius";
  if ((m===12 && day>=22) || (m===1 && day<=19)) return "Capricorn";
  if ((m===1 && day>=20) || (m===2 && day<=18)) return "Aquarius";
  return "Pisces"; // (m===2 && day>=19) || (m===3 && day<=20)
}

const base: Record<Sign, Partial<Record<Sign, number>>> = {
  Aries: { Leo:85, Sagittarius:82, Gemini:78, Libra:70, Pisces:55 },
  Taurus: { Virgo:84, Capricorn:82, Cancer:79, Scorpio:72, Aquarius:55 },
  Gemini: { Libra:86, Aquarius:84, Aries:78, Leo:75, Virgo:56 },
  Cancer: { Scorpio:86, Pisces:84, Taurus:79, Virgo:73, Aries:56 },
  Leo: { Aries:85, Sagittarius:84, Gemini:75, Libra:74, Capricorn:56 },
  Virgo: { Taurus:84, Capricorn:84, Cancer:73, Scorpio:71, Gemini:56 },
  Libra: { Gemini:86, Aquarius:84, Leo:74, Aries:70, Cancer:58 },
  Scorpio: { Cancer:86, Pisces:84, Virgo:71, Capricorn:72, Leo:55 },
  Sagittarius: { Aries:82, Leo:84, Aquarius:78, Libra:73, Pisces:56 },
  Capricorn: { Taurus:82, Virgo:84, Pisces:77, Scorpio:72, Leo:56 },
  Aquarius: { Gemini:84, Libra:84, Sagittarius:78, Aries:66, Taurus:55 },
  Pisces: { Cancer:84, Scorpio:84, Capricorn:77, Taurus:74, Aries:55 },
};

export function compatibility(a: Sign, b: Sign, sharedInterests = 0): number {
  const z = base[a]?.[b] ?? 65;
  const interestBoost = Math.min(15, sharedInterests * 5);
  return Math.max(1, Math.min(99, Math.round(z + interestBoost)));
}

export function quickAdvice(sign: Sign): string {
  const tips: Record<Sign, string> = {
    Aries: "Act fast, but pick one priority today.",
    Taurus: "Invest in comfort—small routines bring big wins.",
    Gemini: "Ask the second question. Connection follows.",
    Cancer: "Home energy fuels your next leap.",
    Leo: "Own the room; share the spotlight.",
    Virgo: "Ship the draft—iteration beats perfection.",
    Libra: "Choose one option now; refine later.",
    Scorpio: "Focus beats force. Protect your energy.",
    Sagittarius: "Say yes to the short adventure.",
    Capricorn: "Small progress compounds—trust it.",
    Aquarius: "Share your weird idea. It lands.",
    Pisces: "Turn the feeling into action—one step."
  };
  return tips[sign];
}
