export default function EmployeeForm({
  name,
  setName,

  department,
  setDepartment,

  employeeEmail,
  setEmployeeEmail,

  employeePassword,
  setEmployeePassword,

  addEmployee
}) {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow mb-8">
      <h2 className="text-2xl font-bold mb-5">
        Personel Ekle
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* NAME */}
        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Personel adı"
          className="border rounded-xl p-3"
        />

        {/* DEPARTMENT */}
        <select
          value={department}
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        >
          <option>Yazılım</option>
          <option>Muhasebe</option>
          <option>
            İnsan Kaynakları
          </option>
          <option>Satış</option>
        </select>

        {/* EMAIL */}
        <input
          type="email"
          value={employeeEmail}
          onChange={(e) =>
            setEmployeeEmail(
              e.target.value
            )
          }
          placeholder="Personel email"
          className="border rounded-xl p-3"
        />

        {/* PASSWORD */}
        <input
          type="password"
          value={employeePassword}
          onChange={(e) =>
            setEmployeePassword(
              e.target.value
            )
          }
          placeholder="Personel şifre"
          className="border rounded-xl p-3"
        />
      </div>

      <button
        onClick={addEmployee}
        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Personel Oluştur
      </button>
    </div>
  );
}