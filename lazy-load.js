// lazy-loadを利用する画像の取得
const images = document.querySelectorAll('.lazy');

// observerを作成
let observer = new IntersectionObserver(onIntersection);

// 各種imageを登録
images.forEach(image => {
  observer.observe(image);
});

function onIntersection(entries) {
  entries.forEach(entry => {
    // 画面内に入っているか
    if (entry.intersectionRatio > 0) {
      // 監視を終了しsrcをセット
      observer.unobserve(entry.target);
      entry.target.src = entry.target.dataset.src;
    }
  });
}
