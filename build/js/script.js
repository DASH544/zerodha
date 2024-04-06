const menuBtn=document.getElementById("menu-btn");

const initMobileMenu=()=>
{   
    const mobileMenu=document.getElementById("mobile-section-open");
     const toggleMenu=() =>{
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
}
    mobileMenu.addEventListener('mouseout',toggleMenu);
    menuBtn.addEventListener('click',toggleMenu);
   
}
document.addEventListener('DOMContentLoaded',initMobileMenu)