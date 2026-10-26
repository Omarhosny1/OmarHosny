export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg" />

      <div className="grid-lines mask-fade-b absolute inset-0 opacity-60" />

      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-soft-light" />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-bg to-transparent" />
    </div>
  );
}
