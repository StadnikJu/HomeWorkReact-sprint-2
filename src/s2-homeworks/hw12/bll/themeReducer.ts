const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChengeThemeAction): typeof initState => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export type ChengeThemeAction = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): ChengeThemeAction => ({ type: 'SET_THEME_ID', id })
