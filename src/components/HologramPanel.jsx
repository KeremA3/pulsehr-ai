export default function HologramPanel() {

  return (

    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-[45px] p-10 backdrop-blur-[30px] shadow-[0_0_80px_rgba(34,211,238,0.15)]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-cyan-400/20 rounded-full blur-[100px]" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.08]">

        <div className="w-full h-full bg-[linear-gradient(to_right,#22d3ee22_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee22_1px,transparent_1px)] bg-[size:45px_45px]" />

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        <p className="text-cyan-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
          Neural Visualization
        </p>

        <h2 className="text-6xl font-black text-white leading-tight">

          Hologram
          <br />
          Intelligence

        </h2>

        <p className="text-gray-300 text-xl mt-8 leading-[42px]">

          Enterprise AI hologram systems aktif durumda.
          Neural workforce intelligence gerçek zamanlı analiz ediliyor.

        </p>

        {/* BARS */}

        <div className="mt-10 space-y-5">

          <div>

            <div className="flex justify-between mb-3">

              <span className="text-white font-semibold">
                AI Stability
              </span>

              <span className="text-cyan-400 font-bold">
                98%
              </span>

            </div>

            <div className="h-4 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[98%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.7)]" />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-3">

              <span className="text-white font-semibold">
                Realtime Sync
              </span>

              <span className="text-purple-400 font-bold">
                95%
              </span>

            </div>

            <div className="h-4 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[95%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.7)]" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}