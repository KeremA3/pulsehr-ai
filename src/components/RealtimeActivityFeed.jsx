export default function RealtimeActivityFeed() {

  const activities = [

    {
      id: 1,
      user: "Ahmet Yılmaz",
      action: "giriş yaptı",
      time: "2 dk önce"
    },

    {
      id: 2,
      user: "Zeynep Kaya",
      action: "izin talebi oluşturdu",
      time: "5 dk önce"
    },

    {
      id: 3,
      user: "Mert Demir",
      action: "rapor oluşturdu",
      time: "9 dk önce"
    },

    {
      id: 4,
      user: "Elif Aydın",
      action: "departman değiştirdi",
      time: "12 dk önce"
    }

  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-500/10 rounded-full blur-[60px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-6">

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
          Canlı Aktivite
        </p>

        <h2 className="text-3xl font-black text-white">
          Sistem Hareketleri
        </h2>

      </div>

      {/* LIST */}

      <div className="space-y-4">

        {activities.map((activity) => (

          <div
            key={activity.id}
            className="flex items-center justify-between bg-black/20 border border-white/10 rounded-[22px] px-5 py-4"
          >

            <div>

              <h3 className="text-white font-bold text-lg">
                {activity.user}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {activity.action}
              </p>

            </div>

            <div className="text-cyan-400 text-sm font-semibold">

              {activity.time}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}