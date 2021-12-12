const newsCover = document.querySelector(".news-cover")

fetch('https://test-003-69327-default-rtdb.firebaseio.com/news.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        latestNews(data)
    });

function latestNews(data) {
    let allData = data.map(item => {
        const { id, img, title, text, data } = item
        return (
            `
                <div key=${id} class="swiper-slide news-item">
                    <img src=${img} />
                    <div class="news-desc">
                        <span>${data}</span>
                        <h2>${title}</h2>
                        <p>${text}</p>
                        <div class="shop-btn"><button>Read more</button></div>
                    </div>
                </div>
            `
        )
    })
    newsCover.innerHTML = allData.join("")
}


