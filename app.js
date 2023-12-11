//Using class queryselector for htnl elements
const title =  document.querySelector('.title');
const description =  document.querySelector('.description');
const tbody =  document.querySelector('.tbody');
const addBtn =  document.querySelector('.addBtn');
// const completed= document.querySelector('.completed');
// const one = document.querySelector('.one')
// const two = document.querySelector('.two')


//Func to Add tile and decripiion to an array
const addTask = () => {

    const myObj = {
        title: title.value,
        description: description.value
    }
    const myArr = []
    

    if (localStorage.getItem('todo') === null) {
        myArr.push(myObj)
        localStorage.setItem('todo',JSON.stringify(myArr))
       // console.log(localStorage.getItem('todo'))
        
    }else {
        let oldTodo =  JSON.parse(localStorage.getItem('todo'))
        oldTodo.push(myObj)
        localStorage.setItem('todo', JSON.stringify(oldTodo))
    }
    //location.reload()
    displayTask()
}


//addBtn.addEventListener('click', completedTask)
addBtn.addEventListener('click', addTask)


const displayTask = () => {
    let oldTodo =  JSON.parse(localStorage.getItem('todo'));
    tbody.innerHTML = ''
    
    oldTodo.map((todo,index)=>{

        tbody.innerHTML += 
            `
            <tr>
                <td class = 'one'>${index + 1}</td>
                <td class = 'one'>${todo.title}</td>
                <td class = 'two'>${todo.description}</td>
                <td>
                    <input type="checkbox" 
                            class="completed" 
                            value="completed"
                    >
                </td>
                <td>
                    <button> Delete </button>
                    <button> Edit </button>
                </td>
            </tr>
                `
            })
            
            
            
        }
        
        displayTask()

    const deleteTask = (indexToDelete) => {
        let oldTodo = JSON.parse(localStorage.getItem('todo'))

        oldTodo.filter((element,index, array )=>{
            return console.log(indexToDelete)
        })



    }
    deleteTask(10)
                
                