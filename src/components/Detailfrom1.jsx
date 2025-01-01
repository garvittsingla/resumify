import React, { useState, useEffect } from 'react';

const Detailfrom1 = ({ formData, setformdata, submit }) => {
  const [skill1, setskill1] = useState("");
  const [skill2, setskill2] = useState("");
  const [skill3, setskill3] = useState("");
  const [skill4, setskill4] = useState("");
  const [skill5, setskill5] = useState("");
  const [skill6, setskill6] = useState("");
  const [github, setgithub] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [x, setx] = useState("");
  const [form2, setform2] = useState([]);

  useEffect(() => {
    setform2((prev) => ({
      ...prev,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      github, linkedin, x
    }));
    setformdata((prev) => ({
      ...prev,
      form2
    }));
  }, [setformdata, skill1, skill2, skill3, skill4, skill5, skill6, github, linkedin, x]);

  return (
    <div className='flex overflow-x-hidden flex-col p-4'>
      <form className='flex flex-col items-center justify-evenly gap-4'>
        <h1 className='text-white text-lg'>Enter the languages you know</h1>
        <div className='flex flex-wrap gap-4 w-full'>
          <input
            value={skill1}
            onChange={(e) => { setskill1(e.target.value) }}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none p-2 flex-1 min-w-[200px]'
            type="text"
            name="skill1"
            placeholder='Enter your first skill'
          />
          <input
            value={skill2}
            onChange={(e) => { setskill2(e.target.value) }}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none p-2 flex-1 min-w-[200px]'
            type="text"
            name="skill2"
            placeholder='Enter your second skill'
          />
          <input
            value={skill3}
            onChange={(e) => { setskill3(e.target.value) }}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none p-2 flex-1 min-w-[200px]'
            type="text"
            name="skill3"
            placeholder='Enter your third skill'
          />
        </div>
        <div className='flex flex-wrap gap-4 w-full'>
          <input
            value={skill4}
            onChange={(e) => { setskill4(e.target.value) }}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none p-2 flex-1 min-w-[200px]'
            type="text"
            name="skill4"
            placeholder='Enter your fourth skill'
          />
          <input
            value={skill5}
            onChange={(e) => { setskill5(e.target.value) }}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none p-2 flex-1 min-w-[200px]'
            type="text"
            name="skill5"
            placeholder='Enter your fifth skill'
          />
          <input
            value={skill6}
            onChange={(e) => { setskill6(e.target.value) }}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none p-2 flex-1 min-w-[200px]'
            type="text"
            name="skill6"
            placeholder='Enter your sixth skill'
          />
        </div>
        <h1 className='text-white text-lg'>Enter your Profiles</h1>
        <input
          value={github}
          onChange={(e) => { setgithub(e.target.value) }}
          className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2'
          type="text"
          name="github"
          placeholder='Your Github URL'
        />
        <input
          value={linkedin}
          onChange={(e) => { setlinkedin(e.target.value) }}
          className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2'
          type="text"
          name="linkedin"
          placeholder='Your Linkedin URL'
        />
        <input
          value={x}
          onChange={(e) => { setx(e.target.value) }}
          className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none w-full p-2'
          type="text"
          name="twitter"
          placeholder='Your Twitter URL'
        />
      </form>
    </div>
  );
};

export default Detailfrom1;