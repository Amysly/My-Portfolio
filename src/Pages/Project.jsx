import React from 'react'



const myProjects = [
    {
        id: 1,
        title: "Address-Book App",
        image: "/images/address.jpg", 
        description: "Created with Html,Css and Javascript",
        liveLink: "https://warm-zuccutto-d0acb8.netlify.app",
        codeLink: "https://github.com/Amysly/AddressBook"
    },

    {
        id: 2,
        title: "To-do-list App",
        description: "Created with Html,Css and Javascript",
        image: "/images/todolist.jpg", 
        liveLink: "https://preeminent-longma-18f0f3.netlify.app",
        codeLink: "https://github.com/Amysly/Todolist"
    },

    {
        id: 3,
        image: "/images/cart.jpg", 
        title: "E-commerce website",
        description: "Created with Html,Css and Javascript",
        liveLink: "https://jovial-cactus-77d66f.netlify.app/",
        codeLink: "https://github.com/Amysly/Amy-Kitchen"
    },
]
const Project = () => {
  return (
    <div className="background-two">
    <div className="pt-4 px-4 background">
    <h2 className="col-span-full text-yellow-400 text-3xl lg:text-4xl text-center font-serif 
          lg:mt-20 "> Projects</h2>
          <div className="border border-yellow-400 w-32 mx-auto mt-4"></div>
        <div className='grid lg:grid-cols-2 gap-7 p-10'>
        {myProjects.map((myProject) => (
            <div key={myProject.id} data-aos="fade-up">
            <img src={myProject.image} alt={myProject.title} style={{ height: "350px", objectFit:'contain' }} />
            <h2 className='text-white lg:text-2xl font-serif lg:mt-3 sm:mt-0'>{myProject.title}</h2>
            <h2 className='text-white lg:text-2xl font-serif mb-3'>{myProject.description}</h2>
            
            <a href={myProject.liveLink} target="_blank" rel="noopener noreferrer">
                <button className='bg-yellow-400 p-1 mr-3 text-white rounded-md font-serif lg:text-2xl'>
                Live View
                </button>
            </a>
            
            <a href={myProject.codeLink} target="_blank" rel="noopener noreferrer">
                <button className='bg-yellow-400 p-1 text-white rounded-md font-serif lg:text-2xl'>
                View Code
                </button>
            </a>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Project
