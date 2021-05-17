import axios from 'axios';


export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUsers = () => {
    return (dispatch) => {
        // signifie que je veux mes posts en ordre décroissants
        return axios.get('http://localhost:3000/users?_sort=id&_order=desc')
        .then((res) => {dispatch({ type: GET_USER, payload: res.data })
    })
    .catch((err) => console.log(err))
    }
}

// liker des posts  

export const addUserLike = (data) => {
    return (dispatch) => {
        return axios({
            method: "put", 
            url: `http://localhost:3000/posts/${data.id}`,
            data: {...data},
        })
        .then((res) => {dispatch({ type: ADD_USER_LIKE, payload: {...data} })
    })
    .catch((err) => console.log(err))
    }
}