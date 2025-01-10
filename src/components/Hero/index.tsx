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

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Include the weights you need
});

const Hero = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const t = useTranslations("Hero");

  const [scrollDirection, setScrollDirection] = useState("");
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        setScrollDirection("down");
      } else if (currentScrollPosition < lastScrollPosition) {
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

  return (
    <div className="relative w-full h-full md:h-svh flex flex-col-reverse  justify-center items-center text-center text-white bg-hero-bg-mobile md:bg-hero-bg-desktop bg-cover bg-center bg-no-repeat mx-auto px-4">
      <div className="md:absolute md:z-0 md:left-0 ">
        <Image
          width={900}
          height={500}
          alt="ong_tien"
          src="/images/ong_tien.png"
          className="ml-10"
        />
      </div>
      <div className="flex flex-col w-full md:w-[756px] z-10 mt-20">
        <h1 className="text-[40px] leading-[50px] md:text-7xl font-bold mt-6 mb-6 px-5 text-center">
          {t("title")}
        </h1>
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
            <p className="mt-8 text-lg font-light md:px-32 mb-10">
              {t("description")}
            </p>
          </div>

          <div className="relative w-full md:w-4/6 text-center">
            <Input
              type="email"
              placeholder={t("input")}
              className="px-4 py-2 rounded-l bg-white text-black rounded-md w-full"
            />
            <ArrowRightIcon
              width={20}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
            />
          </div>
        </div>
        <button className="fixed bottom-1/2 right-8 md:right-10 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-600 hover:text-white transition-colors">
          {scrollDirection === "down" ? (
            <FaChevronUp width={40} height={40} />
          ) : (
            <FaChevronDown width={40} height={40} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
