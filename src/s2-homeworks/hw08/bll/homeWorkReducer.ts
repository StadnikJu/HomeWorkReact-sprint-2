import {UserType} from '../HW8'

type ActionType = | { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType):UserType[] => { 
    switch (action.type) {
        case 'sort': { 
            if(action.payload === 'up') {
                const newState = state.sort((a, b) => {
                    if(a.name > b.name) {
                        return 1
                    } else {
                        return -1;
                    }
                });
                return newState;
            } else {
                const newState = state.sort((a, b) => {
                    if(a.name < b.name) {
                        return 1
                    } else {
                        return -1;
                    }
                });
                return newState;
            }   
        }
        case 'check': {
            const newState = state.filter(u => u.age >= action.payload);
            newState.sort((a, b) => b.age - a.age)
            return newState;
        }
        default:
            return state
    }
}
