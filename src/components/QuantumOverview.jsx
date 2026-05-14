export default function QuantumOverview() {

  const sectors = [

    {
      id: 1,
      title: "Quantum AI",
      value: "98.2%",
      glow: "bg-cyan-400"
    },

    {
      id: 2,
      title: "Realtime Cloud",
      value: "12ms",
      glow: "bg-purple-400"
    },

    {
      id: 3,
      title: "Security Matrix",
      value: "MAX",
      glow: "bg-green-400"
    }

  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[45px] p-10 backdrop-blur-[35px] shadow-[0_0_100px_rgba(59,130,246,0.12)]">

      {/* GLOW */}

      <div className="absolute top-[-80px] right-[-80px] w-[260px] h-[260px] bg-cyan-400/20 rounded-full blur-[120px]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-12">

          <p className="text-cyan-400 tracking-[6px] uppercase text-sm font-semibold mb-5">
            Quantum Infrastructure
          </p>

          <h2 className="text-7xl font-black text-white leading-[0.95] tracking-[-4px]">

            Quantum
            <br />
            Overview

          </h2>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-3 gap-6">

          {sectors.map(
            (sector) => (

              <div
                key={sector.id}
                className="relative overflow-hidden bg-black/20 border border-white/10 rounded-[35px] p-8"
              >

                {/* SMALL GLOW */}

                <div className={`absolute top-0 right-0 w-[120px] h-[120px] ${sector.glow} opacity-20 rounded-full blur-[50px]`} />

                <div className="relative z-10">

                  <p className="text-gray-400 uppercase tracking-[3px] text-sm">
                    {sector.title}
                  </p>

                  <h3 className="text-6xl font-black text-white mt-6">
                    {sector.value}
                  </h3>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}