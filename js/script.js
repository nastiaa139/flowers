document.addEventListener('DOMContentLoaded', function() {
    let burger = document.querySelector('.burger-menu');
    let navContainer = document.querySelector('.containerheader__container');
  
    if (burger && navContainer) {
      burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navContainer.classList.toggle('active');
      });
    }
  });