export default function SidebarNavigation({

  activeSection,
  setActiveSection

}) {

  const menus = [

    "Genel Bakış",
    "Çalışanlar",
    "Analitik",
    "Bildirimler",
    "İzin Yönetimi",
    "Ayarlar"

  ];

  return (

    <div className="space-y-4 mt-10">

      {menus.map(
        (menu) => (

          <button
            key={menu}
            onClick={() =>
              setActiveSection(menu)
            }
            className={`w-full text-left px-6 py-5 rounded-[24px] transition-all duration-300 font-bold text-lg

            ${
              activeSection === menu

                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_40px_rgba(34,211,238,0.35)]"

                : "bg-white/[0.04] border border-white/10 text-gray-300 hover:bg-white/[0.08]"
            }
            `}
          >

            {menu}

          </button>
        )
      )}

    </div>
  );
}