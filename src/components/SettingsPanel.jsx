import {
  Settings,
  ShieldCheck,
  Bell,
  Moon,
  Database,
  BrainCircuit,
  Lock
} from "lucide-react";

export default function SettingsPanel() {

  const settings = [

    {
      id: 1,
      title: "AI Monitoring",
      description: "Gerçek zamanlı AI analiz sistemi aktif",
      icon: (
        <BrainCircuit
          className="text-blue-400"
          size={30}
        />
      ),
      status: "Aktif"
    },

    {
      id: 2,
      title: "Security System",
      description: "Enterprise güvenlik sistemi aktif",
      icon: (
        <ShieldCheck
          className="text-green-400"
          size={30}
        />
      ),
      status: "Korunuyor"
    },

    {
      id: 3,
      title: "Notifications",
      description: "Canlı bildirim sistemi aktif",
      icon: (
        <Bell
          className="text-yellow-400"
          size={30}
        />
      ),
      status: "Açık"
    },

    {
      id: 4,
      title: "Dark Mode",
      description: "Ultra modern dark theme kullanılıyor",
      icon: (
        <Moon
          className="text-purple-400"
          size={30}
        />
      ),
      status: "Enabled"
    },

    {
      id: 5,
      title: "Cloud Database",
      description: "Firebase realtime database bağlantısı aktif",
      icon: (
        <Database
          className="text-pink-400"
          size={30}
        />
      ),
      status: "Online"
    },

    {
      id: 6,
      title: "Access Control",
      description: "Role-based erişim sistemi aktif",
      icon: (
        <Lock
          className="text-red-400"
          size={30}
        />
      ),
      status: "Protected"
    }

  ];

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            System Settings
          </p>

          <h2 className="text-5xl font-black text-white">
            Sistem Ayarları
          </h2>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          Enterprise Config Active
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {settings.map(
          (setting) => (

            <div
              key={setting.id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* TOP */}

              <div className="flex items-start justify-between mb-8">

                <div className="bg-black/20 p-5 rounded-3xl">

                  {setting.icon}

                </div>

                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-xl">
                  {setting.status}
                </div>

              </div>

              {/* CONTENT */}

              <h3 className="text-3xl font-black text-white">
                {setting.title}
              </h3>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                {setting.description}
              </p>

              {/* BUTTON */}

              <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.01] transition-all duration-300 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl">

                Ayarları Yönet

              </button>

            </div>
          )
        )}

      </div>

    </div>
  );
}