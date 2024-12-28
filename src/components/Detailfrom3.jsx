import React, { useState, useEffect } from 'react';

const Detailfrom3 = ({ setformdata, submit }) => {
  const [organization, setorganization] = useState("");
  const [jobrole, setjobrole] = useState("");
  const [startyear, setstartyear] = useState("");
  const [email, setemail] = useState("");
  const [form4, setform4] = useState([]);

  useEffect(() => {
    setform4((prev) => ({
      ...prev,
      jobrole,
      organization,
      startyear,
      email
    }));
    setformdata((prev) => ({
      ...prev,
      form4
    }));
  }, [setformdata, jobrole, organization, startyear, email]);

  return (
    <div className='flex flex-col p-4'>
      <form className='flex flex-col items-center justify-evenly gap-4'>
        <h1 className='text-white text-lg'>Enter your current job</h1>
        <input
          value={organization}
          onChange={(e) => setorganization(e.target.value)}
          className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2'
          type="text"
          name="organization"
          placeholder='Enter organization name'
        />
        <input
          value={jobrole}
          onChange={(e) => setjobrole(e.target.value)}
          className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2'
          type="text"
          name="jobRole"
          placeholder='Enter your job role'
        />
        <input
          value={startyear}
          onChange={(e) => setstartyear(e.target.value)}
          className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2'
          type="text"
          name="startYear"
          placeholder='Enter starting year'
        />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2'
          type="email"
          name="email"
          placeholder='Email address'
        />
      </form>
    </div>
  );
};

export default Detailfrom3;