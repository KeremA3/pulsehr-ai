import { useState } from "react";

export default function LeaveManagement() {

  const [requests,
    setRequests] =
    useState([

      {
        id: 1,
        employee: "Ahmet Yılmaz",
        type: "Yıllık İzin",
        days: 5,
        status: "Onaylandı"
      },

      {
        id: 2,
        employee: "Ayşe Demir",
        type: "Sağlık İzni",
        days: 2,
        status: "Bekliyor"
      }

    ]);

  return (

    <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

      {/* HEADER */}

      <div className="mb-10">

        <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
          HR Operations
        </p>

        <h2 className="text-5xl font-black text-white">
          Leave Management
        </h2>

      </div>

      {/* REQUESTS */}

      <div className="space-y-5">

        {requests.map(
          (request) => (

            <div
              key={request.id}
              className="bg-black/20 border border-white/10 rounded-[25px] p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-black text-white">
                    {request.employee}
                  </h3>

                  <p className="text-gray-400 mt-3 text-lg">
                    {request.type}
                  </p>

                </div>

                <div className="text-right">

                  <div className="bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-2xl text-blue-400 font-bold">

                    {request.days} Gün

                  </div>

                  <p className="text-green-400 mt-4 font-bold">
                    {request.status}
                  </p>

                </div>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}