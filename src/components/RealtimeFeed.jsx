export default function RealtimeFeed() {

  const activities = [

    {
      id: 1,
      user: "Ahmet Yılmaz",
      action: "giriş yaptı"
    },

    {
      id: 2,
      user: "Ayşe Demir",
      action: "izin talebi oluşturdu"
    },

    {
      id: 3,
      user: "Mehmet Kaya",
      action: "çıkış yaptı"
    }

  ];

  return (

    <div className="mt-10">

      {/* HEADER */}

      <div className="mb-8">

        <h2 className="text-4xl font-black text-white">
          Realtime Activity Feed
        </h2>

        <p className="text-gray-400 mt-2">
          Canlı çalışan aktiviteleri
        </p>

      </div>

      {/* FEED */}

      <div className="space-y-4">

        {activities.map(
          (activity) => (

            <div
              key={activity.id}
              className="bg-white/5 border border-white/10 rounded-[25px] p-6"
            >

              <p className="text-2xl font-bold text-white">
                {activity.user}
              </p>

              <p className="text-gray-400 mt-2 text-lg">
                {activity.action}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}