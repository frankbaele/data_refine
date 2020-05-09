import {store} from "../store";
import React from 'react'
function createProject() {
    console.log('tes')
    store.dispatch({
        type: 'project.create',
        payload: {
            name: 'test'
        }
    })
}
const App = () => {
    return (
        <h1>
            <button onClick={createProject}>Add project</button>
        </h1>
    )
}
export default App
