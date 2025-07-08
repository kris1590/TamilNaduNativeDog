import NavLink from "../components/nav-link.js";
import { MobileNavLink } from "../components/nav-link.js";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NAV_ITEMS } from "../../lib/constants";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200 sticky z-50 top-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-neutral-900">
                Tamil Nadu Native Breeds
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden transition-colors"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block transition-colors"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel
        transition
        className="sm:hidden origin-top transition-all duration-300 ease-in-out data-[closed]:-translate-y-full data-[closed]:opacity-0 border-t border-neutral-200 bg-white/95 backdrop-blur-sm"
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {NAV_ITEMS.map((item) => (
            <MobileNavLink key={item.href} href={item.href}>
              {item.label}
            </MobileNavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
