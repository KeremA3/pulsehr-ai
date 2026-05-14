import {

  useState

} from "react";

import {

  createPayroll

} from "../firebase/firestoreService";

import PremiumToast from "./PremiumToast";

export default function PayrollManagement() {

  const [employeeName,
    setEmployeeName] =
    useState("");

  const [salary,
    setSalary] =
    useState("");

  const [bonus,
    setBonus] =
    useState("");

  const [paymentDate,
    setPaymentDate] =
    useState("");

  const [toast,
    setToast] =
    useState(null);

  /* CREATE */

  const handleCreate =
    async () => {

      if (
        !employeeName ||
        !salary
      ) return;

      await createPayroll(

        employeeName,
        salary,
        bonus,
        paymentDate

      );

      setToast(
        "Payroll oluşturuldu."
      );

      setEmployeeName("");
      setSalary("");
      setBonus("");
      setPaymentDate("");

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

        <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-emerald-500/10 rounded-full blur-[70px]" />

        {/* HEADER */}

        <div className="relative z-10 mb-8">

          <p className="text-emerald-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
            Payroll System
          </p>

          <h2 className="text-3xl font-black text-white">
            Maaş Yönetimi
          </h2>

        </div>

        {/* FORM */}

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            value={employeeName}
            onChange={(e) =>
              setEmployeeName(
                e.target.value
              )
            }
            placeholder="Personel adı"
            className="bg-black/20 border border-white/10 rounded-[22px] px-5 py-5 text-white outline-none"
          />

          <input
            value={salary}
            onChange={(e) =>
              setSalary(
                e.target.value
              )
            }
            placeholder="Maaş"
            className="bg-black/20 border border-white/10 rounded-[22px] px-5 py-5 text-white outline-none"
          />

          <input
            value={bonus}
            onChange={(e) =>
              setBonus(
                e.target.value
              )
            }
            placeholder="Bonus"
            className="bg-black/20 border border-white/10 rounded-[22px] px-5 py-5 text-white outline-none"
          />

          <input
            type="date"
            value={paymentDate}
            onChange={(e) =>
              setPaymentDate(
                e.target.value
              )
            }
            className="bg-black/20 border border-white/10 rounded-[22px] px-5 py-5 text-white outline-none"
          />

        </div>

        {/* BUTTON */}

        <button
          onClick={handleCreate}
          className="relative z-10 mt-6 px-7 py-4 rounded-[22px] bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black shadow-[0_0_35px_rgba(16,185,129,0.35)] hover:scale-105 transition-all duration-300"
        >

          Payroll Oluştur

        </button>

      </div>

    </>

  );
}