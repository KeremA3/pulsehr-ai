import {
  Smartphone,
  Bell,
  BrainCircuit,
  Users,
  Activity
} from "lucide-react";

export default function MobilePreviewSystem() {

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Mobile Experience
          </p>

          <h2 className="text-5xl font-black text-white">
            Mobile HR Preview
          </h2>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          Responsive System Active
        </div>

      </div>

      {/* PHONE */}

      <div className="flex justify-center">

        <div className="w-[370px] rounded-[45px] border-[10px] border-black bg-[#0f172a] shadow-2xl overflow-hidden">

          {/* TOP */}

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-blue-100 text-sm">
                  PulseHR AI
                </p>

                <h3 className="text-2xl font-black text-white">
                  Dashboard
                </h3>

              </div>

              <Smartphone
                className="text-white"
                size={32}
              />

            </div>

          </div>

          {/* CONTENT */}

          <div className="p-5 space-y-5">

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400">
                    Toplam Çalışan
                  </p>

                  <h3 className="text-4xl font-black text-white mt-2">
                    128
                  </h3>

                </div>

                <Users
                  className="text-blue-400"
                  size={38}
                />

              </div>

            </div>

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400">
                    AI Risk
                  </p>

                  <h3 className="text-4xl font-black text-red-400 mt-2">
                    %12
                  </h3>

                </div>

                <BrainCircuit
                  className="text-pink-400"
                  size={38}
                />

              </div>

            </div>

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400">
                    Aktif Kullanıcı
                  </p>

                  <h3 className="text-4xl font-black text-green-400 mt-2">
                    94
                  </h3>

                </div>

                <Activity
                  className="text-green-400"
                  size={38}
                />

              </div>

            </div>

            {/* NOTIFICATION */}

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-5">

              <div className="flex items-center gap-4">

                <div className="bg-blue-500/20 p-4 rounded-2xl">

                  <Bell
                    className="text-blue-400"
                    size={28}
                  />

                </div>

                <div>

                  <h4 className="text-xl font-black text-white">
                    AI Notification
                  </h4>

                  <p className="text-gray-400 mt-2 leading-7">
                    Mobil bildirim sistemi aktif çalışıyor.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}