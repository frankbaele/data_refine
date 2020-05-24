import React from "react";
import {connect} from "react-redux";


const Detail = () => {

    return (
        <div>
            <div>Detail</div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        project: state.project
    }
}

export default connect(mapStateToProps)(Detail)