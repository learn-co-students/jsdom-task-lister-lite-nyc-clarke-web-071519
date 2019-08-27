// As a user, I should be able to type a task into the input field. - DONE!!

// As a user, I should be able to click some form of a submit button.
let box = document.querySelector('input')

let button = document.querySelector('input:last-of-type')

let ul = document.querySelector('ul')



button.addEventListener('click', function(event){
    event.preventDefault()
    // console.log("yay")
    let newli = document.createElement('li')
    let deletebox = document.createElement('button')
    deletebox.innerHTML = "X"
    deletebox.addEventListener('click', function(e){
        e.target.parentNode.remove()
    })
    ul.appendChild(newli)
    ul.appendChild(deletebox)
    newli.innerText = box.value
    
})





// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.