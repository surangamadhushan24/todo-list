

let todoList=[{
    name:'wash dishes',
    dueDate:'2023-10-28'
}, {
    name: 'make lunch',
    dueDate:'2023-10-28'
}];
function renderTodoList(){
    let todoHTML= '';
    todoList.forEach((todoObject,index)=>{
       
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="deletebtn" onclick="todoList.splice(${index},1);
            renderTodoList();
            ">Delete</button>            
        `
        todoHTML+= html;
    });  
    
    
    // for(let i=0; i<todoList.length; i++){
    //     const todoObject = todoList[i];
    //     // const name=todoObject.name; 
    //     // const dueDate=todoObject.dueDate;
    //     // destructuring
    //     const {name, dueDate} = todoObject;
    //     const html = `
    //         <div>${name}</div>
    //         <div>${dueDate}</div>
    //         <button class="deletebtn" onclick="todoList.splice(${i},1);
    //         renderTodoList();
    //         ">Delete</button>            
    //     `
    //     todoHTML+= html;
    // }
    console.log(todoHTML);
    document.querySelector('.js-todo-list').innerHTML=todoHTML;

}
function funAdd(){
    const name= document.querySelector(".inputToDo").value;
    const dueDate = document.querySelector(".date").value;
    todoList.push({
        name,
        dueDate

    });
    console.log(todoList);
    document.querySelector(".inputToDo").value = '';
    document.querySelector(".date").value = '';
    renderTodoList();

}




