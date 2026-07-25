import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef();
    const password = useRef();
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
        setErrorMessage(null);
    }
    const handleSubmitClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        if (message) {
            setErrorMessage(message);
            return;
        }
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
                    alt="logo" className='w-screen h-screen object-cover' />
            </div>
            <div className='relative flex items-center justify-center h-screen pt-20 md:pt-0'>
                <form onSubmit={(e) => e.preventDefault()} className='p-8 md:p-12 w-full md:w-8/12 lg:w-4/12 bg-black/80 text-white rounded-lg mx-4 md:mx-0'>
                    <h1 className='font-bold text-xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    <input ref={email} type="email" placeholder='Email Address' className='p-2 m-2  my-2 w-full bg-gray-700 text-slate-300' />
                    <input ref={password} type="password" placeholder='Password' className='p-2 m-2 w-full mb-6 bg-gray-700 text-slate-300' />
                    {errorMessage && <p className='text-red-500 text-sm font-bold ml-2'>{errorMessage}</p>}
                    <button onClick={handleSubmitClick} className='ml-2 bg-red-500 p-4 m-3 w-full'>{isSignInForm ? "Sign In" : "Sign Up"} </button>
                    <p className='p-2 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix Sign up now" : "If already a user, Sign in "}</p>
                </form>
            </div>
        </div>
    )
}
export default Login
