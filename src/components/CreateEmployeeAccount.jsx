import {

  useEffect,
  useState

} from "react";

import {

  createEmployeeAccount

} from "../firebase/authService";

import {

  getDepartments

} from "../firebase/firestoreService";

import PremiumToast from "./PremiumToast";

export default function CreateEmployeeAccount() {

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [department,
    setDepartment] =
    useState("");

  const [departments,
    setDepartments] =
    useState([]);

  const [toast,
    setToast] =
    useState(null);

  /* LOAD DEPARTMENTS */

  useEffect(() => {

    const loadDepartments =
      async () => {

        const data =
          await getDepartments();

        setDepartments(data);
      };

    loadDepartments();

  }, []);

  /* CREATE ACCOUNT */

  const handleCreate =
    async () => {

      if (
        !email ||
        !password ||
        !department
      ) {

        setToast(
          "Tüm alanları doldurun."
        );

        setTimeout(() => {

          setToast(null);

        }, 2500);

        return;
      }

      try {

        await createEmployeeAccount(

          email,
          password

        );

        setToast(
          "Personel hesabı oluşturuldu."
        );

        setEmail("");
        setPassword("");
        setDepartment("");

      } catch {

        setToast(
          "Hesap oluşturulamadı."
        );
      }

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

        <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-cyan-500/10 rounded-full blur-[70px]" />

        {/* HEADER */}

        <div className="relative z-10 mb-8">

          <p className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
            Account Management
          </p>

          <h2 className="text-3xl font-black text-white">
            Personel Hesabı Oluştur
          </h2>

        </div>

        {/* FORM */}

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* EMAIL */}

          <input
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            placeholder="Personel email"
            className="bg-black/20 border border-white/10 rounded-[22px] px-5 py-5 text-white outline-none"
          />

          {/* PASSWORD */}

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            placeholder="Geçici şifre"
            className="bg-black/20 border border-white/10 rounded-[22px] px-5 py-5 text-white outline-none"
          />

          {/* DEPARTMENT */}

          <select
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
            className="bg-black/20 border border-white/10 rounded-[22px] px-5 py-5 text-white outline-none"
          >

            <option value="">
              Departman Seç
            </option>

            {departments.map((dep) => (

              <option
                key={dep.id}
                value={dep.name}
              >

                {dep.name}

              </option>

            ))}

          </select>

        </div>

        {/* BUTTON */}

        <button
          onClick={handleCreate}
          className="relative z-10 mt-6 px-7 py-4 rounded-[22px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300"
        >

          Hesap Oluştur

        </button>

      </div>

    </>

  );
}