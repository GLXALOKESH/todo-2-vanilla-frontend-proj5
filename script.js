let tlist = document.getElementById("ls-cont")

function createtask(heading) {
    let task = document.createElement('div')
    tlist.append(task);
    task.classList = "task"
    let check = document.createElement("img")
    check.src = "unchecked.png"
    check.classList = "check"
    task.append(check);
    check.draggable = "false";
    let taskname = document.createElement("p")
    task.append(taskname)
    taskname.classList = "taskname"
    taskname.innerText = heading
    let remove = document.createElement("img")
    remove.src = "cancle.svg"
    task.append(remove)
    remove.classList = "remove"
    remove.draggable = "false"

    remove.onclick =(()=>{
        task.remove()
    })
    let isChecked = false; 
    check.onclick = () => {
        isChecked = !isChecked; 
        check.src = isChecked ? "checked.png" : "unchecked.png"; 
        taskname.style.textDecoration = isChecked ? "line-through" : "none"; 
        taskname.style.color = isChecked ? "rgba(0, 0, 0, 0.486)" : "black"; 

    };
    }



let invalidTimeout;
let addbtn = document.getElementById("addbtn");
addbtn.onclick = (() => {
    let inpt = document.getElementById("tskname");
    let text = inpt.value;
    if (text.trim() == "") {
        let box = document.getElementById("searchbox");
        box.classList.add("invalid-box")
        let invalid = document.getElementById("invalid-name")
        invalid.style.display = "inline-block"
        invalid.classList.add("shake")
        clearTimeout(invalidTimeout)
        invalidTimeout = setTimeout(() => {
            invalid.style.display = "none";
            box.classList.remove("invalid-box");
            invalid.classList.remove("shake");
        }, 2000);
    }
    else {
        createtask(text)
    }
    inpt.value =  "";
})