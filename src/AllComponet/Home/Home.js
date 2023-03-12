import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
const Home = () => {



  return (
    <div className='bg-black text-white'>
      {/* top heading */}
      <div>
        <div>
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
      <div className='grid justify-center items-center'>
        <div className="card lg:card-side   ">
          <div className="avatar  w-52">
            <div className="w-72 mask mask-hexagon">
              <img src="https://i.ibb.co/6ZWmwqM/par-mofassel-image-5-Photo-Room-1.png" />
            </div>
          </div>
          <div className="card-body grid justify-center items-center w-80 lg:w-full">
            <h1 className='lg:text-4xl text-xl'>Hello! I'm Mofassel Hosain</h1>
            <p className='flex'><h1 className='font-bold text-green-500  lg:text-2xl'>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Web Developer ",
                                        2000,
                                        "Frontend Developer",
                                        2000,
                                        "Jr.Full Stack Developer",
                                        2000,
                                        "MERN Stack Developer",
                                        2000,
                                        "React Developer",
                                        2000,
                                    ]}
                                />
                            </h1></p>

          </div>
        </div>
        <p className='text-center my-6'><Link className='btn hover:text-green-500 border-t-green-500 '>DOWNLOAD RESUME</Link></p>

      </div>
    </div>

  );
};

export default Home;