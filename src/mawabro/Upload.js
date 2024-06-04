import React from "react";

import { BsBehance } from "react-icons/bs";
import { ImGoogleDrive } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";

const Uploadm = () => {
  return (
    <>
      <div className="p-2 sm:grid grid-cols-1 md:grid-cols-3 ">


        <div className="box-1">
          <h1 className="font-black font-serif fs-2 my-2 ">1.Behance</h1>
          <div className="d-flex flex-start">
            <div className=" p-4 border-dark rounded-lg  border-2 d-flex flex-column justify-center align-items-center ">
              <div className="my-2">
                <BsBehance className="fs-2" />
              </div>
              <div className="">
                <button className="btn btn-outline-dark">Upload Project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2">
          <h1 className="font-black font-serif fs-2 my-2 ">2.Google</h1>
          <div className="d-flex flex-start">
            <div className=" p-4 border-dark rounded-lg  border-2 d-flex flex-column justify-center align-items-center ">
              <div className="my-2">
                <ImGoogleDrive className="fs-2" />
              </div>
              <div className="">
                <button className="btn btn-outline-dark">Upload Project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="box-3">
          <h1 className="font-black font-serif fs-2 my-2 ">3.Github.</h1>
          <div className="d-flex flex-start">
            <div className=" p-4 border-dark rounded-lg  border-2 d-flex flex-column justify-center align-items-center ">
              <div className="my-2">
                <FaGithub className="fs-2" />
              </div>
              <div className="">
                <button className="btn btn-outline-dark">Upload Project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="box-4">
          <h1 className="font-black font-serif fs-2 my-2 ">4.Dribble</h1>
          <div className="d-flex flex-start">
            <div className=" p-4 border-dark rounded-lg  border-2 d-flex flex-column justify-center align-items-center ">
              <div className="my-2">
                <FaUpload className="fs-2" />
              </div>
              <div className="">
                <button className="btn btn-outline-dark">Upload Project</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Uploadm;
