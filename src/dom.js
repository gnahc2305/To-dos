const content_div = document.querySelector('.content');

const showTask = (title, description, duedate, priority) => {
    let row_div = document.createElement('div');
    row_div.classList.add('row');
    content_div.appendChild(row_div);


    let left_div = document.createElement('div');
    left_div.classList.add('left');
    row_div.appendChild(left_div);


    let header_h2 = document.createElement('h2');
    header_h2.textContent = title
    left_div.appendChild(header_h2);

    let description_p = document.createElement('p');
    description_p.textContent = description;
    left_div.appendChild(description_p);


    let right_div = document.createElement('div');
    right_div.classList.add('right');
    row_div.appendChild(right_div);

    let priority_p = document.createElement('p');
    priority_p.textContent =  priority;
    right_div.appendChild(priority_p);

    let date_p = document.createElement('p');
    date_p.textContent = duedate;
    right_div.appendChild(date_p);
}

export { showTask };