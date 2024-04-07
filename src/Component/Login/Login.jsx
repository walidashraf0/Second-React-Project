import React, { useState } from 'react';
import Style from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { FallingLines } from 'react-loader-spinner';


export default function Login() {

    let navigate = useNavigate()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function loginSubmit(values) {
        setLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
            .catch((err) => {
                setError(err.response.data.message)
                setLoading(false)
            })
        if (data.message == 'success') {
            setLoading(false)
            navigate('/')
        }
    }

    let validationSchema = Yup.object({
        email: Yup.string().email('Email is Required!').required('Email is Required!'),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password Invalid').required('Password is Required!'),
    })

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        }, validationSchema, onSubmit: loginSubmit
    })

    return <>
        <div className="w-75 mx-auto p-4">
            <h2>Login</h2>
            {error ? <div className="alert alert-danger py-2">{error}</div> : ''}
            <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor="email">Email</label>
                <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className='form-control mb-2' type="email" id='email' />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-2">{formik.errors.email}</div> : ''}

                <label htmlFor="password">Password</label>
                <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} className='form-control mb-2' type="password" id='password' />
                {formik.errors.password && formik.touched.password ? <div className="alert alert-danger py-2">{formik.errors.password}</div> : ''}

                {!loading ? <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Login</button> : <button type='button' className='btn bg-main text-white'>
                    <FallingLines
                        color="#fff"
                        width="40"
                        height='20'
                        visible={true}
                        ariaLabel="falling-circles-loading"
                    />
                </button>}

            </form>
        </div>
    </>
}
