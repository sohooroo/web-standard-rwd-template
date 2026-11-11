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