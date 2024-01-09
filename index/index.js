// アクセス数を取得する日付のキーを生成する関数
function getFormattedDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
  
// アクセス数を更新する関数
function updateAccessCount() {
  const currentDate = getFormattedDate();
  let accessCount = localStorage.getItem(currentDate) || 0;
  accessCount = parseInt(accessCount) + 1;
  localStorage.setItem(currentDate, accessCount);
}
  
// ページが読み込まれたときにアクセス数を更新
updateAccessCount();

// ローカルストレージからアクセス数を取得してコンソールに表示
const currentDate = getFormattedDate();
const accessCount = localStorage.getItem(currentDate) || 0;

