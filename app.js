//Using class queryselector for htnl elements
const title =  document.querySelector('.title');
const description =  document.querySelector('.description');
const addBtn =  document.querySelector('.addBtn');


//Func to Add tile and decripiion to an array
const addTask = () => {
   const myObj = {
        title: title.value,
        description: description.value
    }

    const myArr = []
    myArr.push(myObj)

    return addToLocalstaorage(myArr)

}

const addToLocalstaorage = (info) => {
  

}


addBtn.addEventListener('click', addTask)


