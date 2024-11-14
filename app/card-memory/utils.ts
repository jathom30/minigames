export type TIcon = { icon: string; id: string };

export const icons: TIcon[] = [
  {
    icon: "🐶",
    id: "dog",
  },
  {
    icon: "🐱",
    id: "cat",
  },
  {
    icon: "🐭",
    id: "mouse",
  },
  {
    icon: "🐹",
    id: "hamster",
  },
  {
    icon: "🐰",
    id: "rabbit",
  },
  {
    icon: "🦊",
    id: "fox",
  },
];

export const createRandomSequence = (icons: TIcon[]) => {
  const sequence = icons.concat(
    icons.map((icon) => ({ ...icon, id: icon.id + "-2" }))
  );
  return sequence.sort(() => Math.random() - 0.5);
};
