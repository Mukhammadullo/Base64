import { get } from "./dom.js";

const API = "http://localhost:3000/data"


// __________________________________
async function getData() {
    try {
        let { data } = await axios.get(API)
        console.log(data);
        get(data)
    } catch (error) {
        console.error(error);
    }
}

// ____________________________________

async function add(newUser) {
    try {
        let { data } = await axios.post(API, newUser)
    } catch (error) {
        console.error(error);
    }
}

// edit_____________________________
async function editUser(id, elem) {
    try {
        let { data } = await axios.put(`${API}/${id}`, elem)
        getData()
    } catch (error) {
        console.error(error);
    }
}


// del________________________________________________
async function delUser(id) {
    try {
        let { data } = await axios.delete(`${API}/${id}`)
        getData()
    } catch (error) {
        console.error(error);
    }
}

export { getData, add, editUser,delUser }