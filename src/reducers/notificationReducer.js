
const initialState = ''

const notificationReducer = (store = initialState, action) => {
    switch (action.type) {
        case 'NOTIFYVOTE':
            return action.data.content;

        case 'NOTIFYNEW':
            return "Added anecdote '" + action.data.content + "'";

        case 'CLEAR':
            return '';

        default:
    }
    return store
}

export const voteNotification = (content) => {
    return {
        type: 'NOTIFYVOTE',
        data: {
            content
        }
    }
}

export const newanecdoteNotification = (content) => {
    return {
        type: 'NOTIFYNEW',
        data: {
            content
        }
    }
}


export const thunkNotify = (content, time) => {
    return async (dispatch) => {
        dispatch({
            type: 'NOTIFYVOTE',
            data: {
                content
            }
        })
        setTimeout(() => {
            dispatch({
                type: 'CLEAR'
            })
        }, time)
    }

}

export const clearNotification = () => {
    return {
        type: 'CLEAR'
    }
}

export default notificationReducer