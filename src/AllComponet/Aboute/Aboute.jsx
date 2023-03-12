import React from 'react';
import { Link } from 'react-router-dom';

const Aboute = () => {
    return (
        <div>
            <h1 className='text-3xl my-2 mx-5'>My Information</h1>
            <p className='text-2xl mx-7 my-2'>My name is S.M. Mofassel Hosain . I am currently in second year of National University Honors BBA Accountancy subject and Web Developer Course. Completing Web Developer Course.</p>
            <p className='text-2xl my-2 mx-7'>I Love Coding . I Love to Learn New Things</p>
            <h1 className='text-3xl my-2 mx-5'>My Skills</h1>
            <p className='text-2xl my-2 mx-7'>React.js, Next.js, Tailwind css ,Javascript, MongoDB,Firebase,Vercel,Netlify,Node.js,express</p>
            <h1 className='text-3xl my-2 mx-5'>My Contact Information</h1>
            <p className='text-2xl my-2 mx-7'>Phone    :   O1752615522 <br/>Email      :    mofassel6145@gmail.com</p>
            <div className='text-center my-4'><Link className=" text-center  text-2xl btn bg-emerald-500" to="/">Home Page</Link></div>
        </div>
    );
};

export default Aboute;