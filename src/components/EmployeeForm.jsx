export default function EmployeeForm({
  name,
  setName,
  department,
  setDepartment,
  addEmployee
}) {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow mb-8">
      <h2 className="text-2xl font-bold mb-5">
        Personel Ekle
      </h2>

      <div className="flex gap-3">
        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Personel adı"
          className="border rounded-xl p-3 w-64"
        />

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

        <button
          onClick={addEmployee}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Ekle
        </button>
      </div>
    </div>
  );
}