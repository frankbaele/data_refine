
import React from 'react'
import {NavLink} from "react-router-dom";

const App = () => {
    return (
        <div>
            <h1>
                Data refiner
                <NavLink to="/project/create" activeClassName="selected">
                    To project create
                </NavLink>
            </h1>
        </div>
    )
}
export default App
