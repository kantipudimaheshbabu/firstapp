import React from "react";
import { FaPen } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";

const Securitym = () => {
  return (
    <>
      <div className="col-12 p-1">
        <div className="p-3">
          <label htmlFor="" className="py-2">
            FIrst Name
          </label>
          <div className="d-flex rounded-lg border border-dark p-2 text-center">
            <input
              style={{ border: "none", outline: "none" }}
              placeholder="name"
              type="text"
              name="name"
              id="name"
              className="border-0  w-100"
            />

            <FaPen />
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="" className="py-2">
            Last Name
          </label>
          <div className="d-flex rounded-lg border border-dark p-2 text-center">
            <input
              style={{ border: "none", outline: "none" }}
              placeholder="name"
              type="text"
              name="name"
              id="name"
              className="border-0  w-100"
            />

            <FaPen />
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="" className="py-2">
            Email
          </label>
          <div className="d-flex rounded-lg border border-dark p-2 text-center">
            <input
              style={{ border: "none", outline: "none" }}
              placeholder="name"
              type="email"
              name="name"
              id="name"
              className="border-0  w-100"
            />

            <FaPen />
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="" className="py-2">
            Phone Number
          </label>
          <div className="d-flex rounded-lg border border-dark p-2 text-center">
            <input
              style={{ border: "none", outline: "none" }}
              placeholder="name"
              type="number"
              name="name"
              id="name"
              className="border-0  w-100"
            />

            <BsShieldFillCheck className="text-primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Securitym;
