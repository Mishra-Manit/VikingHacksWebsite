import React from 'react';

const VenueDiagram: React.FC = () => {
  return (
    <div className="flex flex-col h-screen my-40 items-center">
        <h1 className="justify-start text-5xl">Hackathon Venue Layout</h1>
        <h1 className="justify-start text-xl font-light opacity-50">This is the tentative layout for Viking Hacks 2024.</h1>
        <div className="absolute mt-32 flex gap-2 w-[40rem] items-center h-[20rem] border border-neutral-400 p-2">
            <text className="absolute center select-none left-1/2 -translate-x-3 -translate-y-8 top-0 font-mono opacity-50">40m</text>
            <text className="absolute center select-none left-0 -translate-x-10 font-mono opacity-50">20m</text>
            <div className="h-full shrink-0 justify-center flex items-center w-[7rem] border border-dashed border-blue-500">
                <h1 className="">
                    Stage Area
                </h1>
            </div>
            <div className="h-full shrink-0 flex flex-col gap-2 w-[23rem]">
                <div className="h-4/5 flex items-center justify-center w-full border border-dashed border-rose-500">
                      <h1 className="">
                          Hackers
                      </h1> 
                </div>
                <div className="h-1/5 content-center flex gap-2 text-center items-center justify-center w-full">
                    <div className="h-full w-4/6 flex flex-col justify-center text-center border border-dashed border-indigo-400">
                          <h1 className="">
                              Judging Area
                          </h1> 
                    </div>
                    <div className="h-full w-2/6 flex flex-col justify-center text-center border border-dashed border-neutral-600">
                          <h1 className="font-mono text-neutral-600 font-light">
                              BLOCKED
                          </h1> 
                    </div>
                </div>
            </div>
            <div className="h-full flex flex-col gap-2 w-full">
                <div className="h-5/6 flex items-center justify-center w-full border border-dashed border-violet-600">
                      <h1 className="">
                          Food
                      </h1> 
                </div>
                <div className="h-1/6 flex items-center justify-center w-full border border-dashed border-amber-400">
                      <h1 className="">
                          Entrance
                      </h1> 
                </div>
            </div>
        </div>
    </div>    
  );
};

export default VenueDiagram;