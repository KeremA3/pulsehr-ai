export default function SystemPerformance() {

  const stats = [

    {
      id: 1,
      label: "AI Accuracy",
      value: "98%"
    },

    {
      id: 2,
      label: "Realtime Sync",
      value: "12ms"
    },

    {
      id: 3,
      label: "System Stability",
      value: "99.9%"
    },

    {
      id: 4,
      label: "Security Level",
      value: "MAX"
    }

  ];

  return (

    <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl">

      {/* HEADER */}

      <div className="mb-10">

        <p className="text-blue-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
          Enterprise Infrastructure
        </p>

        <h2 className="text-5xl font-black text-white">
          System Performance
        </h2>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {stats.map(
          (stat) => (

            <div
              key={stat.id}
              className="bg-black/20 border border-white/10 rounded-[30px] p-8"
            >

              <p className="text-gray-400 text-lg">
                {stat.label}
              </p>

              <h3 className="text-5xl font-black text-white mt-5">
                {stat.value}
              </h3>

            </div>
          )
        )}

      </div>

    </div>
  );
}