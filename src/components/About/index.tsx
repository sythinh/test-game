"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

// hooks
import { useIsMobileResize } from "@/hooks/useMobile";

const AboutUs = () => {
  const t = useTranslations("About");
  const isMobile = useIsMobileResize();
  return (
    <section className="md:py-16 md:px-16 container mx-auto">
      <div className="flex flex-col md:flex-row mx-auto w-full md:w-2/3">
        {/* Heading */}
        <div className="flex flex-col w-full md:w-1/2 md:mr-10 px-4">
          <div className="mb-12 w-full">
            <h2 className="text-[40px] md:text-6xl font-bold text-gray-900">
              {t("title")}
            </h2>
            <p className="text-base text-gray-600 mt-4">{t("description")}</p>
          </div>

          {/* Stats Section */}
          <div className="flex md:flex-col justify-between mb-10 md:mb-0">
            <div className="">
              <div className="text-5xl font-extrabold text-blue-600 flex">
                <h3 className="relative">600</h3>
                <p className="text-lg top-[23px] relative font-serif">
                  {t("count")}
                </p>
                <span>+</span>
              </div>
              <p className="text-black mt-2 font-bold">{t("users")}</p>
            </div>
            <div className="md:mt-10">
              <div className="text-5xl font-extrabold text-blue-600">
                <h3 className="">135+</h3>
              </div>
              <p className="ext-black font-bold mt-2">{t("games")}</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-grayCream flex flex-col gap-8 justify-center w-full md:w-1/2 py-8 md:px-4">
          <div className="flex gap-3 px-4">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <Image src="/icons/time.svg" width={50} height={50} alt="time" />
            </div>
            <div className="w-3/4">
              <h4 className="text-xl font-bold text-gray-900 pb-2">
                {t("24h")}
              </h4>
              <p className="text-gray-600 text-base">{t("desc24h")}</p>
            </div>
          </div>
          <div className="flex gap-3 px-4">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/icons/design.svg"
                width={50}
                height={50}
                alt="time"
              />
            </div>
            <div className="w-3/4">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {t("design")}
              </h4>
              <p className="text-gray-600 text-base">{t("descDesign")}</p>
            </div>
          </div>
          <div className="flex gap-3 px-4">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <Image src="/icons/team.svg" width={50} height={50} alt="time" />
            </div>
            <div className="w-3/4">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {t("team")}
              </h4>
              <p className="text-gray-600 text-base">{t("descTeam")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col-reverse justify-center items-center mt-10">
        <Image src="/images/pin-map.png" alt="map" width={1160} height={428} />
        <Image
          src={`/images/${
            isMobile ? "Illustrator_mobile.png" : "Illustrator.png"
          }`}
          alt="Witch"
          width={isMobile ? 300 : 450}
          height={isMobile ? 243 : 450}
          className="animate-float hover:scale-110 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default AboutUs;
