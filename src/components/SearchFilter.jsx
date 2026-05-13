import {
  Search,
  Filter,
  Sparkles
} from "lucide-react";

export default function SearchFilter({

  search,
  setSearch,

  filterDepartment,
  setFilterDepartment

}) {

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Smart Filtering
          </p>

          <h2 className="text-4xl font-black text-white">
            AI Destekli Filtreleme
          </h2>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-5 py-3 rounded-2xl backdrop-blur-xl">
          Smart Search Active
        </div>

      </div>

      {/* FILTER AREA */}

      <div className="grid grid-cols-2 gap-6">

        {/* SEARCH */}

        <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

          <div className="flex items-center gap-4 mb-5">

            <div className="bg-blue-500/20 p-4 rounded-2xl">

              <Search
                className="text-blue-400"
                size={30}
              />

            </div>

            <div>

              <p className="text-gray-400">
                Employee Search
              </p>

              <h3 className="text-2xl font-black text-white">
                Çalışan Ara
              </h3>

            </div>

          </div>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Çalışan adı girin..."
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
          />

        </div>

        {/* FILTER */}

        <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

          <div className="flex items-center gap-4 mb-5">

            <div className="bg-purple-500/20 p-4 rounded-2xl">

              <Filter
                className="text-purple-400"
                size={30}
              />

            </div>

            <div>

              <p className="text-gray-400">
                Department Filter
              </p>

              <h3 className="text-2xl font-black text-white">
                Departman Filtrele
              </h3>

            </div>

          </div>

          <select
            value={filterDepartment}
            onChange={(e) =>
              setFilterDepartment(
                e.target.value
              )
            }
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
          >

            <option className="bg-black">
              Tümü
            </option>

            <option className="bg-black">
              Yazılım
            </option>

            <option className="bg-black">
              İnsan Kaynakları
            </option>

            <option className="bg-black">
              Muhasebe
            </option>

            <option className="bg-black">
              Pazarlama
            </option>

            <option className="bg-black">
              Operasyon
            </option>

          </select>

        </div>

      </div>

      {/* AI INFO */}

      <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

        <div className="flex items-center gap-4">

          <div className="bg-pink-500/20 p-4 rounded-2xl">

            <Sparkles
              className="text-pink-400"
              size={30}
            />

          </div>

          <div>

            <h3 className="text-2xl font-black text-white">
              AI Smart Filtering
            </h3>

            <p className="text-gray-400 mt-2 leading-7">

              Sistem çalışanları gerçek zamanlı filtreleyerek
              yönetim süreçlerini hızlandırıyor.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}