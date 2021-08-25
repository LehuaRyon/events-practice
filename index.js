// console.log("Hi")

// 1. create a const = html new Comment
// 2. prevent default on submit

const newComment = document.getElementById('new-comment')
// console.log(newComment)
const submitBtn = document.getElementById('submit-button')

const commentsContainer = document.getElementById('comments-container')

const form = document.getElementById('comment-form')

let buttonEvent = (event) => {
    event.preventDefault()
    if (newComment.value !== "") {
        commentsContainer.innerHTML += `<div class="comment">${newComment.value}</div>`
        newComment.value = ""
    }
}

form.addEventListener('click', buttonEvent)