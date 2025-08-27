import axios from "axios";


async function getCurrentUser(){

    let token = localStorage.getItem('token')

    if (!token){
        return false;
    }

    try {

        console.log(`Bearer ${token}`)
        const response = await axios.get('https://dummyjson.com/auth/me', {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
        )

        return response.data
    }catch (e) {
        console.log(e)
        return false
    }

}

export default getCurrentUser;