import React, { useEffect, useState } from 'react';

const Detailfrom0 = ({ setformdata }) => {
  const [fullname, setFullname] = useState('');
  const [profession, setProfession] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    setformdata((prev) => ({
      ...prev,
      form1: { fullname, profession, bio },
    }));
  }, [fullname, profession, bio, setformdata]);

  return (
    <div className="flex flex-col p-4">
      <form className="flex flex-col items-center justify-evenly gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold" htmlFor="fullname">
            Full Name
          </label>
          <input
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2"
            type="text"
            name="name"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold" htmlFor="profession">
            Profession
          </label>
          <input
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="text-white rounded-md text-lg bg-gray-900 focus:outline-none w-full p-2"
            type="text"
            name="profession"
            placeholder="Machine learning "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold" htmlFor="bio">
            Bio
          </label>
          <input
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="text-white rounded-md text-lg bg-gray-900 focus:outline-none max-w-screen-xl p-2"
            type="text"
            name="bio"
            maxLength={100}
            placeholder="Hey i am John a machine learning engineer"
          />
        </div>
      </form>
    </div>
  );
};

export default Detailfrom0;
