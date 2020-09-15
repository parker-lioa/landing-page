const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click',()=>{
    console.log('clicked');
    nav.classList.toggle('nav-active');
  });
}

const app = ()=>{
  navSlide();
};

app();
