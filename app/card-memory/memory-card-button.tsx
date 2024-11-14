import { useState } from "react";

export const MemoryCardButton = ({
  cardIcon,
  onClick,
  isFlipped,
}: {
  cardIcon: string;
  onClick: () => void;
  isFlipped: boolean;
}) => {
  return (
    <button onClick={onClick} className="border p-4 rounded text-4xl">
      {isFlipped ? cardIcon : "❓"}
    </button>
  );
};
