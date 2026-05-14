import SidebarNavigation from "./SidebarNavigation";

export default function ModernSidebar({

  activeSection,
  setActiveSection

}) {

  return (

    <div className="hidden lg:block w-[320px] min-h-screen bg-white/[0.03] border-r border-white/10 backdrop-blur-[30px] p-8 overflow-y-auto relative z-10">

      {/* LOGO */}

      <div>

        <div className="w-24 h-24 rounded-[32px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-black shadow-[0_0_50px_rgba(34,211,238,0.35)]">

          HR

        </div>

        <h1 className="text-5xl font-black text-white mt-8 tracking-[-2px]">
          PulseHR
        </h1>

        <p className="text-gray-400 mt-4 text-lg leading-8">
          Premium Kurumsal
          <br />
          İnsan Kaynakları Platformu
        </p>

      </div>

      {/* NAVIGATION */}

      <SidebarNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* STATUS CARD */}

      <div className="mt-12 relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-white/10 rounded-[35px] p-7">

        {/* GLOW */}

        <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-400/20 rounded-full blur-[60px]" />

        {/* CONTENT */}

        <div className="relative z-10">

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Sistem Durumu
          </p>

          <h3 className="text-4xl font-black text-white mt-5 leading-tight">

            Tüm Sistemler
            <br />
            Aktif

          </h3>

          <div className="mt-6 inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-2xl text-green-400 font-bold">

            ● Stabil Çalışıyor

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="mt-12 text-gray-500 text-sm leading-7">

        PulseHR AI Enterprise Suite
        <br />
        v1.0 Premium Edition

      </div>

    </div>
  );
}