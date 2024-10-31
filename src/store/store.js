import { createStore } from "redux";

const store = createStore((state, action) => {
    switch(action.type) {
        case "ADD_USER":
            return {
                ...state,
                usersData: [...state.usersData, action.payload],
            };
        case "IsSeeMoreOpen":
            return {
                ...state,
                usersData: state.usersData.map((user)=> user.id === action.payload ?{...user, isSeeMore: !user.isSeeMore }: {...user, isSeeMore: false})
            }
        case "USER_DELETE":
            return {
                ...state,
                usersData: state.usersData.filter((user)=> user.id !== action.payload),
            }
        case "USER_CHANGE":
            return {
                ...state,
                usersData: state.usersData.map((user)=> user.id === action.payload.id ?{...action.payload} : {...user}),
            }
        case "FILTER_BY_AGE":
            return {
                ...state,
                usersData: [...state.usersData].sort((a, b) => a.age - b.age)
            }
        case "FILTER_BY_NAME":
            return {
                ...state,
                usersData: [...state.usersData].sort((a, b) => {
                    if (a.firstName > b.firstName) return 1;
                    if (a.firstName < b.firstName) return -1;
                    return 0;
                  })
            }
        case "FILTER_BY_DEFAULT":
            return {
                ...state,
                usersData: [...state.usersData].sort((a, b) => a.id - b.id)
            }
        case "SEARCH_SUBMIT":
            return {
                ...state,
                searchTerm: `${action.payload}`
            }
        default:
        return {
            ...state
        }
    }
}, {
    usersData: [],
    searchTerm: '',
})
export default store; 