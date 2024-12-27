import React, { useState,useEffect } from 'react';

const Detailfrom2 = ({setformdata}) => {
  const [project1name, setProject1Name] = useState("");
  const [project1bio, setProject1Bio] = useState("");
  const [project1image, setProject1Image] = useState(null);
  const [project2name, setProject2Name] = useState("");
  const [project2bio, setProject2Bio] = useState("");
  const [project2image, setProject2Image] = useState(null);
  const [project3name, setProject3Name] = useState("");
  const [project3bio, setProject3Bio] = useState("");
  const [project3image, setProject3Image] = useState(null);
  useEffect(() => {
    setformdata((prev) => ({
      ...prev,
      project1name,
      project1bio,
      project1image,
      project2name,
      project2bio,
      project2image,
      project3name,
      project3bio,
      project3image
    }))
  }, [project1name,
    project1bio,
    project1image,
    project2name,
    project2bio,
    project2image,
    project3name,
    project3bio,
    project3image])
  
  return (
    <div>
      <form>
        <h1>Enter your project details</h1>
        <input value={project1name} onChange={(e) => setProject1Name(e.target.value)} type="text" name="project1.name" placeholder='Enter project name' />
        <input value={project1bio} onChange={(e) => setProject1Bio(e.target.value)} type="text" name="project1.bio" placeholder='Enter a short bio' />
        <input onChange={(e) => setProject1Image(e.target.files[0])} type="file" name="project1.image" />
        <input value={project2name} onChange={(e) => setProject2Name(e.target.value)} type="text" name="project2.name" placeholder='Enter project name' />
        <input value={project2bio} onChange={(e) => setProject2Bio(e.target.value)} type="text" name="project2.bio" placeholder='Enter a short bio' />
        <input onChange={(e) => setProject2Image(e.target.files[0])} type="file" name="project2.image" />
        <input value={project3name} onChange={(e) => setProject3Name(e.target.value)} type="text" name="project3.name" placeholder='Enter project name' />
        <input value={project3bio} onChange={(e) => setProject3Bio(e.target.value)} type="text" name="project3.bio" placeholder='Enter a short bio' />
        <input onChange={(e) => setProject3Image(e.target.files[0])} type="file" name="project3.image" />
      </form>
    </div>
  );
};

export default Detailfrom2;
