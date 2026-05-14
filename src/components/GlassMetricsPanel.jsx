export default function GlassMetricsPanel() {

  const metrics = [

    {
      id: 1,
      label: "Realtime AI",
      value: "ONLINE"
    },

    {
      id: 2,
      label: "Cloud Sync",
      value: "99.9%"
    },

    {
      id: 3,
      label: "Prediction Rate",
      value: "94%"
    },

    {
      id: 4,
      label: "Data Shield",
      value: "MAX"
    }

  ];

  return (

    <div className="grid grid-cols-4 gap-6">

      {metrics.map(
        (metric) => (

          <div
            key={metric.id}
            className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[35px] p-8 backdrop-blur-[30px] shadow-[0_0_60px_rgba(59,130,246,0.08)]"
          >

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-400/10 rounded-full blur-[50px]" />

            {/* CONTENT */}

            <div className="relative z-10">

              <p className="text-gray-400 uppercase tracking-[3px] text-sm">
                {metric.label}
              </p>

              <h3 className="text-5xl font-black text-white mt-6">
                {metric.value}
              </h3>

            </div>

          </div>
        )
      )}

    </div>
  );
}