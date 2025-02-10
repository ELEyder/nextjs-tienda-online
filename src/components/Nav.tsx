'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {

  const pathname = usePathname();

  const isForm = pathname === '/login' || pathname === '/register';

  return (
    !isForm ? (
      <header>
        <nav className="bg-[var(--cp)] text-white p-4 w-full sticky top-0 z-10">
          <ul className="flex flex-row gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    ) : null
  );
}