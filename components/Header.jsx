import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex h-[76px] items-center justify-between px-6 animate-[jhv-fall_0.9s_cubic-bezier(0.22,1,0.36,1)_0.9s_both] tab:h-[88px] tab:px-10 desk:h-[calc(108_*_var(--u))] desk:min-h-[64px] desk:pl-[calc(103_*_var(--u))] desk:pr-[4.7vw]">
      <Link
        href="/"
        aria-label="JHV home"
        className="group flex items-center gap-3 no-underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-navy desk:gap-[calc(12_*_var(--u))]"
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={129}
          height={192}
          priority
          className="block h-7 w-auto [transition:transform_0.6s_cubic-bezier(0.22,1,0.36,1)] group-hover:[transform:translateY(-2px)_scale(1.06)] desk:h-[max(34px,calc(56_*_var(--u)))]"
        />
        <span className="font-serif text-[19px] font-normal tracking-[0.01em] text-navy desk:text-[length:max(19px,calc(32_*_var(--u)))]">
          JHV
        </span>
      </Link>
    </header>
  );
}
