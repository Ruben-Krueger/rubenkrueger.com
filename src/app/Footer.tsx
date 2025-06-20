'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const styles = {
  active: 'font-bold underline underline-offset-4',
};

function FooterLink({
  href,
  icon,
  text,
}: {
  href: string;
  icon: string;
  text: string;
}) {
  const path = usePathname();
  const isActive = path === href;
  return (
    <a
      className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${isActive && styles.active}`}
      href={href}
    >
      <Image
        aria-hidden
        src={icon}
        alt={`${text} icon`}
        width={16}
        height={16}
      />
      {text}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <FooterLink href="/" icon="/home.svg" text="Home" />
      <FooterLink href="/blog" icon="/file.svg" text="Blog" />
      <FooterLink href="/papers" icon="/science.svg" text="Papers" />
      <FooterLink href="/contact" icon="/globe.svg" text="Contact" />
    </footer>
  );
}
