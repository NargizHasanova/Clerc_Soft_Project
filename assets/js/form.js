const submitBtn = document.querySelector(".submit-form-btn")
const title = document.querySelector("#validationDefault01")
const text = document.querySelector("#form-textarea")
const img = document.querySelector("#validationDefault03")
const id = Date.now()
const date = new Date()

let newImgResult = null
img.addEventListener("change", (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = function() {
        newImgResult = reader.result
    }
    reader.readAsDataURL(file)
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    try {
        if (title.value !== "" && text.value !== "" && newImgResult !== null) {
            axios.post("https://test-003-69327-default-rtdb.firebaseio.com/news.json", {
                    id,
                    title: title.value,
                    text: text.value,
                    img: newImgResult,
                    date
                })
                .then(res => console.log(res))
        }
    } catch (error) {
        console.log(error)
    } finally {
        title.value = ""
        text.value = ""
    }

})




// submitBtn.addEventListener("click", () => {
//     fetch('https://test-003-69327-default-rtdb.firebaseio.com/news.json', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },

//         body: JSON.stringify({
//             title: title.value,
//             img: newImgResult,
//             text: text.value,
//             date: date
//         })
//     })
//         .then(res => res.json())
//         .then(res => console.log(res));
// })