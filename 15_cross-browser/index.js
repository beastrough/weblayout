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

  document.querySelector('.burger').addEventListener('click', activate_burger);

  document.querySelector('.burger').addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
      activate_burger();
    }
  });

  document.querySelector('.burger__icon').addEventListener('click', deactivate_burger);
  document.querySelector('#cross').addEventListener('keydown', function(event) {
    if ((event.code === 'Enter') || (event.code === 'Space') || (event.code === 'Backspace')) {
      deactivate_burger();
    }
  });

  document.querySelector('#search__activator').addEventListener('click', search__activator);

  document.querySelector('#search__activator').addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
      search__activator();
    }
  });

  document.querySelector('#search__deactivator').addEventListener('click', search__deactivator);

  document.querySelector('#search__deactivator').addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
      search__deactivator();
    }
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

  document.querySelector('.burger').addEventListener('click', function() {
    this.setAttribute('tabindex', '-1');
    document.querySelectorAll('.burger__link').forEach(function(el) {
      el.setAttribute('tabindex', '0');
    });
  });

  document.querySelectorAll('.ui-accordion-header').forEach(function(elem) {
    elem.addEventListener('focus', function() {
      this.style.outlineWidth = "0";
      this.parentNode.style.borderColor = "#ff9900";
      this.parentNode.nextElementSibling.style.borderTopColor = "#ff9900";
    });
  });

  document.querySelectorAll('.ui-accordion-header').forEach(function(elem) {
    elem.addEventListener('blur', function() {
      this.parentNode.style.borderColor = "#cacaca";
      this.parentNode.nextElementSibling.style.borderTopColor = "#cacaca";
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

function  deactivate_burger() {
  document.querySelector('.burger__list').style.left = '-300%';
  document.querySelectorAll('.burger__link').forEach(function(el) {
    el.setAttribute('tabindex', '-1');
  });
  document.querySelector('.burger__button').setAttribute('tabindex', '-1');
  document.querySelector('.burger').setAttribute('tabindex', '0');
  document.querySelector('.header').style.overflow = 'hidden';
}

function  activate_burger() {
  document.querySelector('.burger__list').style.left = '0';
  document.querySelector('.header').style.overflow = 'visible';
  document.querySelector('.burger').setAttribute('tabindex', '-1');
  document.querySelectorAll('.burger__link').forEach(function(el) {
    el.setAttribute('tabindex', '0');
  });
  document.querySelector('.burger__button').setAttribute('tabindex', '0');
}

function search__activator() {
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

  document.querySelector('#search__activator').style.opacity = '0';

  document.querySelector('#search__activator').style.pointerEvents = 'none';

  document.querySelector('.search').style.opacity = '1';

  document.querySelector('.search').style.transition = 'opacity 0.3s, right 0.5s';

  document.querySelector('#search__activator').setAttribute('tabindex', '-1');

  document.querySelector('#search__deactivator').setAttribute('tabindex', '0');

  document.querySelector('#site_search').setAttribute('tabindex', '0');

  document.querySelectorAll('.search__icon').forEach(function(icon) {
    icon.style.outlineWidth = '0';
  });
  this.querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
    icon.style.fill = '#ff9900';
  });
  this.querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
    icon.style.stroke = '#ff9900';
  });
}

function search__deactivator() {
  document.querySelector('.header').querySelectorAll('.menu__item:not(:last-child)').forEach(function(item) {
    item.style.opacity = '1';
    item.style.pointerEvents = 'auto';
  });

  document.querySelector('.search').style.transition = 'opacity 0.3s, right 0.5s';

  document.querySelector('.search').style.opacity = '0';

  document.querySelector('.search').style.right = '300%';

  document.querySelector('#search__activator').style.opacity = '1';

  document.querySelector('#search__activator').style.pointerEvents = 'auto';

  document.querySelector('#search__deactivator').setAttribute('tabindex', '-1');

  document.querySelector('#site_search').setAttribute('tabindex', '-1');

  document.querySelector('#search__activator').setAttribute('tabindex', '0');

  document.querySelector('#search__activator').querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
    icon.style.fill = '';
  });
  document.querySelector('#search__activator').querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
    icon.style.stroke = '';
  });
  document.querySelector('#search__deactivator').querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
    icon.style.fill = '';
  });
  document.querySelector('#search__deactivator').querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
    icon.style.stroke = '';
  });

  }
