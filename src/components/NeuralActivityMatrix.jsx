export default function NeuralActivityMatrix() {

  const nodes = [

    "AI Core",
    "Realtime Sync",
    "Security Grid",
    "Prediction Engine",
    "Analytics",
    "Workforce AI"

  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 opacity-20">

        <div className="w-full h-full bg-[radial-gradient(circle,#3b82f622_1px,transparent_1px)] bg-[size:35px_35px]" />

      </div>

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-cyan-500/20 rounded-full blur-[90px]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-10">

          <p className="text-cyan-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
            Neural Intelligence
          </p>

          <h2 className="text-6xl font-black text-white leading-tight">
            Neural Activity
            <br />
            Matrix
          </h2>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-2 gap-5">

          {nodes.map(
            (node, index) => (

              <div
                key={index}
                className="bg-black/20 border border-white/10 rounded-[30px] p-6 hover:scale-[1.02] transition-all duration-300"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-black text-white">
                      {node}
                    </h3>

                    <p className="text-gray-400 mt-3">
                      AI neural network active
                    </p>

                  </div>

                  <div className="w-5 h-5 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}