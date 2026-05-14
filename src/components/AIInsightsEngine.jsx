import {
  BrainCircuit,
  TrendingUp,
  AlertTriangle,
  ShieldAlert,
  Sparkles,
  Activity
} from "lucide-react";

export default function AIInsightsEngine() {

  const insights = [

    {
      id: 1,
      title: "Departman Risk Analizi",
      description:
        "Muhasebe departmanında geç kalma oranı son 14 günde %28 arttı.",
      type: "risk",
      score: 82
    },

    {
      id: 2,
      title: "Performans Yükselişi",
      description:
        "Yazılım ekibinin verimliliği geçen aya göre %18 yükseldi.",
      type: "success",
      score: 94
    },

    {
      id: 3,
      title: "AI Attendance Alert",
      description:
        "3 çalışan düzenli olarak geç giriş yapıyor.",
      type: "warning",
      score: 76
    },

    {
      id: 4,
      title: "Sistem Stabilitesi",
      description:
        "Tüm enterprise servisleri stabil çalışıyor.",
      type: "stable",
      score: 99
    }

  ];

  const getIcon = (type) => {

    switch (type) {

      case "risk":
        return (
          <AlertTriangle
            className="text-red-400"
            size={34}
          />
        );

      case "success":
        return (
          <TrendingUp
            className="text-green-400"
            size={34}
          />
        );

      case "warning":
        return (
          <ShieldAlert
            className="text-yellow-400"
            size={34}
          />
        );

      case "stable":
        return (
          <Sparkles
            className="text-blue-400"
            size={34}
          />
        );

      default:
        return (
          <BrainCircuit
            className="text-purple-400"
            size={34}
          />
        );
    }
  };

  const getColor = (type) => {

    switch (type) {

      case "risk":
        return "text-red-400";

      case "success":
        return "text-green-400";

      case "warning":
        return "text-yellow-400";

      case "stable":
        return "text-blue-400";

      default:
        return "text-purple-400";
    }
  };

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            AI Intelligence Core
          </p>

          <h2 className="text-5xl font-black text-white">
            AI Insights Engine
          </h2>

        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          Enterprise AI Active
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {insights.map(
          (insight) => (

            <div
              key={insight.id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* TOP */}

              <div className="flex items-start justify-between mb-8">

                <div className="bg-black/20 p-5 rounded-3xl">

                  {getIcon(insight.type)}

                </div>

                <div className={`text-4xl font-black ${getColor(insight.type)}`}>

                  {insight.score}

                </div>

              </div>

              {/* CONTENT */}

              <h3 className="text-3xl font-black text-white leading-tight">
                {insight.title}
              </h3>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                {insight.description}
              </p>

              {/* FOOTER */}

              <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-5">

                <div className="flex items-center gap-4">

                  <Activity
                    className="text-blue-400"
                    size={28}
                  />

                  <div>

                    <p className="text-white font-semibold">
                      Real-Time AI Monitoring
                    </p>

                    <p className="text-gray-400 mt-1">
                      Yapay zekâ sistemi canlı analiz yapıyor.
                    </p>

                  </div>

                </div>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}