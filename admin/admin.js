// アクセス数を取得
const getDateData = Object.keys(localStorage);
const getAccessData = Object.values(localStorage);

// chat.jsでグラフを生成
let lineCtx = document.getElementById("lineChart");
let lineConfig = {
  type: 'bar',
  data: {    
    labels: getDateData,
    datasets: [{
      label: 'アクセス数',
      data: getAccessData,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: '日付',
        }
      },
      y: {
        title: {
          display: true,
          text: 'アクセス数',
        }
      }
    },
  },
};
let lineChart = new Chart(lineCtx, lineConfig);
