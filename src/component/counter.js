import React, { useReducer } from 'react'


const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function HookCounter() {
    const [count, dispatcher] = useReducer(reducer, initialState)


    return ( <
        div style = { topStyle } >
        <
        h1 style = {
            { textAlign: "center", paddingTop: "40px", fontSize: "5rem" }
        } > { count } < /h1> <
        div style = {
            { display: "flex" }
        } >
        <
        button style = {
            { width: "200px", height: "100px" }
        }
        onClick = {
            () => dispatcher('increment')
        } >
        + < /button> <
        button style = {
            { width: "200px", height: "100px" }
        }
        onClick = {
            () => dispatcher('reset')
        } >
        x < /button> <
        button style = {
            { width: "200px", height: "100px" }
        }
        onClick = {
            () => dispatcher('decrement')
        } >
        - < /button>  < /
        div > < /
        div >
    )
}

const topStyle = {
    width: "60%",
    margin: "0 auto",
    height: "50vh",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    border: "2px solid black"
}

export default HookCounter