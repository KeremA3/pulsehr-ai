import {

  useEffect,
  useState

} from "react";

import {

  getNotifications

} from "../firebase/firestoreService";

export default function EmployeeNotifications() {

  const [notifications,
    setNotifications] =
    useState([]);

  const employeeName =
    localStorage.getItem(
      "pulsehr-user"
    ) || "Personel";

  /* LOAD */

  const loadNotifications =
    async () => {

      const data =
        await getNotifications(
          employeeName
        );

      setNotifications(data);
    };

  useEffect(() => {

    loadNotifications();

  }, []);

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-500/10 rounded-full blur-[60px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-6">

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
          Bildirim Merkezi
        </p>

        <h2 className="text-3xl font-black text-white">
          Bildirimlerim
        </h2>

      </div>

      {/* EMPTY */}

      {notifications.length === 0 && (

        <div className="relative overflow-hidden bg-black/20 border border-dashed border-white/10 rounded-[28px] p-10 text-center">

          {/* ICON */}

          <div className="w-20 h-20 rounded-[26px] mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(34,211,238,0.35)]">

            🔔

          </div>

          <h3 className="text-2xl font-black text-white mt-6">

            Bildirim Bulunmuyor

          </h3>

          <p className="text-gray-400 mt-4 max-w-[420px] mx-auto leading-8">

            Yeni sistem bildirimleri ve izin güncellemeleri burada görüntülenecek.

          </p>

        </div>

      )}

      {/* LIST */}

      {notifications.length > 0 && (

        <div className="space-y-4">

          {notifications.map((notification) => (

            <div
              key={notification.id}
              className="bg-black/20 border border-white/10 rounded-[22px] p-5"
            >

              <p className="text-white leading-7">

                {notification.message}

              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}