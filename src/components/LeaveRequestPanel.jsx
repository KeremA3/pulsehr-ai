import {

  useState

} from "react";

import {

  createLeaveRequest

} from "../firebase/firestoreService";

export default function LeaveRequestPanel() {

  const [reason,
    setReason] =
    useState("");

  const employeeName =
    localStorage.getItem(
      "pulsehr-user"
    ) || "Personel";

  /* CREATE */

  const handleCreate =
    async () => {

      if (!reason) return;

      await createLeaveRequest(

        employeeName,
        reason

      );

      setReason("");

      alert(
        "İzin talebi oluşturuldu."
      );
    };

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-purple-500/10 rounded-full blur-[60px]" />

      {/* CONTENT */}

      <div className="relative z-10">

        <p className="text-purple-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
          İzin Yönetimi
        </p>

        <h2 className="text-3xl font-black text-white">
          İzin Talebi Oluştur
        </h2>

        <p className="text-gray-400 mt-4 leading-8">
          Yıllık izin veya özel izin talebi oluşturun.
        </p>

        {/* INPUT */}

        <textarea
          value={reason}
          onChange={(e) =>
            setReason(
              e.target.value
            )
          }
          placeholder="İzin sebebinizi yazın..."
          className="w-full mt-6 bg-black/20 border border-white/10 rounded-[22px] px-5 py-5 text-white outline-none min-h-[140px]"
        />

        {/* BUTTON */}

        <button
          onClick={handleCreate}
          className="mt-6 px-7 py-4 rounded-[22px] bg-gradient-to-r from-purple-500 to-pink-600 text-white font-black shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:scale-105 transition-all duration-300"
        >

          İzin Talebi Gönder

        </button>

      </div>

    </div>
  );
}