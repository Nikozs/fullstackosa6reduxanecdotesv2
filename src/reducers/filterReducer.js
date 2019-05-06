const initialState = ''

const filterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'HAKU':
            return action.teksti

        default:
            return state
    }
}

export const filterText = (teksti) => {
    return {
        type: 'HAKU',
        teksti

    }
}


export default filterReducer