import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SortingMatch({ dataConverted }) {
  return (
    <div className="App" style={{width:"70%"}}>
      <h1>SORTING VISUALIZATION</h1>
      <div style={{ width: "100%", maxWidth: "1500px", margin: "0 auto" }}>
        <Bar
          data={{
            labels: dataConverted,
            datasets: [
              {
                label: "Values",
                data: dataConverted,
                backgroundColor: "aqua",
                borderColor: "aqua",
                borderWidth: 0.5,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false, 
            animation: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 15,
                  },
                },
              },
            },
          }}
          height={500} // you can control height
        />
      </div>
    </div>
  );
}

export default SortingMatch;
