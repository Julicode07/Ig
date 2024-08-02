import React from "react";
import "../../index.css";
import Home from "../../icons/Home.js";
import Search from "../../icons/Search.js";
import Explore from "../../icons/Explore.js";
import Reels from "../../icons/Reels.js";
import Messenger from "../../icons/Messenger.js";
import Notifications from "../../icons/Notifications.js";
import Create from "../../icons/Create.js";
import Santiago from "../../assets/santiago.jpg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", icon: Home },
  { name: "Search", icon: Search },
  { name: "Explore", icon: Explore },
  { name: "Reels", icon: Reels },
  { name: "Messenger", icon: Messenger },
  { name: "Notifications", icon: Notifications },
  { name: "Create", icon: Create },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Aside() {
  const className =
    "py-4 px-2 flex gap-4 font-extrabold hover:bg-[#c4c4c434] rounded-lg";

  return (
    <>
      <Disclosure as="nav" className="bg-black lg:hidden">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </Disclosure.Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <span className="text-white font-bold">Santiago Garcia</span>
              <img
                src={Santiago}
                className="h-10 rounded-full ml-3"
                alt="logo"
              />
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 py-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href="#"
                className={classNames(
                  "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-3 my-2 text-lg font-bold"
                )}
              >
                <span className="flex items-center gap-4">
                  <item.icon />
                  {item.name}
                </span>
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>

      <div className="hidden lg:flex flex-col gap-2 dark:text-white cursor-pointer">
        {navigation.map((item) => (
          <span key={item.name} className={className}>
            <item.icon />
            <p className="side-icons">{item.name}</p>
          </span>
        ))}
        <span className="py-4 px-2 flex gap-4 font-base hover:bg-[#c4c4c434] rounded-lg">
          <img src={Santiago} className="h-6 rounded-full" alt="logo" />
          <p className="side-icons">Santiago Garcia</p>
        </span>
      </div>
    </>
  );
}

export default Aside;
