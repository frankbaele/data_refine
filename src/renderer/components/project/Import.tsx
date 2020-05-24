import React from "react";
import {connect} from "react-redux";


const Import = () => {

    return (
        <div>
            <div>{}</div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        project: state.project
    }
}

export default connect(mapStateToProps)(Import)