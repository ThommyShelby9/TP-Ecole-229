const button=document.querySelectorAll("a[data-name='shop']");
if(button){
    button.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault()
            let parentItem=item.closest(".banner__bottom__left__item")
            let parenItemImage=parentItem.querySelector("img")
            let parenItemImageSrc=parenItemImage.src
            let parentBannerImage = document.getElementById('banImg')
            let bannerImageSrc = parentBannerImage.src
            //parenItemImage.src = bannerImageSrc
            //parentBannerImage.src = parenItemImageSrc
            parenItemImage.setAttribute('src', bannerImageSrc)
            parentBannerImage.setAttribute('src', parenItemImageSrc)
        })
        
    })
}

const menu = document.querySelectorAll(".header__menu__item a")

if(menu){
    console.log(menu)
    menu.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault()
            /* const menuActive = document.querySelector('.header__menu__item a.active')
            menuActive.classList.remove('active') */
            menu.forEach(m => m.classList.remove('active'))
            item.classList.add('active') 
            
        })
    })
}


const search=document.getElementById('search')
const affiche=document.querySelector('.search__modal')
if(search){
    search.addEventListener('focusin', (e)=>{
        e.preventDefault()
        if(!affiche.classList.contains('active')){
            affiche.classList.add('active') 
        }
    })
}

const btnClose=affiche.querySelector('a')
if(btnClose){
    btnClose.addEventListener('click', (e)=>{
        e.preventDefault()
        if(affiche.classList.contains('active')){
            affiche.classList.remove('active')
        }
    })
}

