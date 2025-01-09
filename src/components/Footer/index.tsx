import React from "react";
import { FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Input } from "@headlessui/react";

const Footer = () => {
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
                <h3 className="text-lg font-bold mb-2">Address</h3>
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
                    <p className="mb-2">
                      Valletta Buildings, South Street, Valletta - VLT 1103
                      Malta, US
                    </p>
                    <p>
                      20 Phan Dang Luu street, Hai Chau District, Danang city,
                      Vietnam
                    </p>
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

                <p>(+1) 555-0108-000 or (+236) 555-0108</p>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="text-left w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
              <p className="mb-4">
                Subscribe to our newsletter to stay updated on our services.
              </p>
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Enter your email"
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
