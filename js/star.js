// 반짝임 효과
function generateRandomPercent(min = 0, max = 100) {
  const randomInteger = Math.floor(Math.random() * (max + 1));
  return `${randomInteger}%`;
  }
  function generateRadomDelay(interval = 5) {
  const randomInteger = Math.random() * (interval + 1);
  return `${randomInteger}s`;
}

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = generateRandomPercent();
  star.style.left = generateRandomPercent();
  star.style.animationDelay = generateRadomDelay();
  return star;
}

function renderStars(amount = 15) {
  const container = document.getElementById("container2");
  const placeholdersArray = Array(amount).fill("star_placeholder");
  const starsArray = placeholdersArray.map((starPlacholder, index) =>
    createStar()
  );
  container.append(...starsArray);
}

renderStars();


// 별 랜덤생성
let randomStar = function() {
  let winW = window.innerWidth;
  let winH = window.innerHeight;
  let wrap = document.createElement('div');
  wrap.id = "container1";
  document.body.prepend(wrap);
  for ( i=0; i<10; i++ ) {
    circle = document.createElement('div')
    circle.id = "star"+i
    wrap.appendChild(circle)
    circle.style.left = Math.floor(Math.random()*winW) + "px"
    circle.style.top = Math.floor(Math.random()*winH) + "px"
    size = Math.ceil(Math.random()*10)+50
    circle.style.width = size+ "px";
    circle.style.height = size + "px";
    // circle.style.animationDuration = (Math.ceil(Math.random()*10)+10) + "s";
  }
}
randomStar();
window.addEventListener('resize', _.debounce(function() {
  randomStar();

}, 100))
