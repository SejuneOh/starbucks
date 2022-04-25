const searchEl = document.querySelector('.search');
// 자손관계를 js에서도 지정할 수 있다.
const searchInputEl = searchEl.querySelector('input')


searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  // 가상 클래스 추가
  searchEl.classList.add('focused')
  // 속성을 추가 할 수 있다.
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 포커스가 해제 되었을 때
searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '');
});

const badges = document.querySelector('header .badges');

// 스크롤 이벤트 추가
// lodash lib 사용하기
window.addEventListener('scroll', _.throttle(function () {


  if (window.scrollY > 500) {
    // 배지 숨기기
    // badges.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션); 옵션은 대부분 객체를 사용한다.
    gsap.to(badges, {
      duration: .6,
      opacity: 0,
      display: 'none'
    });

  } else {
    //배지 보이기
    // badges.style.display = 'block';
    gsap.to(badges, {
      opacity: 1,
      duration: .6,
      display: 'block'

    });
  }

  // scroll 0.3 단위로 부화를 줘서 많이 실행하는 것을 자제한다.
}, 300));
