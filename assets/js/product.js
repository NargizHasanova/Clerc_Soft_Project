//==================================
let colorList = document.querySelector(".color-list")
let colorListLi = document.querySelectorAll(".color-list li")

colorList.addEventListener("click", e => {
    colorListLi.forEach(a => {
        console.log(a.style.border)
        a.style.border = "1px solid #eeeeee"
    })
    console.log(e.target.style.border)
    e.target.style.border = "3px solid #5A607A"
})

//===============product slider 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

//====== product count ====
let plus = document.querySelector(".product-count .plus")
let minus = document.querySelector(".product-count .minus")
let amount = document.querySelector(".product-count span")
let count = 1

plus.addEventListener("click", a => {
    count++
    amount.innerHTML = count
})
minus.addEventListener("click", a => {
    if (count === 1) {
        return
    }
    count--
    amount.innerHTML = count
})