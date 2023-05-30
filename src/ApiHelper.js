import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

console.log(localStorage)

class DispensaApi{
// token = ''


    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
    
        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${localStorage.token}` };
        const params = (method === "get")
            ? data
            : {};
    
        try {
            console.log(headers)
          return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }
      }




// ####################################
// User Api Function
// ####################################

static async createUser(data){
console.log({data:data})
try {
    let res = await this.request('users', data, 'post')
    console.log(res)
    return res
} catch (error) {
    console.log(error)
    // return 'Error'
}


}


static async login(username, password){

console.log([username, password])
try {
    let res = await this.request(`auth/token`, {username:username, password:password}, 'post')
    console.log(res)
    return res
} catch (error) {
    console.log(error)
}

}

// Tie up the usernames.

static async getUser(username){
    console.log('inside api helper and getusers')

    try {
        let res = await this.request(`users/${username}`)
        console.log(res)
        // return res.users
    } catch (err) {
        console.log(err)
    }
}

static async getUsers(){
    console.log('inside api helper and getusers')

    try {
        let res = await this.request('users')
        console.log(res)
        return res.users
    } catch (err) {
        console.log(err)
    }


    
}

updateUser(){

}

deleteUser(){

}





// ####################################
// Ingredient Api Function
// ####################################

static async getIngredient(username, ingredient){
console.log({username:username, ingredients:ingredient})
    try {
        let res = await this.request(`ingredients/${username}/${ingredient}`)
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }

}

static async getAllIngredients(username){
console.log(username)
try {
    console.log({localStorage:localStorage.token})
    let res = await this.request(`ingredients/${username}`)
console.log(res)
return res
} catch (error) {
    console.log(error)
}

}

static async createIngredient(data){
    console.log(data)
try {
    let res = await this.request('ingredients', data, 'post')
console.log(res)
} catch (err) {
    console.log(err)
}

}

static async createAllIngredients(user, data){
console.log(data)
try {
    let res = await this.request('ingredients/full-recipe', {ingredients:data, username:user.username}, 'post')
    console.log(res)
    return data
} catch (error) {
    console.log(error)
}
}


removeIngredient(){

}

static async updateIngredient(id, data){
    console.log({id:id})
    console.log({data:data})
   try {
    let res = await this.request('ingredients', {id:id, available_amount:data}, 'patch' )
    console.log(res)

    return res
   } catch (error) {
    console.log(error)
   }
}

}
DispensaApi.token = ''


export default DispensaApi