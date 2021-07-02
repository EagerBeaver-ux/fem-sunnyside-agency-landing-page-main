const menu_icon = (document.body.querySelector(".hamburger"));
const menu = (document.body.querySelector('nav'));
const creative_text = document.querySelector('h3');
let click_status = false;
let mediaQuery = window.matchMedia('(max-width: 999px)');
menu_icon.addEventListener('click',function(e){
if(mediaQuery.matches){
   e.stopPropagation();
   click_status=!click_status;
   if(click_status){
   menu.style.display = "grid";
   creative_text.style.display="none";
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: 'smooth',
   });
}
else {
   menu.style.display = "none";
   creative_text.style.display="block";
   }
}  

document.addEventListener('click',function(e){
if(mediaQuery.matches){
   e.stopPropagation();
   console.log(click_status);
   click_status=false;
   menu.style.display = "none";
   creative_text.style.display="block";
}
});   

});

mediaQuery.addEventListener("change",function(e){
   e.stopPropagation();
   if(!mediaQuery.matches){
   menu.style.display = "block";
   creative_text.style.display="block";
   }
   if(mediaQuery.matches){
   menu.style.display = "none";
   creative_text.style.display="block";
   }
   click_status=false;
});
