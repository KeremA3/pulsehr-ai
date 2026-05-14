export default function NotificationCenter() {

  const notifications = [

    {
      id: 1,
      title: "AI Risk Alert",
      message:
        "Muhasebe departmanında performans düşüşü algılandı.",
      type: "risk"
    },

    {
      id: 2,
      title: "Yeni Çalışan",
      message:
        "Sisteme yeni çalışan başarıyla eklendi.",
      type: "success"
    },

    {
      id: 3,
      title: "Realtime Monitoring",
      message:
        "Realtime employee tracking aktif çalışıyor.",
      type: "info"
    }

  ];

  const getStyles = (type) => {

    switch (type) {

      case "risk":

        return "from-red-500/20 to-pink-500/20 border-red-500/20";

      case "success":

        return "from-green-500/20 to-emerald-500/20 border-green-500/20";

      default:

        return "from-blue-500/20 to-purple-500/20 border-blue-500/20";
    }
  };

  return (

    <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

      {/* HEADER */}

      <div className="mb-10">

        <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
          Live System
        </p>

        <h2 className="text-5xl font-black text-white">
          Notification Center
        </h2>

      </div>

      {/* LIST */}

      <div className="space-y-5">

        {notifications.map(
          (notification) => (

            <div
              key={notification.id}
              className={`bg-gradient-to-r ${getStyles(notification.type)} border rounded-[25px] p-6 backdrop-blur-2xl`}
            >

              <h3 className="text-2xl font-black text-white">
                {notification.title}
              </h3>

              <p className="text-gray-300 mt-3 text-lg leading-8">
                {notification.message}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}