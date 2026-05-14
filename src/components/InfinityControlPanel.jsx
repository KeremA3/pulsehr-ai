export default function InfinityControlPanel() {

  const controls = [

    "Realtime AI",
    "Neural Sync",
    "Cloud Shield",
    "Quantum Engine"

  ];

  return (

    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 rounded-[45px] p-10 backdrop-blur-[35px] shadow-[0_0_100px_rgba(168,85,247,0.12)]">

      {/* BACKGROUND */}

      <div className="absolute inset-0 opacity-[0.05]">

        <div className="w-full h-full bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:35px_35px]" />

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-10">

          <p className="text-purple-400 tracking-[6px] uppercase text-sm font-semibold mb-5">
            Infinity Systems
          </p>

          <h2 className="text-6xl font-black text-white leading-tight">

            Infinity
            <br />
            Control Panel

          </h2>

        </div>

        {/* CONTROLS */}

        <div className="grid grid-cols-2 gap-5">

          {controls.map(
            (control, index) => (

              <button
                key={index}
                className="bg-black/20 border border-white/10 rounded-[30px] p-8 hover:scale-[1.03] transition-all duration-300 text-left"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-3xl font-black text-white">
                      {control}
                    </h3>

                    <p className="text-gray-400 mt-4">
                      Enterprise AI control active
                    </p>

                  </div>

                  <div className="w-5 h-5 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

                </div>

              </button>
            )
          )}

        </div>

      </div>

    </div>
  );
}