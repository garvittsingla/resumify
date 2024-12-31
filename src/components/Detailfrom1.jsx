import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../context/FormContext';

const Detailfrom1 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [skill1, setSkill1] = useState(formData.form2.skill1 || '');
  const [skill2, setSkill2] = useState(formData.form2.skill2 || '');
  const [skill3, setSkill3] = useState(formData.form2.skill3 || '');
  const [skill4, setSkill4] = useState(formData.form2.skill4 || '');
  const [skill5, setSkill5] = useState(formData.form2.skill5 || '');
  const [skill6, setSkill6] = useState(formData.form2.skill6 || '');
  const [github, setGithub] = useState(formData.form2.github || '');
  const [linkedin, setLinkedin] = useState(formData.form2.linkedin || '');
  const [x, setX] = useState(formData.form2.x || '');

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      form2: { skill1, skill2, skill3, skill4, skill5, skill6, github, linkedin, x }
    }));
  }, [skill1, skill2, skill3, skill4, skill5, skill6, github, linkedin, x, setFormData]);

  return (
    <div className='flex flex-col p-4 '>
      <form className='flex flex-col bg-black items-center justify-evenly gap-4'>
        <h1 className='text-white text-lg'>Enter the languages you know</h1>
        <input
          value={skill1}
          onChange={(e) => setSkill1(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="skill1"
          placeholder='Enter your first skill'
        />
        <input
          value={skill2}
          onChange={(e) => setSkill2(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="skill2"
          placeholder='Enter your second skill'
        />
        <input
          value={skill3}
          onChange={(e) => setSkill3(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="skill3"
          placeholder='Enter your third skill'
        />
        <input
          value={skill4}
          onChange={(e) => setSkill4(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="skill4"
          placeholder='Enter your fourth skill'
        />
        <input
          value={skill5}
          onChange={(e) => setSkill5(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="skill5"
          placeholder='Enter your fifth skill'
        />
        <input
          value={skill6}
          onChange={(e) => setSkill6(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="skill6"
          placeholder='Enter your sixth skill'
        />
        <h1 className='text-white text-lg'>Enter your Profiles</h1>
        <input
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="github"
          placeholder='Your Github URL'
        />
        <input
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="linkedin"
          placeholder='Your Linkedin URL'
        />
        <input
          value={x}
          onChange={(e) => setX(e.target.value)}
          className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
          type="text"
          name="twitter"
          placeholder='Your Twitter URL'
        />
      </form>
    </div>
  );
};

export default Detailfrom1;