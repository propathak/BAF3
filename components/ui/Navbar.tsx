import Button from "./Button";
import Blob from "./Blob";

export default function Navbar() {
  return (
    <div className="relative">
      <div className="absolute -top-24 -right-10 w-64 opacity-30 blur-2xl pointer-events-none">
        <Blob />
      </div>
      <nav className="flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-neon flex items-center justify-center text-black font-black">★</div>
          <span className="font-semibold">BeAstroFit</span>
        </div>
        <div className="flex items-center gap-3">
          <Button asLink="/compatibility" variant="ghost">Compatibility</Button>
          <Button asLink="/dashboard" variant="ghost">Dashboard</Button>
          <Button asLink="/paywall">Go Pro</Button>
        </div>
      </nav>
    </div>
  );
}
