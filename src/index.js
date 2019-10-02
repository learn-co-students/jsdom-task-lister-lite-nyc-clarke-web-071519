document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // As a user, I should be able to type a task into the input field.
  
  // As a user, I should be able to click some form of a submit button.
  
  // As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

  // Find the form.
  // Add eventListener to the forms submit button.
  // Create New Todo List li item
  // Fnd the ul
  // Append the new submit to the ul

  let form = document.querySelector("form");
  let ul = document.querySelector('ul#tasks')

  form.addEventListener("submit",function(event) {
    event.preventDefault();
    let li = document.createElement("li");
    let input = document.querySelector("input#new-task-description").value;
    let button = `<button data-description="${input}">X</button>`
    li.innerHTML = `${input} ${button}`
    let select = document.createElement("select");
    let options = ["High", "Medium", "Low"];
    let selectOptions = options.forEach(function(priority) {
      let optionTag = document.createElement("option");
      optionTag.textContent = priority;
      optionTag.value = priority;

      select.appendChild(optionTag);
    })
    li.appendChild(select);
    ul.appendChild(li);
  })
  
  ul.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON"){
      let completedTask = event.target.parentElement;
      ul.removeChild(completedTask);
    }
  })

});
