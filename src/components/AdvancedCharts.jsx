export default function AdvancedCharts() {

  const chartData = [

    {
      month: "Ocak",
      value: 82
    },

    {
      month: "Şubat",
      value: 91
    },

    {
      month: "Mart",
      value: 77
    },

    {
      month: "Nisan",
      value: 96
    },

    {
      month: "Mayıs",
      value: 88
    }

  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

      {/* HEADER */}

      <div className="mb-10">

        <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
          AI Analytics
        </p>

        <h2 className="text-5xl font-black text-white">
          Productivity Overview
        </h2>

      </div>

      {/* CHART */}

      <div className="flex items-end justify-between gap-5 h-[320px]">

        {chartData.map(
          (item, index) => (

            <div
              key={index}
              className="flex flex-col items-center flex-1"
            >

              {/* BAR */}

              <div className="relative w-full flex items-end h-[260px]">

                <div
                  style={{
                    height: `${item.value}%`
                  }}
                  className="w-full rounded-t-[25px] bg-gradient-to-t from-blue-600 via-cyan-500 to-purple-500 shadow-2xl hover:scale-[1.03] transition-all duration-300"
                />

                {/* GLOW */}

                <div
                  style={{
                    height: `${item.value}%`
                  }}
                  className="absolute inset-x-0 bottom-0 rounded-t-[25px] bg-blue-500/30 blur-[30px]"
                />

              </div>

              {/* LABEL */}

              <p className="text-gray-400 mt-5 text-lg">
                {item.month}
              </p>

            </div>
          )
        )}

      </div>

      {/* FOOTER */}

      <div className="mt-10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-[30px] p-6">

        <h3 className="text-2xl font-black text-white">
          AI Productivity Tracking
        </h3>

        <p className="text-gray-400 mt-3 text-lg leading-8">
          Yapay zeka sistemi tüm çalışan performanslarını analiz ediyor.
        </p>

      </div>

    </div>
  );
}