import { newProject } from "./project";
import { newToDo } from "./task";

// const project_btn = document.querySelector('.projectBtn');
const submit_btn = document.querySelector('.submitBtn');
const text_input = document.getElementById('project');

let projects = ['Projects',
  {
    title: 'inbox'
  },
]
let toDos = ['Tasks']

submit_btn.addEventListener('click', () => {
    projects.push(newProject(text_input.value));
})



const task_btn = document.querySelector('.taskBtn');
const submit2_btn = document.querySelector('.submitBtn2');

const title_input = document.getElementById('title');
const description_input = document.getElementById('description');
const dueDate_input = document.getElementById('dueDate');
const priority_input = document.getElementById('priority');

submit2_btn.addEventListener('click', () => {
    toDos.push(newToDo(title_input.value, description_input.value, 
                       dueDate_input.value, priority_input.value));
})

document.getElementById('test').addEventListener('click', () => {
  console.log(toDos);
  console.log(projects);
})












//
// modals
//
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}