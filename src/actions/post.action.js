import axios from 'axios';


export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";

// Lire les posts  

export const getPosts = () => {
    return (dispatch) => {
        // signifie que je veux mes posts en ordre décroissants
        return axios.get('http://localhost:3000/posts?_sort=id&_order=desc')
        .then((res) => {dispatch({ type: GET_POSTS, payload: res.data })
    })
    .catch((err) => console.log(err))
    }
}

// ajouter des posts  

export const addPost = (data) => {
    return (dispatch) => {
        return axios.post('http://localhost:3000/posts', data)
        .then((res) => {dispatch({ type: ADD_POST, payload: data })
    })
    .catch((err) => console.log(err))
    }
}

// modifier des posts  

export const editPost = (data) => {
    return (dispatch) => {
        return axios({
            method: "put", 
            url: `http://localhost:3000/posts/${data.id}`,
            data: {...data},
        })
        .then((res) => {dispatch({ type: EDIT_POST, payload: {...data} })
    })
    .catch((err) => console.log(err))
    }
}

// supprimer des posts  

export const deletePost = (postId) => {
    return (dispatch) => {
        return axios({
            method: "delete", 
            url: `http://localhost:3000/posts/${postId}`,
        })
        .then((res) => {dispatch({ type: DELETE_POST, payload: {postId} })
    })
    .catch((err) => console.log(err))
    }
}

// liker des posts  

export const addLike = (data) => {
    return (dispatch) => {
        return axios({
            method: "put", 
            url: `http://localhost:3000/posts/${data.id}`,
            data: {...data},
        })
        .then((res) => {dispatch({ type: ADD_LIKE, payload: {...data} })
    })
    .catch((err) => console.log(err))
    }
}