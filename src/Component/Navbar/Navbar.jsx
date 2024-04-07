import React, { useContext } from 'react';
import Style from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { CounterContext } from '../../Context/CounterContext';
import { UserToken } from '../../Context/UserToken';


export default function Navbar() {
    
    let navigate = useNavigate()

    let { count } = useContext(CounterContext); // Inicializamos el context

    let { userToken, setUserToken } = useContext(UserToken);

    function logOut() {
        localStorage.removeItem('userToken');
        setUserToken(null)
        navigate('/login')
    }


    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {userToken ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home {count}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'brands'}>Brands</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'categories'}>Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'cart'}>Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'products'}>Products</Link>
                        </li>
                    </ul> : ''}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex align-items-center">
                            <i className='fab fa-facebook mx-1'></i>
                            <i className='fab fa-youtube mx-1'></i>
                            <i className='fab fa-instagram mx-1'></i>
                            <i className='fab fa-twitter mx-1'></i>
                            <i className='fab fa-tiktok mx-1'></i>
                        </li>
                        {userToken ? <li className="nav-item">
                            <span className="nav-link cursor-pointer" onClick={()=> logOut()}>Logout</span>
                        </li> : <>
                            <li className="nav-item">
                                <Link className="nav-link" to={'login'}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'register'}>Register</Link>
                            </li>
                        </>}
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
