import axios from 'axios';

export function authenticateUser(email, password){
    return axios.get(`http://localhost:8080/authenticate-user?email=${email}&password=${password}`)
    .then((response) => {
        const userId = response.data.id;
        return userId;
    })
    
}
export function findById (id){
    return axios.get(`http://localhost:8080/user/${id}`)
    .then((response) => {
        const user = response.data;
        return user;
    })
    
}