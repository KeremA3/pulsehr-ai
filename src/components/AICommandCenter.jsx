export default function AICommandCenter() {

  const systems = [

    {
      id: 1,
      title: "Realtime Monitoring",
      description:
        "Çalışan aktiviteleri canlı analiz ediliyor.",
      status: "ACTIVE",
      color: "from-green-500 to-emerald-500"
    },

    {
      id: 2,
      title: "AI Risk Engine",
      description:
        "Departman risk skorları hesaplanıyor.",
      status: "STABLE",
      color: "from-pink-500 to-purple-500"
    },

    {
      id: 3,
      title: "Security Shield",
      description:
        "Enterprise güvenlik protokolleri aktif.",
      status: "SECURED",
      color: "from-blue-500 to-cyan-500"
    },

    {
      id: 4,
      title: "Prediction System",
      description:
        "AI workforce tahmin sistemi çalışıyor.",
      status: "ONLINE",
      color: "from-orange-500 to-red-500"
    }

  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl overflow-hidden relative">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-10">

          <p className="text-cyan-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
            Artificial Intelligence Core
          </p>

          <h2 className="text-6xl font-black text-white leading-tight">
            AI Command
            <br />
            Center
          </h2>

        </div>

        {/* SYSTEMS */}

        <div className="space-y-5">

          {systems.map(
            (system) => (

              <div
                key={system.id}
                className="bg-black/20 border border-white/10 rounded-[30px] p-6 hover:bg-black/30 transition-all duration-300"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <h3 className="text-3xl font-black text-white">
                      {system.title}
                    </h3>

                    <p className="text-gray-400 mt-3 text-lg leading-8">
                      {system.description}
                    </p>

                  </div>

                  <div className={`bg-gradient-to-r ${system.color} px-5 py-3 rounded-2xl text-white font-black shadow-2xl`}>

                    {system.status}

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}