// As a user, I should be able to type a task into the input field. - DONE!!

// As a user, I should be able to click some form of a submit button.
// let box = document.querySelector('input')
// let button = document.querySelector('input:last-of-type')

const form = document.querySelector('#create-task-form')
const ul = document.querySelector('ul')

ul.addEventListener('click', handleClick)
form.addEventListener('submit', function(event){
    event.preventDefault()
    
    let inputValue = event.target["new-task-description"].value
    let newli = document.createElement('li')
    newli.innerHTML = `
    ${inputValue}<button id='deleteBtn'>X</button><button id='likeBtn'>♥</button>
    `
    
    ul.appendChild(newli)
})


function handleClick(event) {
    if(event.target.id === 'deleteBtn'){
        event.target.parentNode.remove()
    }else if (event.target.id === 'likeBtn'){
        console.log('love')
    }
}
// -------------ARROW FUNCTION (same as above)
// const handleClick = (event) => {
//     if(event.target.id === 'deleteBtn'){
//         event.target.parentNode.remove()
//     }else if (event.target.id === 'likeBtn'){
//         console.log('love')
//     }
// }

// button.addEventListener('click', function(event){
//     event.preventDefault()
//     // console.log("yay")
//     let newli = document.createElement('li')
//     newli.innerHTML = ""
//     // let deletebox = document.createElement('button')
//     // deletebox.innerHTML = "X"
//     // deletebox.addEventListener('click', function(e){
//     //     e.target.parentNode.remove()
//     // })
//     debugger
//     newli.appendChild(deletebox)
//     ul.appendChild(newli)
    
//     newli.innerText = box.value
    
// })





// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.