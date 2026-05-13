import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function AIAnalytics({
  riskScore,
  riskColor,
  aiMessage,
  chartData
}) {
  const COLORS = [
    "#22c55e",
    "#ef4444"
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {/* AI PANEL */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-7 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            AI Risk Analizi
          </h2>

          <div
            className={`text-3xl font-bold ${riskColor}`}
          >
            %{riskScore}
          </div>
        </div>

        <p className="text-gray-200 text-lg">
          {aiMessage}
        </p>
      </div>

      {/* CHART */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-xl font-bold mb-4 text-black">
          Çalışan Durumu
        </h2>

        <div className="h-64">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {chartData.map(
                  (entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        COLORS[index]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}