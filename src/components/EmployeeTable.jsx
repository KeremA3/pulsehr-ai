export default function EmployeeTable({
  filteredEmployees,
  checkIn,
  checkOut,
  deleteEmployee
}) {
  return (
    <div className="bg-white text-black rounded-2xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-5">
              Personel
            </th>

            <th className="text-left p-5">
              Departman
            </th>

            <th className="text-left p-5">
              Giriş
            </th>

            <th className="text-left p-5">
              Çıkış
            </th>

            <th className="text-left p-5">
              Durum
            </th>

            <th className="text-left p-5">
              İşlemler
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map(
            (employee) => (
              <tr
                key={employee.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-5 font-semibold">
                  {employee.name}
                </td>

                <td className="p-5 text-gray-600">
                  {employee.department}
                </td>

                <td className="p-5">
                  {employee.checkIn ||
                    "-"}
                </td>

                <td className="p-5">
                  {employee.checkOut ||
                    "-"}
                </td>

                <td className="p-5">
                  {employee.late ? (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Geç
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Normal
                    </span>
                  )}
                </td>

                <td className="p-5">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        checkIn(
                          employee.id
                        )
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Giriş
                    </button>

                    <button
                      onClick={() =>
                        checkOut(
                          employee.id
                        )
                      }
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      Çıkış
                    </button>

                    <button
                      onClick={() =>
                        deleteEmployee(
                          employee.id
                        )
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Sil
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}