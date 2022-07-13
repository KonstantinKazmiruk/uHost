var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButton = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

//console.dir(backdrop);
//console.dir(selectPlanButton);
//console.dir(backdrop.style['background-image']);

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    //modal.style.display = "block";
    //backdrop.style.display = "block";
    modal.classList.add('open');
    backdrop.style.display = 'block';
    backdrop.classList.add('open');
    setTimeout(function() {
      backdrop.classList.add('open');
    }, 200)
    
  });
}

backdrop.addEventListener("click", function () {
  //mobileNav.style.display = "none";
  mobileNav.classList.remove('open');
  closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", function () {
  //mobileNav.style.display = "block";
  //backdrop.style.display = "block";
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(function() {
    backdrop.classList.add('open');
  }, 200);
});


function closeModal() {
  //backdrop.style.display = "none";
  //modal.style.display = "none";
  if(modal){
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(function() {
    backdrop.style.display = 'none';
  }, 200);
}

ctaButton.addEventListener('animationstart', function(event){
  console.log('animation started', event);
});
ctaButton.addEventListener('animationitaration', function(event){
  console.log('animation itaration', event);
});
ctaButton.addEventListener('animationend', function(event){
  console.log('animation ended', event);
});
