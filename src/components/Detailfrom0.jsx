import React, { useEffect ,useState} from 'react';

const Detailfrom0 = ({setformdata}) => {
    
    const [fullname,setfullname] = useState("")
    const [profession,setprofession] = useState("")
    const [bio,setbio ] = useState("")
    const [form1,setform1] = useState([])

        useEffect(() => {
          const updatedForm1 = {
            fullname,
            profession,
            bio
          };
          
          setform1(updatedForm1);
          setformdata((prev) => ({
            ...prev,
            form1: updatedForm1
          }));
        }, [fullname, profession, bio, setformdata]);
    
    return (
      <div className='flex flex-col p-4'>
        <form className='flex flex-col items-center justify-evenly gap-4'>
          <input 
            value={fullname} 
            onChange={(e) => setfullname(e.target.value)} 
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2' 
            type="text" 
            name="name" 
            placeholder='Enter your Name' 
          />
          <input 
            value={profession} 
            onChange={(e) => setprofession(e.target.value)} 
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2' 
            type="text" 
            name="profession" 
            placeholder='Enter your Profession' 
          />
          <input 
            value={bio} 
            onChange={(e) => setbio(e.target.value)} 
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2' 
            type="text" 
            name="bio" 
            maxLength={100} 
            placeholder='Write a short crisp bio of yours (less than 30 words)' 
          />
        </form>
      </div>
    );
};

export default Detailfrom0;
