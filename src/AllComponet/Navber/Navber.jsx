import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const Roters = <React.Fragment>

        <li className='hover:text-green-400 tooltip tooltip-bottom' data-tip="Home"><Link to="/">Home</Link></li>
        <li className='hover:text-green-400 tooltip tooltip-bottom' data-tip="My Project" ><Link to="/myproject">My Project</Link></li>
        <li className='hover:text-green-400 tooltip tooltip-bottom' data-tip="Doawnload Resume"><a  href='https://drive.google.com/file/d/1LTeYlFM2_9KkZ44nFSAdD65iGUP_bhQb/view?usp=sharing' download="https://drive.google.com/file/d/1LTeYlFM2_9KkZ44nFSAdD65iGUP_bhQb/view?usp=sharing"><button>DownLoad Resume</button></a></li>
        <li className='hover:text-green-400 tooltip tooltip-bottom' data-tip="Blogs Inform"><Link to="/blogs">Blogs</Link></li>
        <li className='hover:text-green-400 tooltip tooltip-bottom' data-tip="Contact Information"><Link to='/contactme'>Contact Me </Link></li>
      
        {/* <li tabIndex={0}>
            <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li>
        <li className='hover:text-green-400 tooltip'><Link to="/">Home</Link></li> */}
    </React.Fragment>
    return (
        <div className='bg-black text-white'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {Roters}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">S. M. <span className='text-green-500 pl-1 animate-pulse'>M</span>ofassel H<span className='animate-bounce text-green-500'>o</span>sain</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {Roters}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navber;