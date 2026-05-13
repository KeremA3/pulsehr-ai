export default function SearchFilter({
  search,
  setSearch,
  filterDepartment,
  setFilterDepartment
}) {
  return (
    <div className="bg-white text-black p-5 rounded-2xl shadow mb-6 flex gap-4">
      <input
        type="text"
        placeholder="Personel ara..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border rounded-xl p-3 w-72"
      />

      <select
        value={filterDepartment}
        onChange={(e) =>
          setFilterDepartment(
            e.target.value
          )
        }
        className="border rounded-xl p-3"
      >
        <option>Tümü</option>
        <option>Yazılım</option>
        <option>Muhasebe</option>
        <option>
          İnsan Kaynakları
        </option>
        <option>Satış</option>
      </select>
    </div>
  );
}