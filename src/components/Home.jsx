import React from 'react'

export default function Home() {

    const projectsData = [
        "Product Design",
        "Design Mockup",
        "UI/UX",
        "Develpment",
        "Branding",
        "Illustrations"
    ]

  return (
    <div className='w-full flex px-[40px] md:px-[80px] flex-col-reverse md:flex-row'>
        <div className="flex-[1] py-[55px] pr-[50px]">
            <div className="h-full w-full bg-purple-900 rounded-[20px]"></div>
        </div>
        <div className="flex-[1]">
            <div className="w-[85%] mt-[100px] md:mt-[60px]">
                <h1 className='text-[50px] leading-[55px]'>Manage All of Of Your Fonts In One Place Efficently</h1>
            </div>
            <div className="w-full md:w-[50%] my-[30px]">
            <p className=''>Manage your work time lines and team mates all at once. Set the following timelines, assign tasks, and keep your projects in check</p>

            </div>
            <div className="">
                <button className='h-[40px] md:h-[60px] w-[170px] md:w-[200px] bg-black rounded-[40px] text-[14px] text-center duration-[0.5s] text-white mr-[15px]'>Download App</button>
                <button className='h-[40px] md:h-[60px] w-[100px] md:w-[150px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white'>Sign Up</button>
            </div>

            <div className="mt-[100px] border-t-[1px] border-black flex flex-col md:flex-row py-[20px] mb-[50px]">
                <div className="flex-[1] mb-[20px]">
                    <h1 className=' font-semibold'>TASKS AND PROJECTS</h1>
                </div>
                <div className="flex-[2]">
                    {projectsData.map((project, index) => {
                        return (
                            <button className='py-[6px] md:py-[11px] px-[20px] mb-[10px] mx-[6px] font-semibold text-[12px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'>{project}</button>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
