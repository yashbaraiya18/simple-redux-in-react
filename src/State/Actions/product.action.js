// import React from "react"


function number_add(data) {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: data
        })
    }
}
function number_minus(data) {
    return (dispatch) => {
        dispatch({
            type: "MINUS",
            payload: data
        })
    }
}

export {
    number_add,
    number_minus
}