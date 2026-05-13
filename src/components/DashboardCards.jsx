export default function DashboardCards({
  totalEmployees,
  checkedInEmployees,
  lateEmployees
}) {
  return (
    <div className="grid grid-cols-3 gap-5 mb-8">
      <div className="bg-white text-black p-6 rounded-2xl shadow hover:shadow-xl transition">
        <p className="text-gray-500">
          Toplam Personel
        </p>

        <h2 className="text-4xl font-bold mt-3">
          {totalEmployees}
        </h2>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl shadow hover:shadow-xl transition">
        <p className="text-gray-500">
          Bugün Gelenler
        </p>

        <h2 className="text-4xl font-bold mt-3">
          {checkedInEmployees}
        </h2>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl shadow hover:shadow-xl transition">
        <p className="text-gray-500">
          Geç Kalanlar
        </p>

        <h2 className="text-4xl font-bold mt-3 text-red-500">
          {lateEmployees}
        </h2>
      </div>
    </div>
  );
}