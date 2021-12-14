const newsCover = document.querySelector(".news-cover")
let newArr = []

axios.get("https://test-003-69327-default-rtdb.firebaseio.com/news.json")
    .then(res => res.data).then(data => {
        for (let key in data) {
            newArr.push(data[key])
        }
        let a = newArr.map(item => {
            return (
                `
                    <div key=${item.id} class="swiper-slide news-item">
                            <img src=${item.img} alt=${item.title} />
                            <div class="news-desc">
                                <span>${item.date}</span>
                                <h2>${item.title}</h2>
                                <p>${item.text}</p>
                                <div class="shop-btn"><button>Read more</button></div>
                            </div>
                    </div>
                `)
        })
        newsCover.innerHTML = a.join("")

    })
    .catch(error => console.log(error))


// fetch('https://test-003-69327-default-rtdb.firebaseio.com/news.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         latestNews(data)
//     });

// function latestNews(data) {
//     let allData = data.map(item => {
//         const { id, img, title, text, date } = item
//         return (
//             `
//                 <div key=${id} class="swiper-slide news-item">
//                     <img src=${img} />
//                     <div class="news-desc">
//                         <span>${date}</span>
//                         <h2>${title}</h2>
//                         <p>${text}</p>
//                         <div class="shop-btn"><button>Read more</button></div>
//                     </div>
//                 </div>
//             `
//         )
//     })
//     newsCover.innerHTML = allData.join(" ")
// }





