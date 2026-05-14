export default function AIAnalytics() {

  const analytics = [

    {
      id: 1,
      title: "Attendance Stability",
      value: "94%",
      color: "text-green-400"
    },

    {
      id: 2,
      title: "Employee Satisfaction",
      value: "91%",
      color: "text-blue-400"
    },

    {
      id: 3,
      title: "AI Risk Analysis",
      value: "%12",
      color: "text-pink-400"
    },

    {
      id: 4,
      title: "Productivity Score",
      value: "89%",
      color: "text-purple-400"
    }

  ];

  return (

    <div className="mt-10">

      {/* HEADER */}

      <div className="mb-8">

        <h2 className="text-4xl font-black text-white">
          AI Analytics
        </h2>

        <p className="text-gray-400 mt-2">
          Enterprise workforce intelligence
        </p>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {analytics.map(
          (item) => (

            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8"
            >

              <p className="text-gray-400 text-lg">
                {item.title}
              </p>

              <h2 className={`text-5xl font-black mt-5 ${item.color}`}>
                {item.value}
              </h2>

            </div>
          )
        )}

      </div>

    </div>
  );
}