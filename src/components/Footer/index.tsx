import React from "react";
import Image from "next/image";

// components
import { Input } from "@headlessui/react";

// icons
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="text-white">
      <div
        className="bg-gradient-to-b from-blue-800 via-blue-900 to-gray-900"
        style={{
          backgroundImage: 'url("/images/bg_footer.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row h-full md:h-[446px] justify-around items-center py-10 px-4">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center mb-6 ">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={163}
              height={96}
              className="mb-4"
            />
            <div className="flex space-x-8">
              <a href="#" className="hover:text-gray-300" aria-label="Twitter">
                <FaTwitter className="h-10 w-10" />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                <FaFacebookSquare className="h-10 w-10" />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
                <FaLinkedin className="h-10 w-10" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-1">
            {/* Address Section */}
            <div className="mb-6 md:mb-0 text-left w-full md:w-1/2">
              <div className="mb-4 md:pr-5">
                <h3 className="text-lg font-bold mb-2">{t("address")}</h3>
                <div className="flex">
                  <div className="w-16">
                    <Image
                      src="/icons/location.svg"
                      width={40}
                      height={40}
                      alt="mobile"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="mb-2">{t("addressDetailOne")}</p>
                    <p>{t("addressDetailTwo")}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-12">
                  <Image
                    width={40}
                    height={40}
                    src="/icons/mobile.svg"
                    alt="mobile"
                  />
                </div>

                <p>{t("phone")}</p>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="text-left w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-2">{t("subscribe")}</h3>
              <p className="mb-4">{t("subscribeDesc")}</p>
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder={t("placeHolder")}
                  className="px-4 py-2 rounded-md bg-transparent text-white w-full border bottom-2 border-white outline-none"
                />
                <ArrowRightIcon
                  width={20}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="text-center text-sm py-4 bg-black">
        © 2023 Copyright Policy.
      </div>
    </footer>
  );
};

export default Footer;
