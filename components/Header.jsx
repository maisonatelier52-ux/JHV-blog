import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex h-[76px] items-center justify-between px-6 tab:h-[88px] tab:px-10 desk:h-[calc(96_*_var(--u))] desk:min-h-[64px] desk:pl-[5.2vw] desk:pr-[4.7vw]">
      <Link
        href="/"
        aria-label="JHV home"
        className="flex items-center gap-3 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold desk:gap-[calc(13_*_var(--u))]"
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={129}
          height={192}
          priority
          className="block h-11 w-auto desk:h-[max(34px,calc(47_*_var(--u)))]"
        />
        <span className="font-serif text-[24px] font-medium tracking-[0.02em] desk:text-[length:max(19px,calc(24_*_var(--u)))]">
          JHV
        </span>
      </Link>
    </header>
  );
}
