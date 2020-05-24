import React, {useEffect} from "react";
import {connect} from "react-redux";


const Import = (props: any) => {


    useEffect(() => {
        if (props.project.file) {
            console.log(props.project)
            props.loadRows({
                type: 'csv',
                options: {delimiter: '\t', columns: true, relax: true},
                file: props.project.file,
                rows: 10
            });
        }

        // eslint-disable-next-line
    }, [props.project]);
    let table = [];
    if (Array.isArray(props.rows)) {
        const columns = []
        Object.keys(props.rows[0]).forEach((key: string, index: number) => {
            columns.push(<th key={index}>{key}</th>)
        })
        const records = props.rows.map((item, index) => {
                const cells = [];
                Object.keys(item).forEach(function (key, index) {
                    cells.push(<td key={index}>{item[key]}</td>)
                })
                return (
                    <tr key={index}>
                        {cells}
                    </tr>
                )
            }
        );
        table = (
            <table>
                <thead>
                <tr>
                    {columns}
                </tr>
                </thead>
                <tbody>
                {records}
                </tbody>
            </table>
        )
    }
    return (
        <div>
            {table}
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        rows: state.fileRows,
        project: state.project
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        loadRows: (payload: any) => dispatch({type: 'file.rows.load', payload}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Import)