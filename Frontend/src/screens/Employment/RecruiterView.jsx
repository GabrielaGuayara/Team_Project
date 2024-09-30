import React from 'react'
import { Link } from 'react-router-dom'
function RecruiterView() {
  return (
    <div className="opacity-90 relative w-full h-screen bg-cover bg-center bg-no-repeat ">
    <h1
     className="flex justify-center mt-5"
    >Welcome, Job Recruiter!</h1>
    <div>
      
        <ul>
            <li className="flex justify-center"
            >
                <Link
                 className="text-lg btn btn-lg w-7/12 mt-72 bg-neutral-900 text-white"
                to="/Find-Talent">
                    <button> Find a Talent</button>
                </Link>
            </li>
            <li  className="flex justify-center"
            >
                <Link className="btn btn-lg w-7/12 m-5 text-lg bg-neutral-900 text-white"
                 to="/post-job">
                    <button> Post a Job</button>
                </Link>
            </li>
        </ul>
    </div>
</div>
  )
}

export default RecruiterView