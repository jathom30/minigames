export const tiles = ["q", "w", "a", "s"] as const;

export type Tile = (typeof tiles)[number];

export const getRandomTile = () => {
  return tiles[Math.floor(Math.random() * tiles.length)];
};
