import { useState } from "react";

import {

  checkInEmployee,
  checkOutEmployee

} from "../firebase/firestoreService";

import PremiumToast from "./PremiumToast";

export default function AttendancePanel() {

  const [toast,
    setToast] =
    useState(null);

  const employeeName =
    localStorage.getItem(
      "pulsehr-user"
    ) || "Personel";

  /* CHECK IN */

  const handleCheckIn =
    async () => {

      await checkInEmployee(
        employeeName
      );

      setToast(
        "Mesai başlatıldı."
      );

      setTimeout(() => {

        setToast(null);

      }, 2500);
    };

  /* CHECK OUT */

  const handleCheckOut =
    async () => {

      await checkOutEmployee(
        employeeName
      );

      setToast(
        "Mesai bitirildi."
      );

      setTimeout(() => {

        setToast(null);

      }, 2500);
    };

  return (

    <>

      {toast && (

        <PremiumToast
          message={toast}
        />

      )}

      <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

        {/* GLOW */}

        <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-500/10 rounded-full blur-[60px]" />

        {/* CONTENT */}

        <div className="relative z-10">

          <p className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
            Personel Takibi
          </p>

          <h2 className="text-3xl font-black text-white">
            Mesai Kontrolü
          </h2>

          <p className="text-gray-400 mt-4 leading-8">

            Giriş yapan kullanıcı:
            <span className="text-cyan-400 font-bold ml-2">

              {employeeName}

            </span>

          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={handleCheckIn}
              className="px-7 py-4 rounded-[22px] bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black shadow-[0_0_35px_rgba(34,197,94,0.35)] hover:scale-105 transition-all duration-300"
            >

              Mesaiye Başla

            </button>

            <button
              onClick={handleCheckOut}
              className="px-7 py-4 rounded-[22px] bg-gradient-to-r from-red-500 to-pink-600 text-white font-black shadow-[0_0_35px_rgba(244,63,94,0.35)] hover:scale-105 transition-all duration-300"
            >

              Mesaiyi Bitir

            </button>

          </div>

        </div>

      </div>

    </>

  );
}