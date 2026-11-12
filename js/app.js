// 별 보기 가이드 탭
const tabs = document.querySelectorAll(".shop-tabs li");
const cards = document.querySelectorAll(".shop-content li");

function showGuide(index) {
    // 1. 전부 on 빼기
    tabs.forEach((tab) => tab.classList.remove("on"));
    cards.forEach((card) => card.classList.remove("on"));
    // 2. 선택한 번호에만 on 붙이기
    tabs[index].classList.add("on");
    cards[index].classList.add("on");
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showGuide(index));
});
cards.forEach((card, index) => {
    card.addEventListener("click", () => showGuide(index));
});




const body = document.querySelector('body')
const fixedTopBtn = document.querySelector('.fixedTop');

// 1. 상단으로 부드럽게 이동
fixedTopBtn.addEventListener('click', function(e) {
    e.preventDefault(); // a 태그의 기본 링크 이동 방지
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 2. 스크롤 위치에 따라 body에 클래스 제어
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
        document.body.classList.add('scroll');
    } else {
        document.body.classList.remove('scroll');
    }
});