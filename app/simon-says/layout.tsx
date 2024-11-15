export default function SimonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 p-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Simon Says
      </h1>
      {children}
    </div>
  );
}
