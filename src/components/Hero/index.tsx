"use client";
import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useTranslations } from "next-intl";

// component
import { Input } from "@headlessui/react";

// icons
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// hooks
import { useIsMobileResize } from "@/hooks/useMobile";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Include the weights you need
});

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const t = useTranslations("Hero");

  const isMobile = useIsMobileResize();

  const [scrollDirection, setScrollDirection] = useState("");
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        setScrollDirection("down");
      } else if (currentScrollPosition === 0) {
        setScrollDirection("up");
      }

      setLastScrollPosition(
        currentScrollPosition <= 0 ? 0 : currentScrollPosition
      );
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // Set countdown for 30 days

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-full md:h-svh flex flex-col-reverse  justify-center items-center text-center text-white bg-hero-bg-mobile md:bg-hero-bg-desktop bg-cover bg-center bg-no-repeat mx-auto px-4">
      <div className="md:absolute md:z-0 md:left-0 mb-10 md:mb-0 md:bottom-0 ">
        <Image
          width={938}
          height={938}
          alt="ong_tien"
          src={`/images/${isMobile ? "ong_tien_mobile.png" : "ong_tien.png"}`}
        />
      </div>
      <div className="flex flex-col w-full md:w-[756px] z-10 mt-20">
        <div className="flex flex-col md:flex-row items-center text-[40px] leading-[50px] md:text-7xl font-bold mt-6 mb-6 px-5 text-center">
          <h2>{t("title")}</h2>
          <h2>{t("title2")}</h2>
        </div>

        <div className="md:px-20">
          <div className="flex items-center justify-center gap-4 md:gap-10 font-semibold text-black bg-white w-full rounded-lg px-10 py-5">
            <div className="flex flex-col justify-center">
              <div
                className={`text-[40px] md:text-6xl ${playfairDisplay.className} mb-4`}
              >
                {timeLeft.days}
              </div>
              <div className="text-base">{t("days")}</div>
            </div>
            <div>
              <span className="text-2xl">:</span>
            </div>
            <div className="flex flex-col justify-center">
              <div
                className={`text-[40px] md:text-6xl ${playfairDisplay.className} mb-4`}
              >
                {timeLeft.hours}
              </div>
              <div className="text-base">{t("hours")}</div>
            </div>
            <div>
              <span className="text-2xl">:</span>
            </div>
            <div className="flex flex-col justify-center">
              <div
                className={`text-[40px] md:text-6xl ${playfairDisplay.className} mb-4`}
              >
                {timeLeft.minutes}
              </div>
              <div className="text-base">{t("minutes")}</div>
            </div>
            <div>
              <span className="text-2xl">:</span>
            </div>
            <div className="flex flex-col justify-center">
              <div
                className={`text-[40px] md:text-6xl ${playfairDisplay.className} mb-4`}
              >
                {timeLeft.seconds}
              </div>
              <div className="text-base">{t("seconds")}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6 w-full items-center">
          <div>
            <p className="mt-8 text-xs md:text-lg font-light md:px-32 mb-5 md:mb-10">
              {t("description")}
            </p>
          </div>

          <div className="relative w-full md:w-4/6 text-center">
            <Input
              type="email"
              placeholder={t("input")}
              className="px-4 py-2 h-14 rounded-l bg-white text-black rounded-md w-full"
            />
            <ArrowRightIcon
              width={20}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
            />
          </div>
        </div>
        <button className="fixed flex items-center justify-center w-14 h-14 md:w-10 md:h-10 bottom-1/2 right-8 md:right-10 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-600 hover:text-white transition-colors z-50">
          {scrollDirection === "down" ? (
            <FaChevronUp
              className="w-7 h-7 md:w-4 md:h-4"
              onClick={handleScrollTop}
            />
          ) : (
            <FaChevronDown className="w-7 h-7 md:w-4 md:h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
