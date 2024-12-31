import React, { useState, useEffect, useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Detailfrom2 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [project1name, setProject1Name] = useState(formData.form3.project1name || '');
  const [project1bio, setProject1Bio] = useState(formData.form3.project1bio || '');
  const [project1link, setProject1Link] = useState(formData.form3.project1link || '');
  const [project2name, setProject2Name] = useState(formData.form3.project2name || '');
  const [project2bio, setProject2Bio] = useState(formData.form3.project2bio || '');
  const [project2link, setProject2Link] = useState(formData.form3.project2link || '');
  const [project3name, setProject3Name] = useState(formData.form3.project3name || '');
  const [project3bio, setProject3Bio] = useState(formData.form3.project3bio || '');
  const [project3link, setProject3Link] = useState(formData.form3.project3link || '');

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      form3: { project1name, project1bio, project1link, project2name, project2bio, project2link, project3name, project3bio, project3link }
    }));
  }, [project1name, project1bio, project1link, project2name, project2bio, project2link, project3name, project3bio, project3link, setFormData]);

  return (
    <div className='flex flex-col p-4'>
      <form className='flex flex-col items-center justify-evenly gap-4'>
        <h1 className='text-white text-lg'>Enter your project details</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project1name">Project 1 Name</label>
              <input
                value={project1name}
                onChange={(e) => setProject1Name(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project1name"
                placeholder='Enter project name'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project1bio">Project 1 Bio</label>
              <input
                value={project1bio}
                onChange={(e) => setProject1Bio(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project1bio"
                placeholder='Enter a short bio'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project1link">Project 1 Link</label>
              <input
                value={project1link}
                onChange={(e) => setProject1Link(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project1link"
                placeholder='Enter github link'
              />
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project2name">Project 2 Name</label>
              <input
                value={project2name}
                onChange={(e) => setProject2Name(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project2name"
                placeholder='Enter project name'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project2bio">Project 2 Bio</label>
              <input
                value={project2bio}
                onChange={(e) => setProject2Bio(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project2bio"
                placeholder='Enter a short bio'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project2link">Project 2 Link</label>
              <input
                value={project2link}
                onChange={(e) => setProject2Link(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project2link"
                placeholder='Enter github link'
              />
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project3name">Project 3 Name</label>
              <input
                value={project3name}
                onChange={(e) => setProject3Name(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project3name"
                placeholder='Enter project name'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project3bio">Project 3 Bio</label>
              <input
                value={project3bio}
                onChange={(e) => setProject3Bio(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project3bio"
                placeholder='Enter a short bio'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-white font-semibold' htmlFor="project3link">Project 3 Link</label>
              <input
                value={project3link}
                onChange={(e) => setProject3Link(e.target.value)}
                className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
                type="text"
                name="project3link"
                placeholder='Enter github link'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Detailfrom2;