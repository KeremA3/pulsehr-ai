import {
  Wifi,
  Clock3,
  CircleOff,
  Activity
} from "lucide-react";

export default function OnlineStatusSystem() {

  const onlineUsers = [

    {
      id: 1,
      name: "Ahmet Yılmaz",
      status: "Online",
      activity: "Dashboard görüntülüyor",
      color: "green"
    },

    {
      id: 2,
      name: "Ayşe Demir",
      status: "Idle",
      activity: "5 dk önce aktifti",
      color: "yellow"
    },

    {
      id: 3,
      name: "Mehmet Kaya",
      status: "Offline",
      activity: "Çıkış yaptı",
      color: "gray"
    }

  ];

  const getStatusColor = (color) => {

    switch (color) {

      case "green":
        return "bg-green-400";

      case "yellow":
        return "bg-yellow-400";

      case "gray":
        return "bg-gray-500";

      default:
        return "bg-gray-500";
    }
  };

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Live Presence System
          </p>

          <h2 className="text-5xl font-black text-white">
            Online Durum Sistemi
          </h2>

        </div>

        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          Realtime Presence Active
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-3 gap-6">

        {onlineUsers.map(
          (user) => (

            <div
              key={user.id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* TOP */}

              <div className="flex items-center justify-between mb-8">

                <div className={`w-5 h-5 rounded-full ${getStatusColor(user.color)}`} />

                <div className="bg-black/20 px-4 py-2 rounded-xl text-gray-300">
                  {user.status}
                </div>

              </div>

              {/* USER */}

              <h3 className="text-3xl font-black text-white">
                {user.name}
              </h3>

              <p className="text-gray-400 mt-4 text-lg leading-8">
                {user.activity}
              </p>

              {/* STATUS ICON */}

              <div className="mt-8 flex items-center gap-4">

                {user.status === "Online" && (

                  <div className="bg-green-500/20 p-4 rounded-2xl">

                    <Wifi
                      className="text-green-400"
                      size={32}
                    />

                  </div>

                )}

                {user.status === "Idle" && (

                  <div className="bg-yellow-500/20 p-4 rounded-2xl">

                    <Clock3
                      className="text-yellow-400"
                      size={32}
                    />

                  </div>

                )}

                {user.status === "Offline" && (

                  <div className="bg-gray-500/20 p-4 rounded-2xl">

                    <CircleOff
                      className="text-gray-400"
                      size={32}
                    />

                  </div>

                )}

                <div>

                  <p className="text-gray-400">
                    Current Status
                  </p>

                  <h4 className="text-2xl font-black text-white">
                    {user.status}
                  </h4>

                </div>

              </div>

              {/* AI TRACKING */}

              <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-5">

                <div className="flex items-center gap-4">

                  <Activity
                    className="text-blue-400"
                    size={28}
                  />

                  <div>

                    <p className="text-white font-semibold">
                      AI Presence Tracking
                    </p>

                    <p className="text-gray-400 mt-1">
                      Gerçek zamanlı kullanıcı takibi aktif.
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