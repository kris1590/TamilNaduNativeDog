"use client";
import { usePathname } from "next/navigation";
import { DisclosureButton } from "@headlessui/react";
import Link from "next/link";
export default function NavLink({ href, children }) {
  const pathName = usePathname();
  const isActive = (path) => {
    console.log("Current path:", pathName); // Logs the current path
    return pathName === path;
  };
  return (
    <>
      <Link
        href={href}
        className={`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium 
                   ${
                     isActive(href)
                       ? "border-indigo-500 text-gray-900"
                       : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                   }
                `}
      >
        {children}
      </Link>
    </>
  );
}

export function MobileNavLink({ href, children }) {
  const pathName = usePathname();
  const isActive = (path) => {
    console.log("Current path:", pathName); // Logs the current path
    return pathName === path;
  };

  return (
    <>
      <DisclosureButton
        as="a"
        href={href}
        className={`block   py-2 pl-3 pr-4 text-base font-medium
              ${
                isActive(href)
                  ? "bg-indigo-50 border-l-4 border-solid  border-indigo-500  text-indigo-700"
                  : " text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 border-transparent"
              }`}
      >
        {children}
      </DisclosureButton>
    </>
  );
}
