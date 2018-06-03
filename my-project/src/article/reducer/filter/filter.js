export default function filter(state={from: null, to: null}, action) {
    switch (action.type) {
        case 'FILTER_DATA': return action.range
        default: return state
    }
}