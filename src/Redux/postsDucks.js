import Axios from 'axios'

const initial = {
    posts: []
}

const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

export default function reducer (state = initial, action) {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {...state, posts: action.payload}
        default:
            return state
    }
}

export const getPosts = () => async (dispatch, getState) => {
    const response = await Axios.get('http://www.orlybeigelproductions.com/app/wp-json/wp/v2/posts')
    try {
        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
    }

}