export default function SimonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Card Memory
      </h1>
      {children}
    </div>
  );
}
