"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "next/navigation";

// constants
import { LANGUAGES } from "@/constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Menu");
  const language = pathname.split("/")[1];

  const changeLanguage = (locale: string) => {
    router.push(`${locale}`);
  };

  useEffect(() => {
    const html = document.documentElement;

    // Theo dõi khi Menu mở
    const observer = new MutationObserver(() => {
      html.style.overflow = "";
      html.style.paddingRight = "";
    });

    observer.observe(html, { attributes: true, attributeFilter: ["style"] });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="flex items-center text-white relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center z-0">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="flex gap-3 items-center">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-20 font-medium uppercase text-base">
            <Link href="javascript:void(0)" className="hover:text-purple-300">
              {t("about")}
            </Link>
            <Link href="javascript:void(0)" className="hover:text-purple-300">
              {t("games")}
            </Link>
            <Link href="javascript:void(0)" className="hover:text-purple-300">
              {t("partners")}
            </Link>
            <Link href="javascript:void(0)" className="hover:text-purple-300">
              {t("contact")}
            </Link>
          </nav>
          {/* Language Selector */}
          <div className="relative hidden md:block pl-12">
            <Menu>
              <MenuButton className="flex items-center px-4 py-2 rounded-lg">
                <span className="text-xl">
                  {LANGUAGES.find((lang) => lang.key === language)?.flag}
                </span>
                <ChevronDownIcon className="ml-2 w-5 h-5" />
              </MenuButton>
              <MenuItems className="absolute right-0 w-44 bg-white text-black rounded-lg">
                {LANGUAGES.map((lang, index) => (
                  <MenuItem key={lang.key}>
                    {({ active }) => (
                      <div key={lang.key}>
                        <div
                          className={`flex items-center px-2  rounded-lg ${
                            active ? "bg-gray-200 " : ""
                          }`}
                        >
                          <button
                            onClick={() => changeLanguage(lang.key)}
                            className={"flex items-center"}
                          >
                            <div>
                              {lang?.key === language ? (
                                <CheckIcon width={32} />
                              ) : (
                                <div className="w-8" />
                              )}
                            </div>
                            {lang.flag}
                            <span className="text-base ml-2">{lang.label}</span>
                          </button>
                        </div>
                        <div
                          className={`${
                            index === 1 ? "hidden" : ""
                          }  mx-3 h-[1px] bg-gray-400`}
                        />
                      </div>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
          <div>
            {/* Mobile Menu Toggle */}
            <button
              className="block md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Bars3Icon className="w-8 h-8" />
            </button>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-white z-50">
              <div className="flex items-center justify-between px-4 py-4">
                {/* Language Selector */}
                <div className="relative">
                  <Menu>
                    <MenuButton className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-md">
                      {LANGUAGES.find((lang) => lang.key === language)?.flag}
                      <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                    </MenuButton>
                    <MenuItems className="absolute left-0 mt-2 w-36 bg-white shadow-md rounded-md">
                      {LANGUAGES.map((lang, index) => (
                        <MenuItem key={lang.key}>
                          {({ active }) => (
                            <div>
                              <button
                                onClick={() => changeLanguage(lang.key)}
                                className={`flex items-center gap-2 px-3 py-2 w-full ${
                                  active ? "bg-gray-100" : ""
                                }`}
                              >
                                {lang.flag}
                                <span className="text-sm text-black">
                                  {lang.label}
                                </span>
                              </button>
                              <div
                                className={`${
                                  index === 1 ? "hidden" : ""
                                }  mx-3 h-[1px] bg-gray-400`}
                              />
                            </div>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>

                {/* Close Button */}
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <XMarkIcon className="w-10 h-10 text-black pr-3" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 px-4">
                <ul className="text-center">
                  <li className="py-4 border-b border-gray-200">
                    <Link
                      href="javascript:void(0)"
                      className="block text-lg font-medium text-black hover:text-gray-700"
                    >
                      {t("about")}
                    </Link>
                  </li>
                  <li className="py-4 border-b border-gray-200">
                    <Link
                      href="javascript:void(0)"
                      className="block text-lg font-medium text-black hover:text-gray-700"
                    >
                      {t("games")}
                    </Link>
                  </li>
                  <li className="py-4 border-b border-gray-200">
                    <Link
                      href="javascript:void(0)"
                      className="block text-lg font-medium text-black hover:text-gray-700"
                    >
                      {t("partners")}
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link
                      href="javascript:void(0)"
                      className="block text-lg font-medium text-black hover:text-gray-700"
                    >
                      {t("contact")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
