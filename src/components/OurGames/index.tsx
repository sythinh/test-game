import Image from "next/image";

// constants
import { GAMES } from "@/constants";
import { useTranslations } from "next-intl";

const OurGames = () => {
  const t = useTranslations("OurGames");

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="text-center mb-10 ">
        <h2 className="text-[40px] md:text-6xl font-bold">{t("title")}</h2>
        <p className="text-gray-600 mt-2 md:w-2/4 mx-auto">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {GAMES.map((game, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden group transition ${
              index % 2 === 1 ? "mt-10 md:mt-20" : ""
            }`}
          >
            <Image
              src={game.image}
              alt={game.title}
              width={400}
              height={300}
              className="object-cover group-hover:scale-105 transition-transform"
            />
            <div
              className={`p-0 md:p-4 absolute z-0 ${
                index % 2 === 1 ? "bottom-5" : "bottom-16 md:bottom-24"
              } left-2 text-white group`}
            >
              <h3 className="text-md leading-7 md:text-5xl font-bold">
                {game.title}
              </h3>
              <p className="text-xs md:text-sm mt-2">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGames;
