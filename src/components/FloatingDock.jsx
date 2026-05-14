export default function FloatingDock() {

  const items = [

    "AI",
    "HR",
    "SYS",
    "DATA",
    "LIVE"

  ];

  return (

    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999]">

      <div className="bg-white/5 border border-white/10 backdrop-blur-[30px] rounded-[30px] px-6 py-5 flex items-center gap-5 shadow-[0_0_60px_rgba(59,130,246,0.15)]">

        {items.map(
          (item, index) => (

            <button
              key={index}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/80 to-purple-600/80 hover:scale-110 hover:rotate-3 transition-all duration-300 text-white font-black shadow-2xl"
            >

              {item}

            </button>
          )
        )}

      </div>

    </div>
  );
}