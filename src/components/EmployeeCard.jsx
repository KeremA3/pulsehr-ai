export default function EmployeeCard({
  employee,
  onCheckIn,
  onCheckOut,
  onDelete
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {employee.name}
          </h3>

          <p className="text-gray-500">
            {employee.department}
          </p>
        </div>

        <div>
          {employee.late ? (
            <span className="text-red-500 font-semibold">
              Geç Kaldı
            </span>
          ) : (
            <span className="text-green-600 font-semibold">
              Zamanında
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          Giriş: {employee.checkIn || "-"}
        </p>

        <p>
          Çıkış: {employee.checkOut || "-"}
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() =>
            onCheckIn(employee.id)
          }
          className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
        >
          Giriş
        </button>

        <button
          onClick={() =>
            onCheckOut(employee.id)
          }
          className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
        >
          Çıkış
        </button>

        <button
          onClick={() =>
            onDelete(employee.id)
          }
          className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
        >
          Sil
        </button>
      </div>
    </div>
  );
}