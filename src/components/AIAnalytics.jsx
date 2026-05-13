import {
  BrainCircuit,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  Activity
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function AIAnalytics({

  riskScore,
  riskColor,
  aiMessage,
  chartData

}) {

  const COLORS = [
    "#22c55e",
    "#ef4444"
  ];

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            AI Intelligence
          </p>

          <h2 className="text-5xl font-black text-white leading-tight">
            Yapay Zekâ
            <br />
            Analiz Merkezi
          </h2>

        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          Real-Time AI Engine Active
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-3 gap-8">

        {/* LEFT */}

        <div className="col-span-2 space-y-6">

          {/* MAIN AI */}

          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

            <div className="flex items-start justify-between">

              <div>

                <div className="flex items-center gap-4 mb-6">

                  <div className="bg-blue-500/20 p-4 rounded-2xl">
                    <BrainCircuit
                      className="text-blue-400"
                      size={40}
                    />
                  </div>

                  <div>

                    <p className="text-blue-400 font-semibold">
                      AI CORE ANALYSIS
                    </p>

                    <h3 className="text-3xl font-black text-white">
                      Enterprise Risk Engine
                    </h3>

                  </div>

                </div>

                <p className="text-gray-300 text-lg leading-9 max-w-3xl">

                  Sistem tüm çalışan verilerini gerçek zamanlı analiz ediyor.
                  Attendance davranışları, giriş performansı ve departman risk skorları AI motoru tarafından sürekli değerlendiriliyor.

                </p>

              </div>

              <div className={`text-6xl font-black ${riskColor}`}>

                %{riskScore}

              </div>

            </div>

          </div>

          {/* INSIGHTS */}

          <div className="grid grid-cols-2 gap-6">

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

              <div className="flex items-center gap-4 mb-5">

                <div className="bg-red-500/20 p-4 rounded-2xl">

                  <AlertTriangle
                    className="text-red-400"
                    size={32}
                  />

                </div>

                <div>

                  <p className="text-gray-400">
                    Risk Durumu
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    AI Alert
                  </h3>

                </div>

              </div>

              <p className={`text-lg leading-8 ${riskColor}`}>

                {aiMessage}

              </p>

            </div>

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

              <div className="flex items-center gap-4 mb-5">

                <div className="bg-green-500/20 p-4 rounded-2xl">

                  <ShieldCheck
                    className="text-green-400"
                    size={32}
                  />

                </div>

                <div>

                  <p className="text-gray-400">
                    Sistem Güveni
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    Stable
                  </h3>

                </div>

              </div>

              <p className="text-green-400 text-lg leading-8">

                AI sistemi tüm servislerin stabil çalıştığını doğruladı.

              </p>

            </div>

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

              <div className="flex items-center gap-4 mb-5">

                <div className="bg-blue-500/20 p-4 rounded-2xl">

                  <TrendingUp
                    className="text-blue-400"
                    size={32}
                  />

                </div>

                <div>

                  <p className="text-gray-400">
                    Verimlilik
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    +18%
                  </h3>

                </div>

              </div>

              <p className="text-blue-400 text-lg leading-8">

                Son 30 günde çalışan verimliliği artış gösterdi.

              </p>

            </div>

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

              <div className="flex items-center gap-4 mb-5">

                <div className="bg-purple-500/20 p-4 rounded-2xl">

                  <Activity
                    className="text-purple-400"
                    size={32}
                  />

                </div>

                <div>

                  <p className="text-gray-400">
                    AI Monitoring
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    Active
                  </h3>

                </div>

              </div>

              <p className="text-purple-400 text-lg leading-8">

                Gerçek zamanlı takip sistemi aktif çalışıyor.

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

          <div className="mb-8">

            <p className="text-pink-400 tracking-[4px] uppercase font-semibold mb-3">
              Live Analytics
            </p>

            <h3 className="text-3xl font-black text-white">
              Attendance AI
            </h3>

          </div>

          {/* CHART */}

          <div className="h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                >

                  {chartData.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell
                        key={index}
                        fill={
                          COLORS[index % COLORS.length]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* LEGEND */}

          <div className="space-y-4 mt-8">

            <div className="flex items-center justify-between bg-black/20 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 rounded-full bg-green-500" />

                <span className="text-gray-300">
                  Normal
                </span>

              </div>

              <span className="text-white font-bold">
                {chartData[0]?.value}
              </span>

            </div>

            <div className="flex items-center justify-between bg-black/20 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 rounded-full bg-red-500" />

                <span className="text-gray-300">
                  Geç Kalan
                </span>

              </div>

              <span className="text-white font-bold">
                {chartData[1]?.value}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}