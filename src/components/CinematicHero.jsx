export default function CinematicHero() {

  return (

    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-[40px] p-9 shadow-[0_0_100px_rgba(59,130,246,0.10)]">

      {/* BACKGROUND */}

      <div className="absolute top-[-100px] left-[-100px] w-[240px] h-[240px] bg-cyan-400/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-purple-500/20 rounded-full blur-[120px]" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.04]">

        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10">

        {/* LEFT */}

        <div className="max-w-[720px]">

          <p className="text-cyan-400 tracking-[6px] uppercase text-xs font-semibold mb-5">
            Kurumsal Yapay Zeka Platformu
          </p>

          <h1 className="text-[72px] leading-[0.92] tracking-[-5px] font-black text-white">

            Workforce
            <br />
            Intelligence

          </h1>

          <p className="text-gray-400 text-xl leading-[40px] mt-8 max-w-[620px]">

            Yeni nesil premium insan kaynakları yönetim platformu.

          </p>

          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap items-center gap-4">

            <button className="px-7 py-4 rounded-[22px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-lg shadow-[0_0_40px_rgba(34,211,238,0.30)] hover:scale-105 transition-all duration-300">

              AI Paneli

            </button>

            <button className="px-7 py-4 rounded-[22px] bg-white/5 border border-white/10 text-white font-black text-lg backdrop-blur-xl hover:bg-white/10 transition-all duration-300">

              Sistem Durumu

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4 w-full xl:w-[280px]">

          <div className="bg-black/20 border border-white/10 rounded-[28px] p-5">

            <p className="text-gray-400 uppercase tracking-[3px] text-xs">
              AI RESPONSE
            </p>

            <h3 className="text-4xl font-black text-cyan-400 mt-4">
              12ms
            </h3>

          </div>

          <div className="bg-black/20 border border-white/10 rounded-[28px] p-5">

            <p className="text-gray-400 uppercase tracking-[3px] text-xs">
              CLOUD
            </p>

            <h3 className="text-4xl font-black text-green-400 mt-4">
              MAX
            </h3>

          </div>

          <div className="bg-black/20 border border-white/10 rounded-[28px] p-5">

            <p className="text-gray-400 uppercase tracking-[3px] text-xs">
              STABILITY
            </p>

            <h3 className="text-4xl font-black text-purple-400 mt-4">
              99%
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}