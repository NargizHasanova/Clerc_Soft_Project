var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,

    },
});

//======================= swiper2 

if (window.innerWidth == 768) {
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} else if (window.innerWidth > 768) {
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} else if (window.innerWidth < 768) {
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
// ====================== slider3

if (window.innerWidth == 768) {
    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} else if (window.innerWidth > 768) {
    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} else if (window.innerWidth < 768) {
    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}


const collection = [{
        id: 1,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-1.jpg",
        title: "Blow Planter",
        bestseller: true,
        newArrivals: false,
        topRated: false
    },
    {
        id: 2,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-2.jpg",
        title: "Vondom Tall",
        bestseller: true,
        newArrivals: true,
        topRated: false
    },
    {
        id: 3,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-3.jpg",
        title: "Lounge Chair",
        bestseller: true,
        newArrivals: false,
        topRated: false
    },
    {
        id: 4,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-4.jpg",
        title: "Rolf Round",
        bestseller: true,
        newArrivals: false,
        topRated: true
    },
    {
        id: 5,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-5.jpg",
        title: "Go Gray",
        bestseller: true,
        newArrivals: false,
        topRated: false
    },
    {
        id: 6,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-6.jpg",
        title: "Palm Chair",
        bestseller: true,
        newArrivals: false,
        topRated: false
    },
    {
        id: 7,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-7.jpg",
        title: "Moma Planter",
        bestseller: true,
        newArrivals: false,
        topRated: false
    },
    {
        id: 8,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-8.jpg",
        title: "Foglia",
        bestseller: true,
        newArrivals: false,
        topRated: true
    },
    {
        id: 9,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-9.jpg",
        title: "Ibiza Chair",
        bestseller: false,
        newArrivals: true,
        topRated: true
    },
    {
        id: 10,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-10.jpg",
        title: "File Cabinet",
        bestseller: false,
        newArrivals: true,
        topRated: true
    },
    {
        id: 11,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-11.jpg",
        title: "Jam Office Chair",
        bestseller: false,
        newArrivals: true,
        topRated: false
    },
    {
        id: 12,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-13.jpg",
        title: "Nardi Bianco",
        bestseller: false,
        newArrivals: true,
        topRated: true
    },
    {
        id: 13,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-14.jpg",
        title: "Chrimy Lights",
        bestseller: false,
        newArrivals: true,
        topRated: false
    },
    {
        id: 14,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-15.jpg",
        title: "Laptop Table",
        bestseller: false,
        newArrivals: true,
        topRated: false
    },
    {
        id: 15,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-16.jpg",
        title: "Voxel Armchair",
        bestseller: false,
        newArrivals: true,
        topRated: true
    },
    {
        id: 16,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-12.jpg",
        title: "Bells Side Table",
        bestseller: false,
        newArrivals: false,
        topRated: true
    },
    {
        id: 17,
        img: "http://ledthanhdat.vn/html/cleric/assets/images/product-item-8.jpg",
        title: "Foglia",
        bestseller: false,
        newArrivals: false,
        topRated: true
    },
]

let categories = document.querySelectorAll(".category")
let menu = document.querySelector(".map__content-btm")
let categoriesContainer = document.querySelector(".map__title")

let bestseller = collection.filter(item => item.bestseller === true)
let newArrivals = collection.filter(item => item.newArrivals === true)
let topRated = collection.filter(item => item.topRated === true)

showCollection(bestseller)


function showCollection(data) {
    let res = data.map(item => {
        return (
            `<div class="map-item">
                <img src=${item.img} alt="" />
                <div class="img-desc">
                    <div class="map-counter">
                        <div class="counter">
                            <span>00</span>
                            <span>DAYS</span>
                        </div>
                        <div class="counter">
                            <span>00</span>
                            <span>HRS</span>
                        </div>
                        <div class="counter">
                            <span>00</span>
                            <span>MINS</span>
                        </div>
                        <div class="counter">
                            <span>00</span>
                            <span>SECS</span>
                        </div>
                    </div>
                    <h5>${item.title}</h5>
                    <div class="rate">
                        <div class="star">
                            <i class="fas fa-star filled-star"></i>
                            <i class="fas fa-star filled-star"></i>
                            <i class="fas fa-star filled-star"></i>
                            <i class="fal fa-star empty-star"></i>
                            <i class="fal fa-star empty-star"></i>
                        </div>
                        <div class="star-num">(3)</div>
                    </div>
                    <div class="discount">
                        <del>$65</del>
                        <span>$45</span>
                    </div>
                    <div class="new-icon">New</div>
                    <div class="map-layer">
                        <div class="heart"><i class="fal fa-heart"></i></div>
                        <div class="search"><i class="fal fa-search"></i></div>
                        <div class="shop"><i class="fal fa-shopping-bag"></i></div>
                    </div>
                </div>
            </div>`
        )
    })
    menu.innerHTML = res.join("")
}

categories.forEach(e => {
    e.addEventListener("click", f => {
        if (f.target.innerHTML === "BESTSELLER") {
            showCollection(bestseller)
        } else if (f.target.innerHTML === "NEW ARRIVALS") {
            showCollection(newArrivals)
        } else if (f.target.innerHTML === "TOP RATED") {
            showCollection(topRated)
        }
    })
})


categoriesContainer.addEventListener("click", e => {
    categories.forEach(f => {
        f.classList.remove("map-title-active")
    })
    e.target.classList.add("map-title-active")
})

//======================== btmToTop js ==================
let toTop = document.querySelector(".btmToTop")
var rootElement = document.documentElement

window.onscroll = function() {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
        toTop.style.display = "flex";
    } else {
        toTop.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

//============================== mobile navigation 
let tabletBar = document.querySelector(".tablet-bar")
let mobMenu = document.querySelector(".mobile-menu")
let fixedElement = document.querySelector(".top-fixed")
let closeBtn = document.querySelector(".close-btn")
let subMenu = document.querySelector(".categories-menu")
let subMenuAcc = document.querySelector(".access-right")
let subMenuHome = document.querySelector(".home-right")
let subMenuShop = document.querySelector(".shop-right")
    //let subMenuPage = document.querySelector(".page-right")
let subMenuBlog = document.querySelector(".blog-right")
let goBackBtn = document.querySelector(".left-menu-btn")
let menuTitle = document.querySelector(".menu-title")
let accList = document.querySelector(".acc-categories")
let homeList = document.querySelector(".home-categories")
let shopList = document.querySelector(".shop-categories")
let blogList = document.querySelector(".blogs-categories")
let bottom = document.querySelector(".bottom")
let newTabletBar = document.querySelector(".bar425")

//===============tablet menu open
tabletBar.addEventListener("click", a => {
    mobMenu.style.width = "40%"
    fixedElement.style.width = "40%"
    fixedElement.style.visibility = "visible"
})
newTabletBar.addEventListener("click", a => {
    mobMenu.style.width = "79%"
    fixedElement.style.width = "79%"
    fixedElement.style.visibility = "visible"
})
closeBtn.addEventListener("click", a => {
    mobMenu.style.width = "0"
    fixedElement.style.width = "0"
    fixedElement.style.visibility = "hidden"
    accList.style.visibility = "hidden"
    homeList.style.visibility = "hidden"
    shopList.style.visibility = "hidden"
    blogList.style.visibility = "hidden"
})
goBackBtn.addEventListener("click", a => {
        menuTitle.innerHTML = "MAIN MENU"
        accList.style.visibility = "hidden"
        homeList.style.visibility = "hidden"
        shopList.style.visibility = "hidden"
        blogList.style.visibility = "hidden"
        accList.style.left = "22%"
        homeList.style.left = "22%"
        shopList.style.left = "22%"
        blogList.style.left = "22%"
        bottom.style.visibility = "visible"
        goBackBtn.style.display = "none"
        accList.style.opacity = "0"
        homeList.style.opacity = "0"
        shopList.style.opacity = "0"
        blogList.style.opacity = "0"
    })
    //================================


subMenuAcc.addEventListener("click", a => {
    goBackBtn.style.display = "block"
    menuTitle.innerHTML = "ACCESORIES"
    accList.style.visibility = "visible"
    accList.style.left = "0"
    bottom.style.visibility = "hidden"
    accList.style.opacity = "1"
        // accList.style.display = "block"
})


subMenuHome.addEventListener("click", a => {
    goBackBtn.style.display = "block"
    menuTitle.innerHTML = "HOME"
    homeList.style.visibility = "visible"
    homeList.style.left = "0"
    bottom.style.visibility = "hidden"
    homeList.style.opacity = "1"
})
subMenuShop.addEventListener("click", a => {
    goBackBtn.style.display = "block"
    menuTitle.innerHTML = "SHOP"
    shopList.style.visibility = "visible"
    shopList.style.left = "0"
    bottom.style.visibility = "hidden"
    shopList.style.opacity = "1"
})
subMenuBlog.addEventListener("click", a => {
    goBackBtn.style.display = "block"
    menuTitle.innerHTML = "BLOG"
    blogList.style.visibility = "visible"
    blogList.style.left = "0"
    bottom.style.visibility = "hidden"
    blogList.style.opacity = "1"
})


//=========================== animation js
let upEl = document.querySelectorAll(".swiper-slide .slider__top-left--desc .up-anim")
let rightEl = document.querySelectorAll(".swiper-slide .slider__top-left--desc .new-price")
let leftEl = document.querySelectorAll(".swiper-slide .slider__top-left--desc .left-anim")
let downEl = document.querySelectorAll(".swiper-slide .slider__top-left--desc .down-anim")
let pagin = document.querySelector(".mySwiper .swiper-pagination")
let paginationBtn = document.querySelectorAll(".swiper-pagination-bullet")

window.setTimeout(foo, 2300);

function foo() {

    upEl.forEach(element => {
        element.classList.remove("up-anim")

    });
    rightEl.forEach(element => {
        element.classList.remove("right-anim")

    });
    leftEl.forEach(element => {
        element.classList.remove("left-anim")

    });
    downEl.forEach(element => {
        element.classList.remove("down-anim")

    });
}
pagin.addEventListener("click", e => {
        upEl.forEach(element => {
            element.classList.add("up-anim")
        });
        rightEl.forEach(element => {
            element.classList.add("right-anim")
        });
        leftEl.forEach(element => {
            element.classList.add("left-anim")
        });
        downEl.forEach(element => {
            element.classList.add("down-anim")
        });
        window.setTimeout(foo, 2000);
    })
    //===================================================
let searchBox = document.querySelector(".search-box")
let searchBtn425 = document.querySelector(".search425")
let searchCloseBtn = document.querySelector(".search-close-btn")

searchBtn425.addEventListener("click", e => {
    searchBox.style.top = "100px"
    searchBox.style.visibility = "visible"
    searchBox.style.opacity = 1
})

searchCloseBtn.addEventListener("click", e => {
    searchBox.style.top = "150px"
    searchBox.style.visibility = "hidden"
    searchBox.style.opacity = 0
})