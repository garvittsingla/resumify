export default function Features(){
    return(
        <div className="w-3/4 mx-auto h-96  flex flex-col md:flex-row items-center justify-between px-4">
            <div className="w-1/4 p-9 items-center  flex flex-col h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-14">
                <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
            </svg>
            <h1 className="text-4xl mt-2 text-slate-500 font-semibold font-['Bauhaus_93']">Shareable</h1>
            <p className="font-medium text-center text-white">Create portfolios that are Shareable</p>

            </div>
            <div className="w-1/4 p-9 items-center  flex flex-col h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-14">
                <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clipRule="evenodd" />
            </svg>

            <h1 className="text-4xl mt-2 text-slate-500 font-semibold font-['Bauhaus_93']">Presentable</h1>
            <p className="font-medium text-center text-white">Create portfolios that are Attractive</p>

            </div>
            
            <div className="w-1/4 p-9 items-center  flex flex-col h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>


            <h1 className="text-4xl mt-2 text-slate-500 font-semibold font-['Bauhaus_93']">No code</h1>
            <p className="font-medium text-center text-white">Create portfolios without coding</p>

            </div>
            
        </div>
    )
}