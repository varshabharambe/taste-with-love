let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');


  section.forEach(sec =>{
    let top=window.scrollY;
    let height=sec.offsetHeight;
    let offset=sec.offsetTop - 150;
   // let id=sec.getAttribute('id'); //id=id attribute of every section


    if(top => offset && top < offset + height){
      navlinks.forEach(links =>{
        links.classList.remove('active');
        //document.querySelector("header .navbar a[href='+id+']").classList.add('active');
      });
    };
    
  });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  
  

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 60,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop:true,
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function FadeOut(){
    setInterval(loader,3000);
  }

  window.onload=FadeOut;

  