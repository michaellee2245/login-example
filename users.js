const memoryStore = [{
    
    "id":1,
    "firstName": "Mike",
    "email": "mike@gmail.com",
    "password": "1234"
    },
    {
    "id":2,
    "firstName": "Jimmy",
    "email": "jimmy@gmail.com",
    "password": "5678"
    },
    {
    "id":3,
    "firstName": "Bethany",
    "email": "bethany@gmail.com",
    "password": "9897"
    }]

function authenticateUser(email, password){
        const user = memoryStore.find(user => user.email === email);
        if(!user) return null;
        if(user.password === password) return user.id;
        return null;
    }
function findById (id){
        const user = memoryStore.find(user => Number(user.id) === Number(id));
        if(!user) return null;
        return user;
    }

 module.exports = {
     authenticateUser,
     findById
 }