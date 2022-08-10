document.querySelector('.burger').addEventListener('click', activate_burger);

document.querySelector('.burger').addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    activate_burger();
  }
});

document.querySelector('.burger__button').addEventListener('click', deactivate_burger);
  document.querySelector('#cross').addEventListener('keydown', function(event) {
    if ((event.code === 'Enter') || (event.code === 'Space') || (event.code === 'Backspace')) {
      deactivate_burger();
    }
  });

function  activate_burger() {
  document.querySelector('.burger__list').style.left = '0';
  document.querySelector('.header').style.overflow = 'visible';
  document.querySelector('.burger').setAttribute('tabindex', '-1');
  document.querySelectorAll('.burger__link').forEach(function(el) {
    el.setAttribute('tabindex', '0');
  });
  document.querySelector('.burger__button').setAttribute('tabindex', '0');
}

function  deactivate_burger() {
  document.querySelector('.burger__list').style.left = '-300%';
  document.querySelectorAll('.burger__link').forEach(function(el) {
    el.setAttribute('tabindex', '-1');
  });
  document.querySelector('.burger__button').setAttribute('tabindex', '-1');
  document.querySelector('.burger').setAttribute('tabindex', '0');
  document.querySelector('.header').style.overflow = 'hidden';
}
