import React from 'react';
import Style from './Register.module.css';
import { useFormik } from 'formik';

export default function Register() {

    function registerSubmit(values) {
        console.log(values);
    }

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        }, onSubmit: registerSubmit
    })
    
    return <>
    <div className="w-75 mx-auto p-4">
        <h2>Register Now</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} className='form-control mb-2' type="text" id='name' />

            <label htmlFor="email">Email</label>
            <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className='form-control mb-2' type="email" id='email' />

            <label htmlFor="password">Password</label>
            <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} className='form-control mb-2' type="password" id='password' />

            <label htmlFor="rePassword">Confirm Password</label>
            <input onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} className='form-control mb-2' type="password" id='rePassword' />

            <label htmlFor="phone">Phone</label>
            <input onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} className='form-control mb-2' type="tel" id='phone' />

            <button type='submit' className='btn bg-main text-white'>Register</button>
        </form>
    </div>
    </>
}
