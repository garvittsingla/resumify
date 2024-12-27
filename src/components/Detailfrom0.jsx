import React, { useEffect ,useState} from 'react';

const Detailfrom0 = ({setformdata,submit}) => {
    
    const [fullname,setfullname] = useState("")
    const [profession,setprofession] = useState("")
    const [ image,setimage] =useState("")
    const [bio,setbio ] = useState("")
    const [form1,setform1] = useState([])

    useEffect(() => {
      setform1((prev) => ({
        ...prev,
        fullname,
        profession,
        image,
        bio
      }));
      setformdata(form1)
    }, [submit]);

    
    return (
        <div className='flex flex-col'>
            <form className='flex flex-col items-center justify-evenly gap-[30px]'>
  
                
                <input value={fullname} onChange={(e)=>{setfullname(e.target.value)}} className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none' type="text" name="name" placeholder='Enter your Name' />
                <select value={profession} onChange={(e)=>{setprofession(e.target.value)}}  name='category' defaultValue={""}>
                    <option disabled value="">what are you</option>
                    <option value="Machine learning">Machine learning</option>
                    <option value="Data science">Data science</option>
                    <option value="Full stack">Full stack</option>
                </select>
                <input value={image} onChange={(e)=>{setimage(e.target.value)}} className=' text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm 
      file:bg-zinc-700 file:text-gray-400
      ' type="file" name="image" />
                <input value={bio} onChange={(e)=>{setbio(e.target.value)}} type="text" name="bio" maxLength={100} placeholder='Write a short crisp bio of yours(less than 30 words)' />
            </form>
        </div>
    );
};

export default Detailfrom0;
