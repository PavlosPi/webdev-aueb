function toggleButtonHandler(){

    let toggleMenu = document.querySelector('.toggle-menu');
    let slider = document.querySelector('.slider')
    let main = document.querySelector('.main')
    let footer = document.querySelector('.footer')
    let langs = document.querySelector('.langs')
    let langs2 = document.querySelector('.langs2')
    let second = document.querySelector('.second')
    let langs3 = document.querySelector('.langs3')
    let toggleMenuDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display')


    if(toggleMenuDisplayStatus == "none"){
        toggleMenu.style.display = "block";
        slider.style.display = "none";
        main.style.display = "none";
        footer.style.display = "none";
        langs.style.display = "none";
        langs2.style.display = "none";
        second.style.display = "none";
        langs3.style.display = "none";
        
      
    } else{
        toggleMenu.style.display = "none";
        slider.style.display = "block";
        main.style.display = "block";
        footer.style.display = "flex";
        langs.style.display = "block";
        langs2.style.display = "block";
        second.style.display = "block";
        langs3.style.display = "block";
       

    }
}
