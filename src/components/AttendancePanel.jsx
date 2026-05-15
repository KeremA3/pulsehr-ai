import {

  useState

} from "react";

import {

  checkInEmployee,
  checkOutEmployee

} from "../firebase/firestoreService";

import PremiumToast from "./PremiumToast";

export default function AttendancePanel() {

  const [cardId,
    setCardId] =
    useState("");

  const [checkedIn,
    setCheckedIn] =
    useState(false);

  const [toast,
    setToast] =
    useState(null);

  /* HANDLE CARD */

  const handleCard =
    async () => {

      if (!cardId) return;

      const currentTime =
        new Date()
          .toLocaleString();

      if (!checkedIn) {

        await checkInEmployee(
          cardId
        );

        setToast(
          `Mesai başladı • ${currentTime}`
        );

        setCheckedIn(true);

      } else {

        await checkOutEmployee(
          cardId
        );

        setToast(
          `Mesai tamamlandı • ${currentTime}`
        );

        setCheckedIn(false);
      }

      setCardId("");

      setTimeout(() => {

        setToast(null);

      }, 3000);
    };

  return (

    <>

      {toast && (

        <PremiumToast
          message={toast}
        />

      )}

      <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-8 backdrop-blur-[30px]">

        {/* GLOW */}

        <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-cyan-500/10 rounded-full blur-[80px]" />

        {/* HEADER */}

        <div className="relative z-10 mb-8">

          <p className="text-cyan-400 uppercase tracking-[5px] text-xs font-semibold mb-3">
            Smart Attendance
          </p>

          <h2 className="text-4xl font-black text-white">
            Kartlı Giriş Sistemi
          </h2>

        </div>

        {/* CARD AREA */}

        <div className="relative z-10 flex flex-col lg:flex-row gap-5">

          <input
            value={cardId}
            onChange={(e) =>
              setCardId(
                e.target.value
              )
            }
            placeholder="Kart ID okut..."
            className="flex-1 bg-black/20 border border-white/10 rounded-[24px] px-6 py-5 text-white outline-none"
          />

          <button
            onClick={handleCard}
            className="px-8 py-5 rounded-[24px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300"
          >

            Kartı Oku

          </button>

        </div>

        {/* STATUS */}

        <div className="relative z-10 mt-8">

          <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border text-sm font-bold ${
            checkedIn
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}>

            <div className={`w-3 h-3 rounded-full ${
              checkedIn
                ? "bg-green-400"
                : "bg-red-400"
            }`} />

            {

              checkedIn
                ? "Mesai Aktif"
                : "Mesai Dışı"

            }

          </div>

        </div>

      </div>

    </>

  );
}