const initialState = ''

let includingResult=false
export const changeNumberReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_NUMBER') {
        if(action.payload.number==='='){
            includingResult=true
           return state+'='+eval(state)
        }
        if (action.payload.number) {
            if(includingResult===true){
                let re = /=\d+/
                includingResult=false
                return (state.match(re).toString().substr(1) + action.payload.number.toString())
            }else{
                return state +action.payload.number.toString()
            }
        } else {
            return ''
        }
    }
    else {
        return state
    }
}


let includingSign = false;

export const resultReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_NUMBER') {
        if (!action.payload.number) {
            return ''
        }
        
        if (isNaN(action.payload.number)===false) {
            
            if (includingSign === false) {
                return state + action.payload.number
            } else if (includingSign === true) {
                includingSign = false;
                state = ''
                return state + action.payload.number
            }
        }
        if(action.payload.number ==='='){
            includingSign=true
            return state
        }

        if (action.payload.number === '+' || '-' || '*' || '/') {
            includingSign = true
            return action.payload.number
        }
        
    } else {
        return state
    }
}

