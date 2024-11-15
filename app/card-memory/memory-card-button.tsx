import { IconType } from "react-icons";
import { GrStatusUnknown } from "react-icons/gr";

export const MemoryCardButton = ({
  CardIcon,
  onClick,
  isFlipped,
}: {
  CardIcon: IconType;
  onClick: () => void;
  isFlipped: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center border p-4 rounded text-4xl"
    >
      {isFlipped ? <CardIcon /> : <GrStatusUnknown />}
    </button>
  );
};
