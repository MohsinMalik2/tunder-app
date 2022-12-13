import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://tunder-backend-stack.herokuapp.com'
})

export default instance;