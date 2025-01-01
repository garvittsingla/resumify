  import React, { useState } from 'react';
  import { useAuth } from '../isloggedin';
  import { useNavigate } from 'react-router-dom';
  import Detailfrom0 from '../components/Detailfrom0';
  import Detailfrom1 from '../components/Detailfrom1';
  import Detailfrom2 from '../components/Detailfrom2';
  import Detailfrom3 from '../components/Detailfrom3';
  import { addtodatabase, getfromdatabase } from '../firebasedb';
  import { FaArrowCircleRight, FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";

  const Dashboard = () => {
    const { user, handleLogout } = useAuth();
    const [isvisible, setisvisible] = useState(false);
    const [currentindex, setcurrentindex] = useState(0);
    const [formdata, setformdata] = useState({});
    const [isclicked, setisclicked] = useState(false);
    const navigate = useNavigate();

    async function submit(e) {
      e.preventDefault();
      setisclicked(true);
      console.log(formdata);
      await addtodatabase(user, formdata);
      const data = await getfromdatabase(user);
      console.log(data);
      alert("Information stored")
      const userId = user.uid 
      console.log(userId)
      navigate(`/portfolio/${userId}`);
    }

    const increaseindex = (e) => {
      e.preventDefault();
      setcurrentindex((prev) => (prev + 1));
    };

    const decreseindex = (e) => {
      e.preventDefault();
      setcurrentindex((prev) => (prev - 1));
    };

    const visible = () => {
      setisvisible((prev) => (!prev));
    };

    const forms = [
      <Detailfrom0 setformdata={setformdata} submit={submit} isclicked={isclicked} formdata={formdata} />,
      <Detailfrom1 setformdata={setformdata} submit={submit} formdata={formdata} />,
      <Detailfrom2 setformdata={setformdata} submit={submit} formdata={formdata} />,
      <Detailfrom3 setformdata={setformdata} submit={submit} formdata={formdata} />
    ];


    return (
      user ? (
        <div class="absolute min-h-screen py-4 top-0 z-[-2]  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className=''>
            <nav className='w-full h-16 flex items-center justify-between px-4 md:px-10'>
              <div className="left text-white font-bold text-xl md:text-2xl h-full w-1/2 md:w-1/6 flex font-['Bauhaus_93'] items-center justify-center">Resumify</div>
              <div className="right h-[80%] w-32 md:w-40 p-2 flex gap-3 items-center text-white bg-zinc-800 rounded-xl cursor-pointer select-none" onClick={visible}>
                <div className="name">
                  {user && (
                    <h1 className='text-sm md:text-base'>
                      {user.displayName}
                    </h1>
                  )}
                </div>
                <div className="img relative">
                  {user && (
                    <div className='w-8 h-8 md:w-10 md:h-10 bg-orange-600 rounded-full flex items-center justify-center text-xl md:text-2xl'>
                      <h1 className='font-semibold'>{user.displayName[0]}</h1>
                    </div>
                  )}
                  {isvisible && (
                    <div className='w-32 md:w-40 h-10 rounded-lg absolute right-0 top-12 md:top-19 flex items-center justify-center'>
                      <button className='text-white bg-red-500 hover:bg-red-600 rounded-lg px-2 md:px-4 py-2 flex items-center gap-2' onClick={handleLogout}>
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
          </div>
          <div className='w-11/12 md:w-1/2 mt-4 md:mt-0 mx-auto flex justify-center'>
          
            <div onClick={() => { setcurrentindex(0) }} className={`h-[50px] w-[70px] md:w-[50px] rounded-full text-center flex justify-center items-center cursor-pointer ${currentindex === 0 || currentindex > 0 ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>1</div>
            <div className={`h-[5px] w-[80px] mt-6 ${currentindex == 1 || currentindex > 1 ? "bg-white" : "bg-slate-600"}`}></div>
            <div onClick={() => { setcurrentindex(1) }} className={`h-[50px] w-[70px] md:w-[50px] rounded-full text-center flex justify-center items-center cursor-pointer ${currentindex === 1 || currentindex > 1 ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>2</div>
            <div className={`h-[5px] w-[80px] mt-6 ${currentindex == 2 || currentindex > 2 ? "bg-white" : "bg-slate-600"}`}></div>
            <div onClick={() => { setcurrentindex(2) }} className={`h-[50px] w-[70px] md:w-[50px] rounded-full text-center flex justify-center items-center cursor-pointer ${currentindex === 2 || currentindex > 2 ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>3</div>
            <div className={`h-[5px] w-[80px] mt-6 ${currentindex == 3 || currentindex > 3 ? "bg-white" : "bg-slate-600"}`}></div>
            <div onClick={() => { setcurrentindex(3) }} className={`h-[50px] w-[70px] md:w-[50px] rounded-full text-center flex justify-center items-center cursor-pointer ${currentindex === 3 ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>4</div>
          </div>
          <div className='w-11/12 md:w-[95%] mx-auto mt-10 rounded-lg flex flex-col'>
            <h1 className='mx-auto text-white text-4xl md:text-6xl mt-3  font-["Bauhaus_93"]'>User <span className='font-sans'> Details</span></h1>
            <div className=''>
              <div className='mt-6 mx-auto w-[90%] md:w-[80%] '>
                {forms[currentindex]}
              </div>
            </div>
            {currentindex == 3 ? (
              <button className='bg-red-500 text-white px-2 py-3 w-34 h-18 flex items-center gap-5 rounded-lg font-semibold mx-auto' onClick={submit}>Get your Portfolio</button>
            ) : (
              <button 
                onClick={() => (setcurrentindex((prev) => prev + 1))} 
                className={`bg-white text-black px-2 py-3 w-24 h-18 flex items-center gap-5 rounded-lg font-semibold mx-auto `} 
                
              >
                Next<FaArrowRight />
              </button>
            )}
          </div>
        </div>
      ) : (
        navigate('/')
      )
    );
  };

  export default Dashboard;