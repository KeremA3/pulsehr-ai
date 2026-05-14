import {

  useEffect,
  useState

} from "react";

import {

  getLeaveRequests,
  updateLeaveStatus,
  createNotification

} from "../firebase/firestoreService";

export default function AdminLeavePanel() {

  const [requests,
    setRequests] =
    useState([]);

  /* LOAD */

  const loadRequests =
    async () => {

      const data =
        await getLeaveRequests();

      setRequests(data);
    };

  useEffect(() => {

    loadRequests();

  }, []);

  /* APPROVE */

  const handleApprove =
    async (id) => {

      await updateLeaveStatus(

        id,
        "Onaylandı"

      );

      const request =
        requests.find(
          (item) =>
            item.id === id
        );

      await createNotification(

        request.employeeName,

        "İzin talebiniz onaylandı."

      );

      loadRequests();
    };

  /* REJECT */

  const handleReject =
    async (id) => {

      await updateLeaveStatus(

        id,
        "Reddedildi"

      );

      const request =
        requests.find(
          (item) =>
            item.id === id
        );

      await createNotification(

        request.employeeName,

        "İzin talebiniz reddedildi."

      );

      loadRequests();
    };

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-purple-500/10 rounded-full blur-[60px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-6">

        <p className="text-purple-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
          İzin Yönetimi
        </p>

        <h2 className="text-3xl font-black text-white">
          Personel İzin Talepleri
        </h2>

      </div>

      {/* LIST */}

      <div className="space-y-4">

        {requests.map((request) => (

          <div
            key={request.id}
            className="bg-black/20 border border-white/10 rounded-[22px] p-5"
          >

            <div className="flex flex-col gap-5">

              {/* TOP */}

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                {/* LEFT */}

                <div>

                  <h3 className="text-white font-bold text-lg">
                    {request.employeeName}
                  </h3>

                  <p className="text-gray-400 mt-2 leading-7">
                    {request.reason}
                  </p>

                </div>

                {/* STATUS */}

                <div
                  className={`px-4 py-2 rounded-2xl text-sm font-bold border

                  ${
                    request.status ===
                    "Onaylandı"

                      ? "bg-green-500/10 text-green-400 border-green-500/20"

                      : request.status ===
                        "Reddedildi"

                      ? "bg-red-500/10 text-red-400 border-red-500/20"

                      : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                  }
                  `}
                >

                  {request.status}

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() =>
                    handleApprove(
                      request.id
                    )
                  }
                  className="px-5 py-3 rounded-[18px] bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:scale-105 transition-all duration-300"
                >

                  Onayla

                </button>

                <button
                  onClick={() =>
                    handleReject(
                      request.id
                    )
                  }
                  className="px-5 py-3 rounded-[18px] bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold hover:scale-105 transition-all duration-300"
                >

                  Reddet

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}