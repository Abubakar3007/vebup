import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="VebUp — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
          <path
            d="M4 6.5 10.5 19 17 6.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="18.5" cy="6" r="2.2" fill="currentColor" />
        </svg>
      </span>
      <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-foreground">
        Veb<span className="text-gradient">Up</span>
      </span>
    </Link>
  );
}
