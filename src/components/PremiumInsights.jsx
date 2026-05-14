export default function PremiumInsights() {

  const insights = [

    {
      id: 1,
      title: "AI detected high productivity",
      description:
        "Yazılım departmanı performansı bu hafta %18 arttı."
    },

    {
      id: 2,
      title: "Burnout risk minimized",
      description:
        "AI sistemi çalışan stres seviyelerini stabil görüyor."
    },

    {
      id: 3,
      title: "Realtime sync optimized",
      description:
        "Tüm workforce verileri senkron durumda."
    }

  ];

  return (

    <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl">

      {/* HEADER */}

      <div className="mb-10">

        <p className="text-purple-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
          Premium AI Insights
        </p>

        <h2 className="text-5xl font-black text-white">
          Executive Insights
        </h2>

      </div>

      {/* LIST */}

      <div className="space-y-5">

        {insights.map(
          (insight) => (

            <div
              key={insight.id}
              className="bg-black/20 border border-white/10 rounded-[30px] p-6"
            >

              <h3 className="text-2xl font-black text-white">
                {insight.title}
              </h3>

              <p className="text-gray-400 mt-4 text-lg leading-8">
                {insight.description}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}