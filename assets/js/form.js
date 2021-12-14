const submitForm = document.querySelector(".submit-form-btn")
const title = document.querySelector("#validationDefault01").value
const text = document.querySelector("#form-textarea").innerHTML
const img = "img"
const date = "date"
const id = Date.now()

function handleSubmit() {
    //e.preventDefault()
    fetch('https://test-003-69327-default-rtdb.firebaseio.com/news.json', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title: title,
            img: img,
            text: text,
            date: date
        })
    })
        .then(res => res.json())
        .then(res => console.log(res));
}


//handleSubmit()