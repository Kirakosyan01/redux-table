import { createStore } from "redux";

const store = createStore((state, action) => {
    switch(action.type) {
        case "ADD_USER":
            return {
                ...state,
                usersData: [...state.usersData, action.payload]
            };
        case "IsSeeMoreOpen":
            return {
                ...state,
                usersData: state.usersData.map((user)=> user.id === action.payload ?{...user, isSeeMore: !user.isSeeMore }: {...user, isSeeMore: false})
            }
        case "USER_DELETE":
            return {
                ...state,
                usersData: state.usersData.filter((user)=> user.id !== action.payload)
            }
        default:
        return {
            ...state
        }
    }
}, {
    usersData: []
})
export default store; 