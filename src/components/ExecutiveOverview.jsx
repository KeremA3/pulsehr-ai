export default function ExecutiveOverview() {

  const executives = [

    {
      id: 1,
      title: "Global Workforce",
      value: "1,248",
      sub: "Aktif çalışan"
    },

    {
      id: 2,
      title: "AI Efficiency",
      value: "96%",
      sub: "Otomasyon başarısı"
    },

    {
      id: 3,
      title: "Security Rating",
      value: "AAA",
      sub: "Enterprise koruma"
    }

  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl overflow-hidden relative">

      {/* GLOW */}

      <div className="absolute top-0 left-0 w-[220px] h-[220px] bg-blue-500/20 rounded-full blur-[90px]" />

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-10">

          <p className="text-blue-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
            Executive Intelligence
          </p>

          <h2 className="text-6xl font-black text-white leading-tight">
            Executive
            <br />
            Overview
          </h2>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-3 gap-5">

          {executives.map(
            (item) => (

              <div
                key={item.id}
                className="bg-black/20 border border-white/10 rounded-[30px] p-6"
              >

                <p className="text-gray-400 text-sm uppercase tracking-[3px]">
                  {item.title}
                </p>

                <h3 className="text-5xl font-black text-white mt-5">
                  {item.value}
                </h3>

                <p className="text-cyan-400 mt-4 font-semibold">
                  {item.sub}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}