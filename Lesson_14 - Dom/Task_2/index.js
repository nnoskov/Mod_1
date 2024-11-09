const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    }
];

function createTaskItem (task) {
    const taskItem = document.createElement('div');
    taskItem.className = "task-item";
    taskItem.dataset.dataTaskId = task.id;
    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = "task-item__main-container";
    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = "task-item__main-content";
    const cbxForm = document.createElement('form');
    cbxForm.className = "checkbox-form";
    const cbxFormCbx = document.createElement('input');
    cbxFormCbx.className = "checkbox-form__checkbox";
    cbxFormCbx.type = "checkbox";
    cbxFormCbx.id = `task-${task.id}`;
    const lblFor = document.createElement('label');
    lblFor.htmlFor = `task-${task.id}`;
    const spnItemText = document.createElement('span');
    spnItemText.className = "task-item__text";
    spnItemText.innerText = task.text;
    const btnDelete = document.createElement('button');
    btnDelete.className = "task-item__delete-button default-button delete-button";
    btnDelete.innerText = "Удалить";

    cbxForm.append(cbxFormCbx);
    cbxForm.append(lblFor);
    taskItemMainContent.append(cbxForm);
    taskItemMainContent.append(spnItemText);
    taskItemMainContainer.append(taskItemMainContent);
    taskItemMainContainer.append(btnDelete);
    taskItem.append(taskItemMainContainer);

    return taskItem;
}

const taskList = document.querySelector('.tasks-list');

tasks.forEach(task => {
    taskList.append(createTaskItem(task));
});



