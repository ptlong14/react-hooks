import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Fetch_success':
            return {
                loading: false,
                post: action.payLoad,
                error: ''
            }
        case 'Fetch_error':
            return {
                loading: false,
                post: {},
                error: "Something went wrong"
            }
        default:
            return state

    }
}
function FetchDataP2() {
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'Fetch_success', payLoad: res.data })
            })
            .catch(err => {
                dispatch({ type: 'Fetch_error', })
            })
    }, [])

    return (
        <div>
            <h1>useReducer</h1>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default FetchDataP2
