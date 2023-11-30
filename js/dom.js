import { add, editUser } from "./api.js"

let box = document.querySelector(".box")
let form = document.querySelector(".form")
let dialogEdit = document.querySelector(".dialogEdit")
let formEdit = document.querySelector(".formEdit")
let editPho = document.querySelector(".editPho")
let dialogAdd = document.querySelector(".dialogAdd")
let addNew = document.querySelector(".addNew")
addNew.onclick=()=>{
    dialogAdd.showModal()
}

// _____________________________________add

form["file"].onchange = (event) => {
    let file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);

    form.onsubmit = async (event) => {
        event.preventDefault()

        let newUser = {
            fullname: form["fullname"].value,
            phone: form["phone"].value,
            avatar: reader.result
        }
        add(newUser)
    }

}


// ______________________________________________________
// edit


function editFun(element) {
    dialogEdit.showModal()

    editPho.src = element.avatar
    formEdit["nameEdit"].value = element.fullname
    formEdit["phoneEdit"].value = element.phone

    formEdit["fileEdit"].onchange = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        formEdit.onsubmit = (event) => {
            event.preventDefault()
            let newEditUser = {
                fullname: formEdit["nameEdit"].value,
                avatar: reader.result,
                phone: formEdit["phoneEdit"].value,
            }
            editUser(element.id, newEditUser)
            dialogEdit.close()
        }
    }

}



// ________________________________________________________
function get(newData) {
    newData.forEach(element => {

        let avatar = document.createElement("img")
        avatar.src = element.avatar
        avatar.classList.add("avatar")

        let fullname = document.createElement("h1")
        fullname.innerHTML = element.fullname

        let phone = document.createElement("h3")
        phone.innerHTML = element.phone


        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            editFun(element)
        }

        let btnDel = document.createElement("button")
        btnDel.innerHTML = "Delete"

        let card = document.createElement("div")
        card.append(avatar, fullname, phone, btnEdit, btnDel)
        card.classList.add("card")

        box.append(card)
    });
}




export { get }