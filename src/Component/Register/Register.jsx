import React, { useState } from 'react';
import Style from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { FallingLines } from 'react-loader-spinner';


export default function Register() {

    let navigate = useNavigate()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function registerSubmit(values) {
        setLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
            .catch((err) => {
                setError(err.response.data.message)
                setLoading(false)
            })
        if (data.message == 'success') {
            setLoading(false)
            navigate('/login')
        }
    }

    // function validate (values) {

    //     let errors = {}
    //     // validate name input
    //     if (!values.name) {
    //         errors.name = 'Name is Required!'
    //     }
    //     else if (values.name.length < 3) {
    //         errors.name = 'Name Must be Greater than 3 character'
    //     }
    //     else if (values.name.length > 15) {
    //         errors.name = 'Name Must be Less than 15 character'
    //     }

    //     // validate email input
    //     if (!values.email) {
    //         errors.email = 'Email is Required!'
    //     }
    //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Email Invalid'
    //     }

    //     // validate password input
    //     if (!values.password) {
    //         errors.password = 'Password is Required!'
    //     }
    //     else if (!/^[A-Z][a-z0-9]{5,10}$/.test(values.password)) {
    //         errors.password = 'Password Invalid'
    //     }

    //     console.log(errors);

    //     return errors;

    // }

    let validationSchema = Yup.object({
        name: Yup.string().min(3, 'Name Must be Greater than 3 character').max(15, 'Name Must be Less than 15 character').required('Name is Required!'),
        email: Yup.string().email('Email is Required!').required('Email is Required!'),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password Invalid').required('Password is Required!'),
        rePassword: Yup.string().oneOf([Yup.ref('password')], "Password And RePassword Don't Match").required('RePassword is Required!'),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'We need Egyptian Number').required('Phone is Required!'),

    })

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        }, validationSchema, onSubmit: registerSubmit
    })

    return <>
        <div className="w-75 mx-auto p-4">
            <h2>Register Now</h2>
            {error ? <div className="alert alert-danger py-2">{error}</div> : ''}
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} className='form-control mb-2' type="text" id='name' />
                {formik.errors.name && formik.touched.name ? <div className="alert alert-danger py-2">{formik.errors.name}</div> : ''}

                <label htmlFor="email">Email</label>
                <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className='form-control mb-2' type="email" id='email' />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-2">{formik.errors.email}</div> : ''}

                <label htmlFor="password">Password</label>
                <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} className='form-control mb-2' type="password" id='password' />
                {formik.errors.password && formik.touched.password ? <div className="alert alert-danger py-2">{formik.errors.password}</div> : ''}

                <label htmlFor="rePassword">Confirm Password</label>
                <input onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} className='form-control mb-2' type="password" id='rePassword' />
                {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger py-2">{formik.errors.rePassword}</div> : ''}

                <label htmlFor="phone">Phone</label>
                <input onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} className='form-control mb-2' type="tel" id='phone' />
                {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger py-2">{formik.errors.phone}</div> : ''}

                {!loading ? <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Register</button> : <button type='button' className='btn bg-main text-white'>
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
