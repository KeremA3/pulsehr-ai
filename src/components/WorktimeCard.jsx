export default function WorktimeCard() {

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-green-500/10 rounded-full blur-[70px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-8">

        <p className="text-green-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
          Workforce Analytics
        </p>

        <h2 className="text-3xl font-black text-white">
          Çalışma Süresi
        </h2>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* TODAY */}

        <div className="bg-black/20 border border-white/10 rounded-[24px] p-5">

          <p className="text-gray-400 uppercase tracking-[3px] text-xs">
            Bugünkü Süre
          </p>

          <h3 className="text-5xl font-black text-green-400 mt-4">
            8.4s
          </h3>

        </div>

        {/* WEEK */}

        <div className="bg-black/20 border border-white/10 rounded-[24px] p-5">

          <p className="text-gray-400 uppercase tracking-[3px] text-xs">
            Haftalık Süre
          </p>

          <h3 className="text-5xl font-black text-cyan-400 mt-4">
            41s
          </h3>

        </div>

        {/* STATUS */}

        <div className="bg-black/20 border border-white/10 rounded-[24px] p-5">

          <p className="text-gray-400 uppercase tracking-[3px] text-xs">
            Çalışma Durumu
          </p>

          <h3 className="text-3xl font-black text-yellow-400 mt-4">
            Aktif
          </h3>

        </div>

        {/* OVERTIME */}

        <div className="bg-black/20 border border-white/10 rounded-[24px] p-5">

          <p className="text-gray-400 uppercase tracking-[3px] text-xs">
            Fazla Mesai
          </p>

          <h3 className="text-3xl font-black text-purple-400 mt-4">
            +3.2s
          </h3>

        </div>

      </div>

    </div>
  );
}