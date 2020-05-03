const list = document.querySelector('.tab-list');
const tabs = document.querySelectorAll('.tab');

function onClick(e) {
  const itemActive = document.querySelector('.tab-list__item--active')
  const tabActive = document.querySelector('.tab--active');

  if (e.target && e.target.matches(".tab-list__item")) {
    const itemPosition = $(e.target).index();
    tabActive.classList.remove('tab--active');
    tabs[itemPosition].classList.add('tab--active');

    itemActive.classList.remove('tab-list__item--active');
    e.target.classList.add('tab-list__item--active');
  }
}

list.addEventListener('click', onClick);
