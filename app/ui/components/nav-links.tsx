"use client";

import { usePathname } from "@/node_modules/next/navigation";
import Link from "@/node_modules/next/link";
import clsx from 'clsx';

const Links = [
  { name: 'Mens', href: '/mens' },
  { name: 'Womens', href: '/womens' },
  { name: 'new', href: '/new' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {Links.map((link) => {
      return (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "p-4",
            {
              "border-b-4 border-black" : pathname === link.href,
            }
          )}
        >
          <p>{link.name}</p>
        </Link>
      );
    })}
    </>

  );
}