//============== product color ==================================
let colorList = document.querySelector(".color-list")
let colorListLi = document.querySelectorAll(".color-list li")

colorList.addEventListener("click", e => {
    colorListLi.forEach(a => {
        console.log(a.style.border)
        a.style.border = "1px solid #eeeeee"
    })
    if (e.target.classList == "color-list") {
        return
    }
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

var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

//========= product desc,info,review ==============
let cat = document.querySelectorAll(".info__top .title")
let productAllInfo = document.querySelector(".info__top")
let description = document.querySelector(".description")
let information = document.querySelector(".information")
let reviews = document.querySelector(".reviews")

productAllInfo.addEventListener("click", a => {
    cat.forEach(e => {
        e.classList.remove("map-title-active")
    })
    a.target.classList.add("map-title-active")
    if (a.target.innerHTML == "DESCRIPTIONS") {
        description.style.display = "block"
        information.style.display = "none"
        reviews.style.display = "none"
    } else if (a.target.innerHTML == "INFORMATION") {
        description.style.display = "none"
        information.style.display = "block"
        reviews.style.display = "none"
    } else if (a.target.innerHTML == "REVIEWS") {
        description.style.display = "none"
        information.style.display = "none"
        reviews.style.display = "block"
    }
})