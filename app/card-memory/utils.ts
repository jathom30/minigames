import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiRemix,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type TIcon = { Icon: IconType; id: string };

export const icons: TIcon[] = [
  { id: "https://react.dev/", Icon: FaReact },
  { id: "https://nextjs.org", Icon: SiNextdotjs },
  { id: "https://remix.run", Icon: SiRemix },
  { id: "https://tailwindcss.com", Icon: SiTailwindcss },
  {
    id: "https://www.typescriptlang.org",
    Icon: SiTypescript,
  },
  {
    id: "https://www.javascript.com",
    Icon: SiJavascript,
  },
];

export const createRandomSequence = (icons: TIcon[]) => {
  const sequence = icons.concat(
    icons.map((icon) => ({ ...icon, id: icon.id + "-2" }))
  );
  return sequence.sort(() => Math.random() - 0.5);
};
