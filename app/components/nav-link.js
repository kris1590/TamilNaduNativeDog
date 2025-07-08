"use client";
import { usePathname } from "next/navigation";
import { DisclosureButton } from "@headlessui/react";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const pathName = usePathname();
  const isActive = (path) => {
    return pathName === path;
  };
  
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out
                 ${
                   isActive(href)
                     ? "bg-primary-50 text-primary-700 border border-primary-200"
                     : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                 }
              `}
    >
      {children}
    </Link>
  );
}

export function MobileNavLink({ href, children }) {
  const pathName = usePathname();
  const isActive = (path) => {
    return pathName === path;
  };

  return (
    <DisclosureButton
      as="a"
      href={href}
      className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ease-in-out
            ${
              isActive(href)
                ? "bg-primary-50 text-primary-700 border border-primary-200"
                : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
            }`}
    >
      {children}
    </DisclosureButton>
  );
}
