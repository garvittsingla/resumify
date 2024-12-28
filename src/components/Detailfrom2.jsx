import React, { useState, useEffect } from 'react';

const Detailfrom2 = ({ setformdata, submit }) => {
  const [project1name, setProject1Name] = useState("");
  const [project1bio, setProject1Bio] = useState("");
  const [project1link, setProject1link] = useState("");
  const [project2name, setProject2Name] = useState("");
  const [project2bio, setProject2Bio] = useState("");
  const [project2link, setProject2link] = useState("");
  const [project3name, setProject3Name] = useState("");
  const [project3bio, setProject3Bio] = useState("");
  const [project3link, setProject3link] = useState("");
  const [form3, setform3] = useState([]);

  useEffect(() => {
    setform3((prev) => ({
      ...prev,
      project1name,
      project1bio,
      project1link,
      project2name,
      project2bio,
      project2link,
      project3name,
      project3bio,
      project3link
    }));
    setformdata((prev) => ({
      ...prev,
      form3
    }));
  }, [setformdata, project1name, project1bio, project1link, project2name, project2bio, project2link, project3name, project3bio, project3link]);

  return (
    <div className='flex flex-col p-4'>
      <form className='flex flex-col items-center justify-evenly gap-4'>
        <h1 className='text-white text-lg'>Enter your project details</h1>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <input
            value={project1name}
            onChange={(e) => setProject1Name(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project1.name"
            placeholder='Enter project name'
          />
          <input
            value={project1bio}
            onChange={(e) => setProject1Bio(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project1.bio"
            placeholder='Enter a short bio'
          />
          <input
            value={project1link}
            onChange={(e) => setProject1link(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project1.link"
            placeholder='Enter github link'
          />
        </div>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <input
            value={project2name}
            onChange={(e) => setProject2Name(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project2.name"
            placeholder='Enter project name'
          />
          <input
            value={project2bio}
            onChange={(e) => setProject2Bio(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project2.bio"
            placeholder='Enter a short bio'
          />
          <input
            value={project2link}
            onChange={(e) => setProject2link(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project2.link"
            placeholder='Enter github link'
          />
        </div>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <input
            value={project3name}
            onChange={(e) => setProject3Name(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project3.name"
            placeholder='Enter project name'
          />
          <input
            value={project3bio}
            onChange={(e) => setProject3Bio(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project3.bio"
            placeholder='Enter a short bio'
          />
          <input
            value={project3link}
            onChange={(e) => setProject3link(e.target.value)}
            className='text-white border-white border-b-[0.1px] text-lg bg-zinc-800 focus:outline-none flex-1 p-2'
            type="text"
            name="project3.link"
            placeholder='Enter github link'
          />
        </div>
      </form>
    </div>
  );
};

export default Detailfrom2;