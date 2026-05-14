export default function LuxuryCommandBar() {

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 backdrop-blur-[30px] rounded-[40px] p-8 shadow-[0_0_80px_rgba(59,130,246,0.12)]">

      {/* GLOW */}

      <div className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] bg-cyan-400/20 rounded-full blur-[100px]" />

      {/* CONTENT */}

      <div className="relative z-10 flex items-center justify-between gap-6">

        {/* LEFT */}

        <div>

          <p className="text-cyan-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
            Executive AI Control
          </p>

          <h2 className="text-5xl font-black text-white leading-tight">

            Luxury
            <br />
            Command Bar

          </h2>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          <button className="px-7 py-5 rounded-[24px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300">

            AI Scan

          </button>

          <button className="px-7 py-5 rounded-[24px] bg-gradient-to-r from-purple-500 to-pink-600 text-white font-black shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:scale-105 transition-all duration-300">

            Neural Sync

          </button>

          <button className="px-7 py-5 rounded-[24px] bg-gradient-to-r from-orange-500 to-red-600 text-white font-black shadow-[0_0_35px_rgba(249,115,22,0.35)] hover:scale-105 transition-all duration-300">

            Security Lock

          </button>

        </div>

      </div>

    </div>
  );
}