import { newToDo, newProject } from "./app";
import { showProjects, showTask, deleteTasks } from "./UI";
import createModal from "./modal";

const submit_btn = document.querySelector('.submitBtn');
const text_input = document.getElementById('project');
let currentProject_div = document.querySelector('.currentProject');

createModal();

let projects = [
{
  title: 'inbox',
  tasks: []
},
]


let storedInput = localStorage.getItem('0');

if (storedInput) {
  // console.log(JSON.parse(storedInput));
  let toDoObj = JSON.parse(storedInput)
  projects[0].tasks.push(toDoObj);
  // console.log(toDoObj.title);
  showTask(toDoObj.title, toDoObj.description, toDoObj.duedate, toDoObj.priority);
}


let currentInboxToDo = -1;
let currentProject = 0;

submit_btn.addEventListener('click', () => {
  projects.push(newProject(text_input.value));
  currentProject++;
  showProjects(projects[currentProject].title, currentProject);
})


const task_btn = document.querySelector('.taskBtn');
const submit2_btn = document.querySelector('.submitBtn2');

const title_input = document.getElementById('title');
const description_input = document.getElementById('description');
const dueDate_input = document.getElementById('dueDate');
const priority_input = document.getElementById('priority');
let project_h1 = document.querySelector('.currentProject');

submit2_btn.addEventListener('click', () => {

  if (project_h1.textContent === 'Inbox') {
    projects[0].tasks.push(newToDo(title_input.value, description_input.value, 
                         dueDate_input.value, priority_input.value));

    currentInboxToDo++;
    let toDo = projects[0].tasks[currentInboxToDo];
    showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority, currentInboxToDo);
      
    localStorage.setItem(currentInboxToDo, JSON.stringify(toDo));
  } else {

    let indexOfProject = parseInt(currentProject_div.textContent.charAt(0))
    projects[indexOfProject].tasks.push(newToDo(title_input.value, description_input.value, dueDate_input.value, priority_input.value));
  

    projects[indexOfProject].currentTask++

    let toDo = projects[indexOfProject].tasks[projects[indexOfProject].currentTask]
    showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority, projects[indexOfProject].currentTask);

    localStorage.setItem(projects[indexOfProject].currentTask, JSON.stringify(toDo));

  }
})

document.getElementById('test').addEventListener('click', () => {
  console.log(projects);
})

const inbox_li = document.querySelector('.inbox')

inbox_li.addEventListener('click', () => {
  currentProject_div.textContent = 'Inbox';
    deleteTasks();
    projects[0].tasks.forEach(task => {
      showTask(task.title, task.description, task.duedate, task.priority);
      })
})

export { projects, project_h1, currentInboxToDo }