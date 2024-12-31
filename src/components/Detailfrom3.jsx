import React, { useState, useEffect, useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Detailfrom3 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [organization, setOrganization] = useState(formData.form4.organization || '');
  const [jobrole, setJobRole] = useState(formData.form4.jobrole || '');
  const [startyear, setStartYear] = useState(formData.form4.startyear || '');
  const [email, setEmail] = useState(formData.form4.email || '');

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      form4: { organization, jobrole, startyear, email }
    }));
  }, [organization, jobrole, startyear, email, setFormData]);

  return (
    <div className='flex flex-col p-4'>
      <form className='flex flex-col items-center justify-evenly gap-4'>
        <h1 className='text-white text-lg'>Enter your current job</h1>
        <div className='flex flex-col gap-1'>
          <label className='text-white font-semibold' htmlFor="organization">Organization</label>
          <input
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
            type="text"
            name="organization"
            placeholder='Enter organization name'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-white font-semibold' htmlFor="jobrole">Job Role</label>
          <input
            value={jobrole}
            onChange={(e) => setJobRole(e.target.value)}
            className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
            type="text"
            name="jobrole"
            placeholder='Enter your job role'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-white font-semibold' htmlFor="startyear">Start Year</label>
          <input
            value={startyear}
            onChange={(e) => setStartYear(e.target.value)}
            className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
            type="text"
            name="startyear"
            placeholder='Enter starting year'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-white font-semibold' htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2'
            type="email"
            name="email"
            placeholder='Email address'
          />
        </div>
      </form>
    </div>
  );
};

export default Detailfrom3;