import { useEffect, useState } from "react";

export default function GlassTopbar({

  handleLogout

}) {

  const [time,
    setTime] =
    useState("");

  /* LIVE CLOCK */

  useEffect(() => {

    const updateClock =
      () => {

        const now =
          new Date();

        const formatted =
          now.toLocaleString(

            "tr-TR",

            {

              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",

              day: "2-digit",
              month: "long",
              year: "numeric"

            }
          );

        setTime(
          formatted
        );
      };

    updateClock();

    const interval =
      setInterval(

        updateClock,
        1000

      );

    return () =>
      clearInterval(
        interval
      );

  }, []);

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] px-6 py-5 backdrop-blur-[30px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-cyan-500/10 rounded-full blur-[70px]" />

      {/* LEFT */}

      <div className="relative z-10">

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-2">
          PulseHR AI
        </p>

        <h2 className="text-3xl font-black text-white">
          Enterprise Dashboard
        </h2>

      </div>

      {/* RIGHT */}

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-5">

        {/* CLOCK */}

        <div className="bg-black/20 border border-white/10 rounded-[22px] px-5 py-4">

          <p className="text-gray-400 text-xs uppercase tracking-[3px] mb-2">
            Canlı Sistem Saati
          </p>

          <h3 className="text-white font-black text-lg">
            {time}
          </h3>

        </div>

        {/* BUTTON */}

        <button
          onClick={handleLogout}
          className="px-6 py-4 rounded-[22px] bg-gradient-to-r from-red-500 to-pink-600 text-white font-black shadow-[0_0_35px_rgba(244,63,94,0.35)] hover:scale-105 transition-all duration-300"
        >

          Çıkış Yap

        </button>

      </div>

    </div>
  );
}