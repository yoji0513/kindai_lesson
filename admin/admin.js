// アクセス数を取得
// ここにデータを作成する

// chat.jsでグラフを生成
let lineCtx = document.getElementById("lineChart");
let lineConfig = {
  type: 'bar',
  data: {    
    labels: ここに日付データ,
    datasets: [{
      label: 'アクセス数',
      data: ここにアクセスデータ,
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
