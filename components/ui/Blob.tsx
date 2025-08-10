export default function Blob({ className }:{ className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA"/>
          <stop offset="100%" stopColor="#FF4D8D"/>
        </linearGradient>
      </defs>
      <path fill="url(#g)" d="M45.4,-53.7C57.2,-42.3,63.9,-28.6,68.8,-13.7C73.6,1.2,76.6,17.3,70.8,30.1C65,42.9,50.4,52.4,35.7,60.1C21,67.7,10.5,73.5,-2.5,77.6C-15.6,81.7,-31.2,84.1,-43.6,78C-55.9,71.9,-65.1,57.2,-70.1,42.2C-75.2,27.2,-76.1,11.9,-73.4,-2.4C-70.6,-16.8,-64.3,-30.1,-54,-41.3C-43.7,-52.5,-29.3,-61.5,-13.9,-65.5C1.5,-69.5,17,-68.4,31.2,-62.1C45.4,-55.7,58.4,-44.9,45.4,-53.7Z" transform="translate(100 100)" />
    </svg>
  );
}
