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

