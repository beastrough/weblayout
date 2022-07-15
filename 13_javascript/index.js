window.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
        btn.classList.remove('tabs-nav__btn--active')});
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });

  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.burger__list').style.left = '0';
    document.querySelector('.header').style.overflow = 'visible';
  });

  document.querySelector('.burger__icon').addEventListener('click', function() {
    document.querySelector('.burger__list').style.left = '-300%';
  });

  document.querySelector('#search__activator').addEventListener('click', function() {
    document.querySelector('.header').querySelectorAll('.menu__item:not(:last-child)').forEach(function(item) {
      item.style.opacity = '0.3';
      item.style.pointerEvents = 'none';
    });
    if ($(document).width() > 1064) {
      document.querySelector('.search').style.right = '75px';
    }

    else if (($(document).width() > 510) && ($(document).width() <= 1064)) {
      document.querySelector('.search').style.right = '50px';
    }

    else if ($(document).width() <= 510) {
      document.querySelector('.search').style.right = '0';
    }

    this.style.opacity = '0';

    this.style.pointerEvents = 'none';

    document.querySelector('.search').style.opacity = '1';

    document.querySelector('.search').style.transition = 'opacity 0.3s, right 0.5s';

    document.querySelectorAll('.search__icon').forEach(function(icon) {
      icon.style.outlineWidth = '0';
    });
    this.querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
      icon.style.fill = '#ff9900';
    });
    this.querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
      icon.style.stroke = '#ff9900';
    });
  });

  document.querySelector('#search__deactivator').addEventListener('click', function() {
    document.querySelector('.header').querySelectorAll('.menu__item:not(:last-child)').forEach(function(item) {
      item.style.opacity = '1';
      item.style.pointerEvents = 'auto';
    });

    document.querySelector('.search').style.transition = 'opacity 0.3s, right 0.5s';

    document.querySelector('.search').style.opacity = '0';

    document.querySelector('.search').style.right = '300%';

    document.querySelector('#search__activator').style.opacity = '1';

    document.querySelector('#search__activator').style.pointerEvents = 'auto';
  });

  document.querySelector('#search__deactivator').addEventListener('mousedown', function() {
    this.querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
      icon.style.fill = '#333';
    });
    this.querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
      icon.style.stroke = '#333';
    });
  });

  document.querySelector('#search__deactivator').addEventListener('mouseup', function() {
    document.querySelector('#search__activator').querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
      icon.style.fill = '';
    });
    document.querySelector('#search__activator').querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
      icon.style.stroke = '';
    });
    this.querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
      icon.style.fill = '';
    });
    this.querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
      icon.style.stroke = '';
    });
  });

  const pos = document.querySelector('.swiper-pagination');
  pos.style.bottom = '30px';

  const margin_add = document.querySelectorAll('.swiper-pagination-bullet:not(:last-child)');
  margin_add.forEach(function(el) {
    el.style.margin = '0';
    el.style.marginRight = '20px'
  });

  const margin_zero = document.querySelector('.swiper-pagination-bullet:last-child');
  margin_zero.style.margin = '0';
})
