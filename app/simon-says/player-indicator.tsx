export const PlayerIndicator = ({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) => {
  return (
    <div className="flex items-center gap-1">
      <div
        className={`w-4 h-4 rounded-full ${
          isActive ? "bg-orange-500" : "bg-orange-50"
        }`}
      />
      {name}&apos;s turn
    </div>
  );
};
