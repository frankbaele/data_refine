import React from 'react'
import path from 'path'
import datauri from 'datauri/sync'
import {NavLink} from "react-router-dom";
const pathToAsset = path.join(__static, '/logo-full.png')
const file = datauri(pathToAsset);
const App = () => {

    return (
        <div className="flex h-screen ">
            <div className="m-auto max-w-md rounded">
                <img className="w-full" src={file.content}></img>
                <div className="space-y-3">
                    <NavLink className="btn" to="/project/create">
                        Create a new project
                    </NavLink>
                    <NavLink className="btn" to="/project/open">
                        Open existing project
                    </NavLink>
                </div>

            </div>
        </div>
    )
}
export default App
