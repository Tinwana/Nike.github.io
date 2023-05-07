document.addEventListener('DOMContentLoaded',function(){
    var viTriSlide = 0;
    const autoSlide = document.querySelectorAll('.slide-text__content');
    const navBtn = document.querySelector('.fa-bars');
    const navBarContent = document.querySelector('.navbar__content');
    let boolBtn = false;
    function autoShowSlide(){
    var i; 
            for (i = 0; i< autoSlide.length;i++) {
                    autoSlide[i].style.display="none";
            }
            viTriSlide++;
            if(viTriSlide>autoSlide.length-1){
                    viTriSlide=0;
            }
            autoSlide[viTriSlide].style.display="block";
            }  
            setInterval(autoShowSlide,4000);
navBtn.onclick = ()=>{
        if(boolBtn){
                navBarContent.style.display = 'none';
                boolBtn = false;
        }
        else{
                navBarContent.style.display = 'flex';
                boolBtn = true;

        }
}

            
    })
    