import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="md:py-16 md:px-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row mx-auto w-full md:w-2/3">
        {/* Heading */}
        <div className="flex flex-col w-full md:w-1/2 md:mr-10">
          <div className="mb-12 w-full">
            <h2 className="text-[40px] md:text-6xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="text-gray-600 mt-4">
              Browse our selection of free online games and have a great time
              without leaving the site! Our Kids Games option also includes game
              reviews, extensive game cheats and walkthroughs, and much more. We
              have exclusive free downloads, videos, and articles as well. Etech
              reviews the most popular kids games from all the most popular
              video gaming platforms, so you don’t need to search around for fun
              anywhere else on the Internet. Explore a whole new world of gaming
              on Etech.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex md:flex-col justify-between mb-10 md:mb-0">
            <div className="">
              <div className="text-5xl font-extrabold text-blue-600">
                <h3 className="relative">
                  600 +<p className="absolute left-24 top-1/2 text-lg">M</p>
                </h3>
              </div>
              <p className="text-black mt-2 font-bold">Users</p>
            </div>
            <div className="md:mt-10">
              <h3 className="text-5xl font-extrabold text-blue-600">135+</h3>
              <p className="ext-black font-bold mt-2">Games</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-grayCream flex flex-col gap-5 justify-center w-full md:w-1/2 p-5 md:px-12">
          <div className="flex items-start space-x-4">
            <div className="w-[50px]">
              <Image src="/icons/time.svg" width={50} height={50} alt="time" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">24-Hour</h4>
              <p className="text-gray-600">
                24/7 access ensures operators' businesses run smoothly all year
                long.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-[50px]">
              <Image
                src="/icons/design.svg"
                width={50}
                height={50}
                alt="time"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Design</h4>
              <p className="text-gray-600">
                Combining imaginative universes, play dynamics, and innovative
                gameplay.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-[50px]">
              <Image src="/icons/team.svg" width={50} height={50} alt="time" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Team</h4>
              <p className="text-gray-600">
                An award-winning studio of designers, artists, and producers
                creating content for the biggest names in gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col-reverse justify-center items-center mt-10">
        <Image src="/images/pin-map.png" alt="map" width={1160} height={428} />
        <Image
          src="/images/Illustrator.png"
          alt="Witch"
          width={450}
          height={450}
          className="animate-float hover:scale-110 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default AboutUs;
