import React, { useState ,useEffect} from 'react'
import { useAuth } from '../isloggedin';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, handleLogout } = useAuth();
  const [isvisible,setisvisible] = useState(false)
  const navigate = useNavigate();

  const visible=()=>{
    setisvisible((prev)=>(!prev))
    console.log(isvisible);
    
  }
  

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
                        <path fillRule="evenodd" d="M3 4.5A1.5 1.5 0 014.5 3h11A1.5 1.5 0 0117 4.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 15.5v-11zM4.5 4a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11z" clipRule="evenodd" />
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
      </div>
    ) : (
      navigate('/login')
    )
  )
}

export default Dashboard