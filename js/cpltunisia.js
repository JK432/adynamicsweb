document.addEventListener("DOMContentLoaded",()=>{
    let card1 = document.querySelector(".globe-content-card-1")
    let card2 = document.querySelector(".globe-content-card-2")
    let devider = document.querySelector(".devider-line")

    card1.addEventListener("mouseover",()=>{
        card2.style.width ="0px"
        card2.style.opacity ="0"
        devider.style.display="none"
    })
    card1.addEventListener("mouseout",()=>{
        card2.style.width = "100%"
        card2.style.opacity ="1"
        devider.style.display="block"
    })


    card2.addEventListener("mouseover",()=>{
        card1.style.width ="0px"
        card1.style.opacity="0"
        devider.style.display="none"
    })
    card2.addEventListener("mouseout",()=>{
        card1.style.opacity ="1"
        card1.style.width = "100%"
        devider.style.display="block"
    })



    const globalAnimCardSm = document.querySelector(".glob-anim-card-content-sm")
    const globalAnimBtnSm = document.querySelector(".glob-anim-btn-sm")
    
    globalAnimBtnSm.addEventListener("click",()=>{
        globalAnimCardSm.classList.toggle("active")
        globalAnimBtnSm.classList.toggle("active")
    })
})