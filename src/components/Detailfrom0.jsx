import React, { useEffect, useState } from 'react';

const Detailfrom0 = ({ setformdata }) => {
  const [fullname, setfullname] = useState("");
  const [profession, setprofession] = useState("");
  const [bio, setbio] = useState("");
  const [form1, setform1] = useState([]);

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
        <div className='flex flex-col gap-1'>
          <label className='text-white font-semibold' htmlFor="Firstname">First Name</label>
          <input
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
            type="text"
            name="name"
            placeholder='Full name'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-white font-semibold' htmlFor="Profession">Profession</label>
          <input
            value={profession}
            onChange={(e) => setprofession(e.target.value)}
            className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
            type="text"
            name="profession"
            placeholder='Enter your Profession'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-white font-semibold' htmlFor="Bio">Bio</label>
          <input
            value={bio}
            onChange={(e) => setbio(e.target.value)}
            className='text-white rounded-md text-lg  bg-gray-900 focus:outline-none w-[1000px] p-2'
            type="text"
            name="bio"
            maxLength={100}
            placeholder='Write a short crisp bio of yours (less than 30 words)'
          />
        </div>
      </form>
    </div>
  );
};

export default Detailfrom0;
