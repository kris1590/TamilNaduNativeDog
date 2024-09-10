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

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white shadow sticky z-50 top-0"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">
                Open main menu
              </span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/about"}>About</NavLink>
              <NavLink href={"/gallery"}>Gallery</NavLink>
              <NavLink href={"/contact"}>Contact</NavLink>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel
        transition
        className="sm:hidden origin-top transition duration-500 ease-in-out data-[closed]:-translate-y-full data-[closed]:opacity-0"
      >
        <div className="space-y-4 pb-4 pt-2 text-center ">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/gallery">
            Gallery
          </MobileNavLink>
          <MobileNavLink href="/contact">
            Contact
          </MobileNavLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
