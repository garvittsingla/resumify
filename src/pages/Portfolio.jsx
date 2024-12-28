import React , {useState,useEffect} from "react"
import { useAuth } from "../isloggedin";
import { getfromdatabase } from "../firebasedb";
import { tailspin } from 'ldrs'






function Portfolio() {
   tailspin.register()
   const { user } = useAuth();
   console.log(user)
   const [fetched,setfetched] = useState(null)
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getfromdatabase(user)
        .then((data) => {
          setfetched(data);
         //  setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
         //  setLoading(false);
        });
    } 
  }, [user]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  function loader() {
    return (
      <div className="flex items-center justify-center h-screen">
        <l-tailspin size="40" stroke="5" speed="0.9" color="white"></l-tailspin>
      </div>
    );
  }

  return (
      <div className="bg-black">
         {loading ? (loader()):
        user&&(
    <div lang="en" className="bg-[#0C0C0C] text-[#E9E9E9] overflow-y-hidden sm:overflow-x-hidden ">  
      <div id="page1" className="h-screen w-full font-mono  ">
         <nav
            className="text-lg w-5/6 mx-auto flex justify-between font-sans items-center h-24 overflow-y-hidden"
            >
            <div className="">
                {fetched && fetched.form1 && (
                  <div>
                    <p>{fetched.form1.fullname}</p>
                  </div>
                )}
              </div>
            <div className="hidden md:flex gap-6 drop-shadow-lg font-semibold">
               <a className="hover:text-orange-500" href="#page2">Skills</a>
               <a className="hover:text-orange-500" href="#page4">Profiles</a>
               <a className="hover:text-orange-500" href="#emailid">Got a Question?</a>
            </div>
         </nav>
         <div className="flex flex-col md:flex-row w-5/6 mx-auto h-96 sm:mt-6 md:mt-16" id="section1">
            <div className="w-full md:w-1/2 h-full flex flex-col items-center gap-10 mt-8">
               <div className="flex flex-col items-center gap-8 md:gap-3">
                  <span id="heading" className="font-sans text-8xl leading-16 font-semibold text-center"><span>Hi, I am </span><br />{fetched && fetched.form1 && (
                  <div>
                    <p>{fetched.form1.fullname}</p>
                  </div>
                )}</span>
                  <div className="text-sm text-zinc-500">&lt; {fetched && fetched.form1 && (<span>{fetched.form1.profession}</span>)}/&gt;</div>
               </div>
               <button
                  onclick="location.href='#page3'"
                  id="projects"
                  className="bg-orange-600 text-white px-3 py-2 rounded-lg shadow-[0px_0px_28px_9px_rgba(234,88,12,0.2)]"
                  >
               See my Projects
               </button>
               <div id="para" className="sm:w-full text-zinc-600 font-semibold text-center">
               {fetched && fetched.form1 && (<span>{fetched.form1.bio}</span>)}
               </div>
            </div>
            <div className="w-full hidden md:inline-block md:w-1/2 h-full rounded-lg bg-zinc-00 relative">
               <img className="hidden md:inline-block" id="svg1" src="svg1.svg" alt="" />
               <div
                  id="pfp"
                  className="absolute top-24  md:top-12 md:left-24 h-96 rounded-lg mx-auto bg-[#FB8500] p-4 shadow-[0px_0px_30px_9px_rgba(234,88,12,0.4)]"
                  >
                  <div
                     className="overlay hidden md:inline-block bg-transparent h-full w-full absolute z-[999]"
                     ></div>
                  <a href="https://x.com/garvits093" target="_blank"
                     ><img
                     className="h-full w-full rounded-lg cursor-pointer"
                     src="../cozy.jpeg"
                     alt=""
                     /></a>
               </div>
               <div className="absolute right-12 bottom-0 hidden md:inline-block">
                  <img  id="svg2" src="svg2.svg" alt="" />
               </div>
            </div>
            <div className="h-[550px] hidden md:flex absolute right-10 items-end justify-end">
               <span>Scroll Down </span>
               <i className="text-orange-500 ri-arrow-down-line"></i>
            </div>
         </div>
      </div>
      <div id="page2" className="h-auto md:mt-0 md:h-screen w-full px-4">
         <div
            className="mt-12 flex items-center justify-center  h-3/4 md:h-[90%] md:pr-10 w-full relative"
            >
            <div id="skillss" className="relative hidden md:inline-block w-3/4">
               <div
                  className="shadow-[0px_0px_40px_10px_rgba(234,255,255,0.4)] h-[0.01px] w-[276px] right-[140px] top-[300px] -translate-x-[100%] -translate-y-[100%] absolute"
                  ></div>
               <img className="hidden md:inline-block " src="Web development (1) (1).png" alt="" />
               <div
                  className="font-['Playwrite-GB-S']  text-3xl font-semibold text-center"
                  >
                  &lt; <span className="text-orange-600">b</span>e Unique
                  <span className="text-orange-600">b</span>e Different / &gt;
               </div>
            </div>
            <div
               className="bg-orange-600 text-white w-full mx-auto md:w-1/4 h-5/6 rounded-lg shadow-[0px_0px_28px_9px_rgba(234,88,12,0.2)] py-4"
               >
               <h1 className="text-center mt-5 text-3xl font-semibold">
                  My Skills <i className="ri-terminal-box-line"></i>
               </h1>
               <hr className="w-5/6 mx-auto mt-2 text-zinc-900" />
               <ul className="space-y-4 mt-8 w-3/4 mx-auto">
                  <li
                     className="flex items-center justify-between px-4 py-3 bg-black rounded-lg shadow-md"
                     >
                     <div className="flex items-center">
                        <input
                           type="checkbox"
                           checked
                           className="w-5 h-5 text-white border-white rounded"
                           disabled
                           />
                        <span className="ml-3 text-lg font-medium text-white "
                           >{fetched && fetched.form2 && (<span>{fetched.form2.skill1}</span>)}</span
                           >
                     </div>
                     <span className="text-xs text-gray-200">Intermediate</span>
                  </li>
                  <li
                     className="flex items-center justify-between px-4 py-3 bg-black rounded-lg shadow-md"
                     >
                     <div className="flex items-center">
                        <input
                           type="checkbox"
                           checked
                           className="w-5 h-5 text-white border-white rounded focus:ring-white"
                           disabled
                           />
                        <span className="ml-3 text-lg font-medium text-white"
                           >{fetched && fetched.form2 && (<span>{fetched.form2.skill2}</span>)}</span
                           >
                     </div>
                     <span className="text-xs text-gray-200">Expert</span>
                  </li>
                  <li
                     className="flex items-center justify-between px-4 py-3 bg-black rounded-lg shadow-md"
                     >
                     <div className="flex items-center">
                        <input
                           type="checkbox"
                           checked
                           classNmae="w-5 h-5 text-white border-white rounded focus:ring-white"
                           disabled
                           />
                        <span className="ml-3 text-lg font-medium text-white"
                           >{fetched && fetched.form2 && (<span>{fetched.form2.skill3}</span>)}</span
                           >
                     </div>
                     <span className="text-xs text-gray-200">Advanced</span>
                  </li>
                  <li
                     className="flex items-center justify-between px-4 py-3 bg-black rounded-lg shadow-md"
                     >
                     <div className="flex items-center">
                        <input
                           type="checkbox"
                           checked
                           className="w-5 h-5 text-white border-white rounded focus:ring-white"
                           disabled
                           />
                        <span className="ml-3 text-lg font-medium text-white"
                           >{fetched && fetched.form2 && (<span>{fetched.form2.skill4}</span>)}</span
                           >
                     </div>
                     <span className="text-xs text-gray-200">Intermediate</span>
                  </li>
                  <li
                     className="flex items-center justify-between px-4 py-3 bg-black rounded-lg shadow-md"
                     >
                     <div className="flex items-center">
                        <input
                           type="checkbox"
                           checked
                           className="w-5 h-5 text-white border-white rounded focus:ring-white"
                           disabled
                           />
                        <span className="ml-3 text-lg font-medium text-white"
                           >{fetched && fetched.form2 && (<span>{fetched.form2.skill5}</span>)}</span
                           >
                     </div>
                     <span className="text-xs text-gray-200">Intermediate</span>
                  </li>
                  <li
                     className="flex items-center justify-between px-4 py-3 bg-black rounded-lg shadow-md"
                     >
                     <div className="flex items-center">
                        <input
                           type="checkbox"
                           checked
                           className="w-5 h-5 text-white border-white rounded focus:ring-white"
                           disabled
                           />
                        <span className="ml-3 text-lg font-medium text-white"
                           >{fetched && fetched.form2 && (<span>{fetched.form2.skill6}</span>)}</span
                           >
                     </div>
                     <span className="text-xs text-gray-200">Intermediate</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div id="page3" className="h-fit w-full">
        <div className="pt-2">
          <h1 className="font-normal ml-10  font-mono mt-10 md:ml-10  text-7xl">
            Projects
          </h1>
          <div className="ml-10 md:ml-60 mt-5 h-[1px] w-5/6 bg-zinc-200"></div>
        </div>
      
        <div className="h-[60%] w-full mt-6 px-5">
          <h1 className="text-zinc-500 text-5xl">{fetched && fetched.form3&&fetched.form3.project1name}</h1>
          <div className="w-full h-full flex flex-col md:flex-row mt-4">
            <div className="md:px-10 px-5 py-10 md:py-20 w-full md:w-1/2 h-full">
              <h1 className="mb-5 w-full md:w-1/2 text-xl">
              {fetched && fetched.form3&&fetched.form3.project1bio}.
              </h1>
              <a
                className="ml-20 hover:text-orange-500"
                target="_blank"
                href={`${fetched && fetched.form3&&fetched.form3.project1bio}`}
                >Github Link: {fetched && fetched.form3&&fetched.form3.project1link}</a
              >
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center h-full">
              <div id="vid1" className="w-[95%] h-full rounded-lg items-center flex relative justify-center">
                <div className="bg-transparent h-full w-full absolute z-[10]"></div>
                <img className="rounded-lg shadow-[0px_0px_11px_10px_rgba(34,18,40,0.6)] w-full" src="photo3.png"/>
            </div>
          </div>
        </div>
        <div className="ml-10 md:ml-60 mt-5 h-[1px] w-5/6 bg-zinc-200"></div>
      
        <div className="h-[60%] w-full mt-6 px-5">
          <h1 className="text-zinc-500 text-5xl">{fetched && fetched.form3&&fetched.form3.project2name}</h1>
          <div className="w-full h-full flex flex-col md:flex-row mt-4">
            <div className="md:px-10 px-5 py-10 md:py-20 w-full md:w-1/2 h-full">
              <h1 className="mb-5 w-full md:w-1/2 text-xl">
              {fetched && fetched.form3&&fetched.form3.project2bio}
              </h1>
              <a
                className="ml-20 hover:text-orange-500"
                target="_blank"
                href={fetched && fetched.form3&&fetched.form3.project2link}
                >Github Link:
                {fetched && fetched.form3&&fetched.form3.project2link}</a
              >
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center h-full">
              <div id="vid2" className="w-[95%] h-full rounded-lg items-center flex relative justify-center">
                <div className="bg-transparent h-full w-full absolute z-[10]"></div>
                <img className="rounded-lg shadow-[0px_0px_11px_10px_rgba(34,18,40,0.6)] w-full" src="photo2.jpg"/>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10 md:ml-60 mt-5 h-[1px] w-5/6 bg-zinc-200"></div>
      
        <div className="h-[60%] w-full mt-6 px-5">
          <h1 className="text-zinc-500 text-5xl">{fetched && fetched.form3&&fetched.form3.project3name}</h1>
          <div className="w-full h-full flex flex-col md:flex-row mt-4">
            <div className="md:px-10 px-5 py-10 md:py-20 w-full md:w-1/2 h-full">
              <h1 className="mb-5 w-full md:w-1/2 text-xl">
              {fetched && fetched.form3&&fetched.form3.project3bio}
              </h1>
              <a
                className="ml-20 hover:text-orange-500"
                target="_blank"
                href={fetched && fetched.form3&&fetched.form3.project3link}
                >Github Link:
                {fetched && fetched.form3&&fetched.form3.project3link}</a
              >
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center h-full">
              <div id="vid3" className="w-[95%] h-full rounded-lg items-center flex relative justify-center">
                <div className="bg-transparent h-full w-full absolute z-[10]"></div>
                <img className="rounded-lg shadow-[0px_0px_11px_10px_rgba(34,18,40,0.6)] w-full" src="photo1.jpg"/>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10 md:ml-60 mt-5 h-[1px] w-5/6 bg-zinc-200"></div>
      </div>
      <div id="page4" className="h-auto md:h-screen w-full py-1">
        <h1 className="font-normal font-mono mt-10 ml-[22%] md:ml-10  text-7xl">
          Profiles
        </h1>
        <div id="profilesec" className="h-[70%] w-full mt-10 flex flex-col md:flex-row gap-10 items-center justify-center">
         <div className="w-[93%] md:w-1/5 h-full bg-[#FB8500] py-3 shadow-[0px_0px_30px_9px_rgba(234,88,12,0.4)] hover:shadow-[0px_0px_40px_12px_rgba(234,88,12,0.6)] transition-shadow duration-300 ease-in-out rounded-lg">
            <img className="w-[95%] mx-auto rounded-lg mt-5 transform transition-transform duration-300 ease-in-out hover:scale-105" src="github.png" alt="" />
            <div className="h-[1px] bg-gray-100 mt-4"></div>
            <div className="italic mx-auto text-center text-[#023047] mt-4 font-semibold text-lg">Github</div>
            <div className="bg-[#FFB703] w-5/6 mx-auto mt-6 p-4 rounded-lg">
                <div className="w-5/6 h-[70%] mx-auto font-semibold text-xl text-white font-mono">
                    <h1>Explore my github projects and repository</h1>
                </div>
                <div>
                    <a target="_blank" href={`${fetched && fetched.form1 &&fetched.form2.github}`}>
                        <button className="mx-auto ml-[34%] mt-10 px-4 py-2 bg-[#023047] text-white rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#03517a]">
                            Click me
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div className="w-[93%] md:w-1/5 h-full bg-[#FB8500] py-3 shadow-[0px_0px_30px_9px_rgba(234,88,12,0.4)] hover:shadow-[0px_0px_40px_12px_rgba(234,88,12,0.6)] transition-shadow duration-300 ease-in-out rounded-lg">
         <img className="w-[95%] mx-auto rounded-lg mt-5 transform transition-transform duration-300 ease-in-out hover:scale-105" src="x.png" alt=""/>
         <div className="h-[1px] bg-gray-100 mt-4"></div>
         <div className="italic mx-auto text-center text-[#023047] mt-4 font-semibold text-lg">X</div>
         <div className="bg-[#FFB703] w-5/6 mx-auto mt-6 p-4 rounded-lg">
             <div className="w-5/6 h-[70%] mx-auto font-semibold text-xl text-white font-mono">
                 <h1>Follow me on X</h1>
             </div>
             <div>
                 <a target="_blank" href={`${fetched && fetched.form1&&fetched.form2.x}`}>
                     <button className="mx-auto ml-[34%] mt-10 px-4 py-2 bg-[#023047] text-white rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#03517a]">
                         Follow me
                     </button>
                 </a>
             </div>
         </div>
     </div>
     <div className="w-[93%] md:w-1/5 h-full bg-[#FB8500] py-3 shadow-[0px_0px_30px_9px_rgba(234,88,12,0.4)] hover:shadow-[0px_0px_40px_12px_rgba(234,88,12,0.6)] transition-shadow duration-300 ease-in-out rounded-lg">
      <img className="w-[65%] mx-auto rounded-lg mt-5 transform transition-transform duration-300 ease-in-out hover:scale-105" src="linkedin.jpg" alt="" />
      <div className="h-[1px] bg-gray-100 mt-4"></div>
      <div className="italic mx-auto text-center text-[#023047] mt-4 font-semibold text-lg">Linkedin</div>
      <div className="bg-[#FFB703] w-5/6 mx-auto mt-6 p-4 rounded-lg">
          <div className="w-5/6 h-[70%] mx-auto font-semibold text-xl text-white font-mono">
              <h1>Connect with me on linkedIn</h1>
          </div>
          <div>
              <a target="_blank" href={`${fetched && fetched.form1&&fetched.form2.linkedin}`}>
                  <button className="mx-auto ml-[34%] mt-10 px-4 py-2 bg-[#023047] text-white rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#03517a]">
                      Connect
                  </button>
              </a>
          </div>
      </div>
  </div>
        
      
          
        </div>
      </div>
      <div  id="page5" className="w-full h-screen py-1">
         <h1 className="font-normal font-['Mulish'] mt-10 ml-10 text-7xl">
            Experience
          </h1>
          <div id="dts" className="w-full h-auto flex items-center justify-center py-10 cursor-pointer">
            <div className="bg-[#FB8500] shadow-[0px_0px_30px_9px_rgba(234,88,12,0.9)] p-8 rounded-lg  w-[90%] max-w-[800px] flex items-center gap-8 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#FF6700] hover:shadow-[0px_0px_40px_12px_rgba(255,104,12,0.5)]">
              <div className="w-[80px] h-[80px]">
                <img src="building.png" className="w-full h-full object-contain rounded-md" />
              </div>
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-semibold font-mono">{fetched && fetched.form4&&fetched.form4.organization}</h2>
                <p className="text-lg font-medium text-[#023047]">{fetched && fetched.form4&&fetched.form4.jobrole}</p>
                <p className="text-sm mt-3 text-[#023047] font-medium">{fetched && fetched.form4&&fetched.form4.startyear}</p>
              </div>
            </div>
          </div>
          <div id="emailid" className="w-full h-auto">
            <h1 className="font-normal font-mono mt-10 ml-10  text-7xl">
               Contact me
             </h1>
             <div className="w-full h-auto flex items-center justify-center py-10">
               <div className="bg-[#FB8500] shadow-[0px_0px_30px_9px_rgba(234,88,12,0.9)] p-8 rounded-lg  w-[90%] max-w-[800px] flex items-center gap-8 group transition-all duration-500 ease-in-out hover:bg-[#FF6700]">
                 <div className="w-[80px] h-[80px]">
                   <img src="mail.webp" alt="Email Icon" className="w-full h-full object-contain rounded-md" />
                 </div>
                 <div className="flex-1 text-white">
                   <h2 className="text-3xl font-semibold font-['Ubuntu']">Get in Touch</h2>
                   <p className="text-lg font-medium text-[#023047]">Click the button to email me!</p>
                   <p>{fetched && fetched.form4&&fetched.form4.email}</p>
                   <a href={`mailto:${fetched && fetched.form4&&fetched.form4.email}`}className="inline-block bg-[#023047] text-white font-bold px-6 py-3 mt-6 rounded-lg transition duration-300 ease-in-out hover:bg-[#046280]">
                     Email Me
                   </a>
                 </div>
               </div>
             </div>
             
             
          </div>
          
      </div>
    </div>
</div>

    )}</div>)
}

export default Portfolio;
