export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100dvh] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#0A0A0A]">
      {/* Grainy background overlay */}
      <div className="grainy-background absolute inset-0 pointer-events-none"></div>

      <main className="relative flex flex-col gap-[32px] row-start-2 items-center justify-center w-full max-w-full px-4">
        <div className="relative flex flex-col items-center">
          <h1
            className="text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl font-bold tracking-wider break-words leading-tight silver-shimmer select-none shimmer-fade-in"
            style={{
              textShadow: `
                  -2px 0px 0 rgba(0,0,0,0.2),
                  -1px 0px 0 rgba(0,0,0,0.3),
                  2px 2px 0 rgba(0,0,0,0.35),
                  3px 3px 0 rgba(0,0,0,0.25),
                  4px 4px 0 rgba(0,0,0,0.15),
                  5px 5px 0 rgba(0,0,0,0.05)
                `,
            }}
          >
            BROOKES
          </h1>

          <p className="absolute -bottom-8 -right-4 opacity-20 text-xl font-bold sm:text-xl md:text-xl select-none fade-in-delayed text-white/25">
            [ identity ]
          </p>
        </div>
      </main>
      <footer className="relative row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
