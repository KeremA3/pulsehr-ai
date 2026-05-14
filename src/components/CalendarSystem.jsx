export default function CalendarSystem() {

  const events = [

    {
      id: 1,
      title: "Yönetim Toplantısı",
      date: "14 Mayıs 2026",
      type: "Toplantı"
    },

    {
      id: 2,
      title: "Yıllık İzin",
      date: "18 Mayıs 2026",
      type: "İzin"
    },

    {
      id: 3,
      title: "Şirket Etkinliği",
      date: "25 Mayıs 2026",
      type: "Etkinlik"
    }

  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-orange-500/10 rounded-full blur-[70px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-8">

        <p className="text-orange-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
          Calendar System
        </p>

        <h2 className="text-3xl font-black text-white">
          Takvim & Organizasyon
        </h2>

      </div>

      {/* EVENTS */}

      <div className="space-y-4">

        {events.map((event) => (

          <div
            key={event.id}
            className="bg-black/20 border border-white/10 rounded-[24px] p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
          >

            {/* LEFT */}

            <div>

              <h3 className="text-white text-xl font-black">
                {event.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {event.date}
              </p>

            </div>

            {/* TYPE */}

            <div className="px-4 py-2 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-sm">

              {event.type}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}