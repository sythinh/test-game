import Image from "next/image";

export const LANGUAGES = [
  {
    key: "vi",
    label: "Vietnamese",
    flag: (
      <Image
        alt="flag"
        width={40}
        height={40}
        src="/icons/vietnam.svg"
        objectFit="contain"
      />
    ),
  },
  {
    key: "en",
    label: "English",
    flag: (
      <Image
        alt="flag"
        width={40}
        height={40}
        src="/icons/united-states.svg"
        objectFit="contain"
      />
    ),
  },
];
