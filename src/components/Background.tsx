import { Spotlight } from '@/components/ui/spotlight-new';

export function UniversalBackground() {
  return (
    <div className="fixed inset-0 h-full w-full overflow-hidden bg-black">
      <div className="portfolio-grid absolute inset-0" />
      <div className="noise-layer absolute inset-0" />
      <Spotlight
        gradientFirst="radial-gradient(62% 68% at 52% 30%, rgba(255, 255, 255, .075) 0, rgba(255, 255, 255, .018) 50%, rgba(255, 255, 255, 0) 82%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(148, 163, 184, .055) 0, rgba(148, 163, 184, .014) 78%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, .04) 0, rgba(255, 255, 255, .01) 76%, transparent 100%)"
        duration={12}
        xOffset={56}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/[0.78] to-transparent" />
    </div>
  );
}
