const todolist=[ {name:'make dinner',
duedate:'2023-24-06'}, { name:'wash clothes',
duedate:'2023-24-06'}];
rendertodolist();
function rendertodolist(){
let todolisthtml=' ';
for( let i=0;i<todolist.length;i++){
   const todoobject =todolist[i];
   const name=todoobject.name;
   const duedate=todoobject.duedate;
   //const {name,duedate} =todoobject;
   const html=
   `<div> ${name}</div>
   <div>${duedate} </div> 
   <button onclick="
   todolist.splice(${i},1);
   rendertodolist();" class="delete-todo-button">delete </button>`;
   todolisthtml+=html;
}

console.log(todolisthtml);
document.querySelector('.js-todo-list').innerHTML=todolisthtml;
}
 
function addtodo(){
 const inputelement= document.querySelector('.js-name-input');
  const name=inputelement.value;
  const datainputelement= document.querySelector('.js-due-date-input');
  const duedate=datainputelement.value;
 
  todolist.push({name,duedate});
  console.log(todolist);
  inputelement.value='';
  rendertodolist();

}