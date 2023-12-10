const header= document.querySelector('header')
header.classList.toggle('sticky',window.scrolly >0)
 let menu=document.querySelector('#menu-icon');
 let navbar=doucment.querySelector('.navabr');
  menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  }
  window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');

  }
