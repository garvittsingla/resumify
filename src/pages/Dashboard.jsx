import React, { useState } from 'react';
import { useAuth } from '../isloggedin';
import { useNavigate } from 'react-router-dom';
import Detailfrom0 from '../components/Detailfrom0';
import Detailfrom1 from '../components/Detailfrom1';
import Detailfrom2 from '../components/Detailfrom2';
import Detailfrom3 from '../components/Detailfrom3';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Dashboard = () => {
  const { user, handleLogout } = useAuth();
  const [isvisible, setisvisible] = useState(false);
  const [currentindex, setcurrentindex] = useState(0);
  const [formdata,setformdata] = useState({})


  function submit(e){
   e.preventDefault()
   console.log(formdata)
  }

  const navigate = useNavigate();

  const increaseindex = (e) => {
    e.preventDefault()
    setcurrentindex((prev) => (prev + 1));
  };

  const decreseindex = (e) => {
    e.preventDefault()
    setcurrentindex((prev) => (prev - 1));
  };

  const visible = () => {
    setisvisible((prev) => (!prev));
  };

  const forms = [
    <Detailfrom0 setformdata={setformdata}  submit={submit} formdata={formdata} />,
    <Detailfrom1 setformdata={setformdata} formdata={formdata} />,
    <Detailfrom2 setformdata={setformdata} formdata={formdata} />,
    <Detailfrom3 setformdata={setformdata} formdata={formdata} />
  ];

  return (
    user ? (
      <div className='h-screen w-full bg-zinc-900'>
        <>
          <nav className='w-full h-16 flex items-center justify-between px-10'>
            <div className="left text-yellow-500 font-bold text-2xl h-full w-1/6 flex items-center justify-center">Resumify</div>
            <div className="right h-[80%] w-40 p-2 flex gap-3 items-center text-white bg-zinc-800 rounded-xl cursor-pointer select-none" onClick={visible}>
              <div className="name">
                {user && (
                  <h1>
                    {user.displayName}
                  </h1>
                )}
              </div>
              <div className="img relative">
                {user && (
                  <div className='w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-2xl'>
                    <h1 className='font-semibold'>{user.displayName[0]}</h1>
                  </div>
                )}
                {isvisible && (
                  <div className='w-40 h-10 rounded-lg absolute right-0 top-19 flex items-center justify-center'>
                    <button className='text-white bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2 flex items-center gap-2' onClick={handleLogout}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 4.5A1.5 1.5 0 014.5 3h11A1.5 1.5 0 0117 4.5v11a.5.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 15.5v-11zM4.5 4a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M8.5 10a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM10 8.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                      </svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </>
        <div className='w-1/2 mx-auto flex justify-center'>
          <div onClick={() => { setcurrentindex(0) }} className={`h-[50px] w-[50px] rounded-full text-center flex justify-center items-center cursor-pointer ${currentindex === 0 || currentindex>0 ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>1</div>
          <div className={`h-[5px] w-[80px] mt-6 ${currentindex ==1 || currentindex>1?"bg-white": "bg-slate-600"}`}></div>
          <div onClick={() => { setcurrentindex(1) }} className={`h-[50px] w-[50px] rounded-full text-center flex justify-center items-center cursor-pointer ${currentindex === 1 || currentindex>1 ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>2</div>
          <div className={`h-[5px] w-[80px] mt-6 ${currentindex ==2 ||currentindex>2?"bg-white": "bg-slate-600"}`}></div>
          <div onClick={() => { setcurrentindex(2) }} className={`h-[50px] w-[50px] rounded-full text-center flex justify-center items-center cursor-pointer ${currentindex === 2 || currentindex>2? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>3</div>
          <div className={`h-[5px] w-[80px] mt-6 ${currentindex ==3 || currentindex>3?"bg-white": "bg-slate-600"}`}></div>
          <div onClick={() => { setcurrentindex(3) }} className={`h-[50px] w-[50px] rounded-full text-center flex justify-center items-center cursor-pointer ${currentindex === 3 ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>4</div>
        </div>
        <div className='w-[95%] mx-auto bg-zinc-800 h-[60%] mt-10 rounded-lg flex flex-col'>
          <h1 className='mx-auto text-white text-6xl mt-3 font-mono'>User Details</h1>
          <div className='flex items-center justify-between'>
            <div className="w-[10%] flex items-center justify-center">
              {currentindex > 0 && <button className='text-white font-semibold text-5xl' onClick={decreseindex}> <FaArrowCircleLeft /></button>}
            </div>
            <div className='mt-6 w-[80%] h-96'>
              {forms[currentindex]}
            </div>
            <div className='w-[10%] flex items-center justify-center'>
              <button className={`text-white font-semibold text-5xl ${currentindex < 3 ? "inline" : "hidden"}`} onClick={increaseindex}> <FaArrowCircleRight /></button>
            </div>
            <button onClick={submit}>get data</button>
          </div>
        </div>
      </div>
    ) : (
      navigate('/login')
    )
  );
};

export default Dashboard;
