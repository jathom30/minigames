export const SimonButton = ({
  keyCode,
  onClick,
  isActive = false,
}: {
  keyCode: "q" | "w" | "a" | "s";
  onClick: () => void;
  isActive?: boolean;
}) => {
  const color = {
    q: isActive ? "bg-red-300" : "bg-red-500",
    w: isActive ? "bg-blue-300" : "bg-blue-500",
    a: isActive ? "bg-green-300" : "bg-green-500",
    s: isActive ? "bg-yellow-300" : "bg-yellow-500",
  }[keyCode];

  const handleClick = () => {
    onClick();
  };

  const roundedCorner = {
    q: "rounded-tl-full",
    w: "rounded-tr-full",
    a: "rounded-bl-full",
    s: "rounded-br-full",
  }[keyCode];

  const alignment = {
    q: "justify-end items-end",
    w: "justify-start items-end",
    a: "justify-end items-start",
    s: "justify-start items-start",
  }[keyCode];

  return (
    <button
      onClick={handleClick}
      className={`text-white flex ${alignment} h-[25vh] min-h-28 border rounded-md ${roundedCorner} p-1 ${color} hover:shadow-lg`}
    >
      {keyCode}
    </button>
  );
};
