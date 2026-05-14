export default function OrbitalCommandCenter() {

  const systems = [

    {
      id: 1,
      title: "Neural AI",
      status: "ONLINE",
      color: "from-cyan-400 to-blue-500"
    },

    {
      id: 2,
      title: "Quantum Sync",
      status: "ACTIVE",
      color: "from-purple-400 to-pink-500"
    },

    {
      id: 3,
      title: "Security Core",
      status: "SECURED",
      color: "from-green-400 to-emerald-500"
    }

  ];

  return (

    <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.04] backdrop-blur-[40px] p-10 shadow-[0_0_120px_rgba(59,130,246,0.12)]">

      {/* GLOWS */}

      <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[140px]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-12">

          <div>

            <p className="text-cyan-400 tracking-[6px] uppercase text-sm font-semibold mb-5">
              Orbital Intelligence
            </p>

            <h2 className="text-7xl leading-[0.95] tracking-[-5px] font-black text-white">

              Orbital
              <br />
              Command Center

            </h2>

          </div>

          {/* CORE */}

          <div className="relative w-[220px] h-[220px] flex items-center justify-center">

            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin" />

            <div className="absolute inset-[25px] rounded-full border border-purple-400/20 animate-spin [animation-direction:reverse] [animation-duration:12s]" />

            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_60px_rgba(34,211,238,0.6)]" />

          </div>

        </div>

        {/* SYSTEMS */}

        <div className="grid grid-cols-3 gap-6">

          {systems.map(
            (system) => (

              <div
                key={system.id}
                className="bg-black/20 border border-white/10 rounded-[35px] p-8"
              >

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${system.color} shadow-[0_0_40px_rgba(59,130,246,0.35)]`} />

                <h3 className="text-3xl font-black text-white mt-8">
                  {system.title}
                </h3>

                <div className="mt-5 inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-2xl text-green-400 font-bold">

                  ● {system.status}

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}