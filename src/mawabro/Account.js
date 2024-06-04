import React from 'react'

const Accountm = () => {
  return (
    <>
    <div className="p-2">

        <h1 className="fs-2  font-black font-sans ">change password</h1>

    <div className="d-flex my-3 rounded-lg border border-dark p-2 text-center">
            <input
              style={{ border: "none", outline: "none" }}
              placeholder="old password"
              type="number"
              name="password"
              id="name"
              className="border-0  w-100"
            />

            
          </div>
    <div className="d-flex my-3 rounded-lg border border-dark p-2 text-center">
            <input
              style={{ border: "none", outline: "none" }}
              placeholder="new password"
              type="number"
              name="password"
              id="name"
              className="border-0  w-100"
            />

            
          </div>
    <div className="d-flex my-3 rounded-lg border border-dark p-2 text-center">
            <input
              style={{ border: "none", outline: "none" }}
              placeholder="confirm password"
              type="number"
              name="password"
              id="name"
              className="border-0  w-100"
            />

            
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn  btn-primary font-serif">update</button>
          </div>

    </div>
    </>
  )
}

export default Accountm