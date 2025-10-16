'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classes from './NavLink.module.css'

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? classes.active : undefined}>
      {children}
    </Link>
  );
}
