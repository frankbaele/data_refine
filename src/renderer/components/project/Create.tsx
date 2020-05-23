/* eslint-disable */
import React, {useEffect} from "react";
import {useFormik} from 'formik';
import {connect} from "react-redux";
import {remote} from 'electron';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.file) {
        errors.file = 'Required';
    }
    return errors;
};


function Create({createProject}) {

    const formik = useFormik({
        initialValues: {
            name: '',
            file: '',
        },
        validate,
        onSubmit: values => {
            createProject(values)
        },
    });

    function selectFile() {
        remote.dialog.showOpenDialog(
            {
                filters: [
                    {name: 'csv', extensions: ['csv']}
                ]
            }).then(result => {
            if (!result.canceled) {
                formik.setFieldValue('file', result.filePaths[0]);
            }


        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="flex h-screen ">
            <form className="center-form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Name:</label>
                    <input
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div className="file-upload">
                    <div className="select">
                        <button onClick={selectFile}>Select file</button>
                    </div>
                    <div className="path">{formik.values.file}</div>

                </div>

                <button className="btn" type="submit">Submit</button>
            </form>
        </div>

    );
}

const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        createProject: (payload: {}) => dispatch({type: 'project.create', payload}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create)