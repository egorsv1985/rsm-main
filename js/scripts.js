const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const showMoreButton = [...document.querySelectorAll('.show-more')];
const showMoreText = [...document.querySelectorAll('.show-more span')];
const showMoreContent = [...document.querySelectorAll('.content')];


const handleScroll = () => {
  if (window.pageYOffset > 200) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
}


burger.addEventListener('click', () => {
  burger.classList.toggle('is-active')
  menu.classList.toggle('active')
});
window.addEventListener("scroll", handleScroll);

showMoreButton.map(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('expanded')
    showMoreContent.map(content => {
      if (showMoreContent.indexOf(content) === showMoreButton.indexOf(button)) {
        content.classList.toggle('opened')
      }
    })

    showMoreText.map(text => {
      if (showMoreText.indexOf(text) === showMoreButton.indexOf(button)) {
        if (text.innerHTML === "Скрыть") {
          text.innerHTML = "Подробнее";
        } else {
          text.innerHTML = "Скрыть";
        }
      }
    })
  })
});

// const tabItem = document.querySelector('.tab__item');
// const open = document.querySelector('.open');
// tabItem.style.display = 'none'


// open.addEventListener("click", function() {

//     if(popup.style.display == 'none')  popup.style.display = 'block';
//     else popup.style.display = 'none'
    
//   });
// const tabItem = document.querySelector('.tabs__item');
// const tabBlock = document.querySelectorAll('.tabs__block');
// tabsItem.addEventListener('click', () => {
//   tabsBlock.style.display = 'block'
// });
