

let addbtn = document.querySelector('.addbtn')
let deletbtn =  document.querySelector('.deletbtn')

addbtn.addEventListener('click',()=>{
    let inputbox = document.querySelector('.textbar')
    const workBox = document.querySelector('.TaskName')
    const worklist = document.createElement('li')

    let input = inputbox.Value
    worklist.innerText = input
    workBox.appendChild(worklist)
})

deletbtn.addEventListener('click',()=>{
    const delet = document.querySelector('.TaskName')
    delet.lastChild.remove()
})