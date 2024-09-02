import React from "react";
import eduBackground from "../assets/eduBackground.png"
import Form from "../components/EduComponents/Form"
import picTwo from "../assets/rafiki.png"
import Map from "../components/EduComponents/ESLMap"

const Education = () => {
  return (
    <>
    <section id="eduheader" className="w-full min-h-[500px] bg-center bg-no-repeat bg-yellow flex justify-center" style={{ backgroundImage: `url(${eduBackground})` }}>
        <div className="flex flex-row justify-center items-end p-10 ">
          <div className="flex space-x-4">
            <button className="btn bg-red w-36 text-white">Financial Aid</button>
            <button className="btn bg-red w-36 text-white">ESL</button>
          </div>
        </div>
    </section>
    <section className="relative w-full bg-no-repeat bg-right-bottom bg-lightBlue p-10"
      style={{ backgroundImage: `url(${picTwo})` }}
     
     >
    <div className="flex items-end justify-center pb-5">
      <div className="flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-4">Ready to dive into the world of NYC education?</h1>
        <p className="text-lg pb-10">
          We know that education can be expensive and many people cannot afford it. Therefore, we have this financial aid calculator to help you see if you qualify for financial aid.
        </p>
        <Form/>
      </div>
      </div>
    </section>

    <section id="eduheader" className="w-full min-h-[500px] bg-contain bg-center bg-no-repeat bg-yellow flex justify-center"
   
    >
        <div className="flex flex-row justify-center items-start p-10">
         <Map/>
        </div>
    </section>


    </>
  )
}

export default Education
