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

// var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
let storedInput = localStorage.getItem('inbox');

let i = 0;
//display stored tasks
if (storedInput) {
  let toDoObj = JSON.parse(storedInput)
  // console.log(toDoObj[0]);

  // console.log(toDoObj[1]);
  // projects[0].tasks.push(toDoObj);
  delete projects[0].tasks;
  projects[0].tasks = toDoObj;

  // console.log(toDoObj.length);
  toDoObj.forEach(obj => {
    // console.log(obj.length)
    // let i = 1
    showTask(obj.title, obj.description, obj.duedate, obj.priority, i + 1);
    i++
  })
} else {
  localStorage.setItem('inbox', []);
}


let currentInboxToDo = -1;
let currentProject = 0;

submit_btn.addEventListener('click', () => {
  projects.push(newProject(text_input.value));
  currentProject++;
  // console.log(projects[currentProject].title);
  // console.log(currentProject);
  // console.log(currentProject);
  // showProjects(projects[currentProject - 1].title, currentProject - 1);
  // console.log(projects.length);
  if (projects.length === 1) {
    showProjects(projects[currentProject].title, currentProject);
    localStorage.setItem(projects[currentProject].title, '[]');
  } else {
    showProjects(projects[projects.length - 1].title, projects.length - 1);
    localStorage.setItem(projects[projects.length - 1].title, '[]');    
  } 

})
for (let i = 0; i < localStorage.length; i++) {
  // console.log(localStorage.getItem(localStorage.key(i)));
  // console.log(localStorage.key(i));
  let storedProjects = localStorage.getItem(localStorage.key(i));
  // console.log(localStorage.key(i))
  if (storedProjects) {
    if (localStorage.key(i) === 'inbox') {
    } else {
      showProjects(localStorage.key(i), i)
      projects.push(newProject(localStorage.key(i)));
      currentProject = i + 1;
  
      if (localStorage.getItem(localStorage.key(i)) ===  '[]') {
      } else {
        let projectToDo = JSON.parse(localStorage.getItem(localStorage.key(i)))
        // console.log(projectToDo);

        delete projects[i].tasks;
        projects[i].tasks = projectToDo;

        // projects[i].tasks.push(projectToDo);
      }
    }

    // console.log(localStorage.key(i));
    // console.log(localStorage.getItem(localStorage.key(i)));
    // delete projects[i].tasks;
    // projects[i].tasks = projectToDo;
    // console.log(i);
    // console.log(projects[i])
    // console.log(projectToDo[0]);

    // console.log(projectToDo);
    // console.log(i);
  }
}

  // let storedProjects = localStorage.getItem(projects[currentProject].title);
  


// let storedProjects = localStorage.getItem();



const task_btn = document.querySelector('.taskBtn');
const submit2_btn = document.querySelector('.submitBtn2');

const title_input = document.getElementById('title');
const description_input = document.getElementById('description');
const dueDate_input = document.getElementById('dueDate');
const priority_input = document.getElementById('priority');
let project_h1 = document.querySelector('.currentProject');

submit2_btn.addEventListener('click', () => {

  if (project_h1.textContent === 'Inbox') {
    if (storedInput) {
      projects[0].tasks.push(newToDo(title_input.value, description_input.value, 
        dueDate_input.value, priority_input.value));

        // console.log(projects[0].tasks.length - 1);
        
        // console.log(lsToDoLength);
        // console.log(JSON.parse(storedInput).length)
        // console.log(projects[0].tasks[JSON.parse(storedInput).length - 1]);
        // currentInboxToDo++;
        let toDo = projects[0].tasks[projects[0].tasks.length - 1];
        showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority, projects[0].tasks.length);
          
        localStorage.setItem('inbox', JSON.stringify(projects[0].tasks));


    } else {
      projects[0].tasks.push(newToDo(title_input.value, description_input.value, 
        dueDate_input.value, priority_input.value));


        currentInboxToDo++;
        let toDo = projects[0].tasks[currentInboxToDo];
        showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority, currentInboxToDo + 1);
      }
      
      
      localStorage.setItem('inbox', JSON.stringify(projects[0].tasks));

    // console.log(currentInboxToDo);


      
  } else {      
    // if (storedProjects) {
    //   console.log('hola');
    // } else {  
    // }
    let indexOfProject = parseInt(currentProject_div.textContent.charAt(0));
    // console.log(indexOfProject);
    projects[indexOfProject].tasks.push(newToDo(title_input.value, description_input.value, dueDate_input.value, priority_input.value));
    
    // console.log(indexOfProject);

    projects[indexOfProject].currentTask++
    // console.log(projects[indexOfProject].tasks[projects[indexOfProject].currentTask])
    // console.log(projects[indexOfProject].currentTask)
    let toDo = projects[indexOfProject].tasks[projects[indexOfProject].currentTask]
    // let toDo = projects[indexOfProject].tasks;
    console.log(toDo);
    showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority, projects[indexOfProject].currentTask);
    localStorage.setItem(projects[indexOfProject].title, JSON.stringify(projects[indexOfProject].tasks));
    
  }
})

document.getElementById('test').addEventListener('click', () => {
  console.log(projects);
  // console.log(projects[0]);
  // console.log(projects[0].tasks);


  // console.log(Object.entries(projects[0].tasks[0]));
  // console.log(JSON.parse(storedInput));
  // console.log(JSON.parse(storedInput));
  // console.log(_lsTotal);
})

const inbox_li = document.querySelector('.inbox')

inbox_li.addEventListener('click', () => {
  let x = 0;
  currentProject_div.textContent = 'Inbox';
  deleteTasks();
  projects[0].tasks.forEach(task => {
    // showTask(task[x].title, task[x].description, task[x].duedate, task[x].priority, x + 1);
    showTask(task.title, task.description, task.duedate, task.priority, x + 1);
    x++;
    })
})

export { projects, project_h1, currentInboxToDo }