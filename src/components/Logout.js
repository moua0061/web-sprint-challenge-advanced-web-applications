import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {        

    const {push} = useHistory();

    useEffect(()=>{
        axiosWithAuth()
            .post('/articles')
                .then(resp => {
                    console.log(resp)
                    localStorage.removeItem('token')
                    localStorage.removeItem('username')
                    localStorage.removeItem('role')
                    push('/login')
                })
                .catch(err => {
                    console.log(err);
                })
    })

    return(
        <div>
            
        </div>
    );
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.