export default function MobileBottomBar({

  activeSection,
  setActiveSection

}) {

  const items = [

    "Genel Bakış",
    "Çalışanlar",
    "Analitik",
    "Ayarlar"

  ];

  return (

    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-[#081120]/90 border-t border-white/10 backdrop-blur-[30px] px-4 py-4">

      <div className="grid grid-cols-4 gap-3">

        {items.map(
          (item) => (

            <button
              key={item}
              onClick={() =>
                setActiveSection(item)
              }
              className={`py-4 rounded-2xl text-sm font-black transition-all duration-300

              ${
                activeSection === item

                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"

                  : "bg-white/[0.04] text-gray-400"
              }
              `}
            >

              {item}

            </button>
          )
        )}

      </div>

    </div>
  );
}