const search = document.querySelector('.header__search-inner')
const body = document.querySelector('body')

search.addEventListener('click', (e) => {
  e.stopPropagation();
  search.classList.add('header__search-inner--active')
})

body.addEventListener('click', () => {
  search.classList.remove('header__search-inner--active')
})