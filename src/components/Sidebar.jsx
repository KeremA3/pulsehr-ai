import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  ShieldCheck,
  Bell,
  Settings,
  BarChart3
} from "lucide-react";

export default function Sidebar() {

  return (

    <div className="w-[320px] min-h-screen bg-white/5 border-r border-white/10 backdrop-blur-2xl p-8 flex flex-col justify-between">

      {/* TOP */}

      <div>

        {/* LOGO */}

        <div className="mb-14">

          <p className="text-blue-400 tracking-[5px] uppercase font-semibold mb-3">
            PulseHR AI
          </p>

          <h1 className="text-4xl font-black text-white leading-tight">
            Enterprise
            <br />
            HR Suite
          </h1>

        </div>

        {/* MENU */}

        <div className="space-y-4">

          {/* ITEM */}

          <button className="w-full flex items-center gap-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-5 py-5 text-white font-semibold shadow-2xl">

            <LayoutDashboard size={26} />

            Dashboard

          </button>

          {/* ITEM */}

          <button className="w-full flex items-center gap-5 bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 rounded-2xl px-5 py-5 text-gray-300">

            <Users size={26} />

            Çalışan Yönetimi

          </button>

          {/* ITEM */}

          <button className="w-full flex items-center gap-5 bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 rounded-2xl px-5 py-5 text-gray-300">

            <BrainCircuit size={26} />

            AI Analizleri

          </button>

          {/* ITEM */}

          <button className="w-full flex items-center gap-5 bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 rounded-2xl px-5 py-5 text-gray-300">

            <BarChart3 size={26} />

            Raporlar

          </button>

          {/* ITEM */}

          <button className="w-full flex items-center gap-5 bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 rounded-2xl px-5 py-5 text-gray-300">

            <Bell size={26} />

            Bildirimler

          </button>

          {/* ITEM */}

          <button className="w-full flex items-center gap-5 bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 rounded-2xl px-5 py-5 text-gray-300">

            <ShieldCheck size={26} />

            Güvenlik

          </button>

          {/* ITEM */}

          <button className="w-full flex items-center gap-5 bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 rounded-2xl px-5 py-5 text-gray-300">

            <Settings size={26} />

            Sistem Ayarları

          </button>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

        <p className="text-blue-400 font-semibold mb-3">
          AI Enterprise Status
        </p>

        <h3 className="text-2xl font-black text-white leading-tight">
          Sistem Stabil
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          Tüm servisler aktif çalışıyor.
          Gerçek zamanlı analiz sistemi online.
        </p>

      </div>

    </div>
  );
}