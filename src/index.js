document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector('#create-task-form')

  form.addEventListener('submit', function(e) {
    
    e.preventDefault()
      // grab the task the user input 
    const newTask = document.querySelector('#new-task-description')
    // add the value in a variable 
    let  inputValue = newTask.value
    
    // add it on the DOM  with lis

    const newLi = document.createElement('Li')
    
    // with li now we can add the input value 
    newLi.innerText = inputValue
    
    
    // this input value need to be added to ul so we need to grab ul 
    const ulParent = document.querySelector('ul#tasks')
    
    // now we can the new li in side the paren ul in the dom 
    ulParent.append(newLi)
    

    //once is added set where yo get the user  input the value back to nothing 
    newTask.value =''
    



  
  })


});


// Stretch Deliverables:
// If you finish early, try to implement one or more of the following:

// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM