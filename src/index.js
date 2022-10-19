import { newProject } from "./project";
import { newToDo } from "./task";
import { showProjects, showTask, showCurrentProject } from "./UI";
import createModal from "./modal";
// const project_btn = document.querySelector('.projectBtn');
const submit_btn = document.querySelector('.submitBtn');
const text_input = document.getElementById('project');

createModal();
showCurrentProject();

let projects = [
{
  title: 'inbox',
  tasks: []
},
]
let currentToDo = -1;
let currentProject = 0;

submit_btn.addEventListener('click', () => {
  projects.push(newProject(text_input.value));
  currentProject++;
  showProjects(projects[currentProject].title);
})



const task_btn = document.querySelector('.taskBtn');
const submit2_btn = document.querySelector('.submitBtn2');

const title_input = document.getElementById('title');
const description_input = document.getElementById('description');
const dueDate_input = document.getElementById('dueDate');
const priority_input = document.getElementById('priority');

submit2_btn.addEventListener('click', () => {
  projects[0].tasks.push(newToDo(title_input.value, description_input.value, 
                       dueDate_input.value, priority_input.value));

    currentToDo++;
    let toDo = projects[0].tasks[currentToDo]
    showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority)
})

document.getElementById('test').addEventListener('click', () => {
  console.log(projects);
})