import React from "react";

const Profile = () => {
  return (
    <>
    <div className="p-3">
      <h2 className="fs-3 fw-bolder mb-4 my-3" style={{ color: "rgb(23, 5, 69)" }}>
        Profile Information
      </h2>

      <div className="row">
        <div className="col-md-6 ">
          <div className="d-flex align-items-center">
            <img
              width={200}
              src="https://i0.wp.com/www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png"
              alt=""
              className=""
            />
            <span
              className="fs-5 fw-bolder"
              style={{ color: "rgb(23, 5, 69)" }}
            >
              minimum width of 300px
            </span>
          </div>
        </div>
        <div className=" col-md-6  d-flex justify-end align-items-center ">
          <button className="btn btn-outline-primary">
            change profile picture
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-12">
          <label for="display" className="form-label">
            Display Name
          </label>
          <input
            type="name"
            className="form-control"
            id="display"
            placeholder="name"
          />

          <label for="rate" className="form-label">
            Hourly Rate
          </label>
          <input
            type="number"
            className="form-control"
            id="rate"
            placeholder="1000"
          />

          <label for="display" className="form-label">
            Professional Title
          </label>
          <input
            type="name"
            className="form-control"
            id="display"
            placeholder="designer"
          />

          <label for="exampleFormControlTextarea1" className="form-label">
            About Yourself
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>

          <label for="date" className="form-label">
            Professional Title
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="dd/mm/yyyy"
          />

          <label for="timez" className="form-label">
            Time Zones
          </label>

          <select
            id="timez"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>time zones</option>
            <option value="1">new delhi</option>
            <option value="2">thailand</option>
            <option value="3">america</option>
          </select>
        </div>
        <div className="col-md-6 col-12">
          <label for="gender" className="form-label">
            Gender
          </label>
          <div className=" d-flex mb-2 mt-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
              />
              <label className="form-check-label" for="male">
                male
              </label>
            </div>
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
              />
              <label className="form-check-label" for="female">
                female
              </label>
            </div>
          </div>

          <label for="avail" className="form-label">
            Availability
          </label>

          <select
            id="avail"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>full time 40hr/week</option>
            <option value="1">part-time 10-20hr</option>
            <option value="2">free lancer</option>
            <option value="3">full time</option>
          </select>

          <div className="">
            <label for="exper" className="form-label">
              Experience
            </label>

            <div className="d-flex">
              <div className="col-md-6">
                <select
                  id="avail"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-md-6">
                <select
                  id="avail"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>

          <label for="avail" className="form-label">
            Your Skills
          </label>

          <select
            id="avail"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>html</option>
            <option value="1">css</option>
            <option value="2">react</option>
            <option value="3">python</option>
          </select>
          <label for="avail" className="form-label">
            Primary Skills
          </label>

          <select
            id="avail"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>html</option>
            <option value="1">css</option>
            <option value="2">react</option>
            <option value="3">python</option>
          </select>

          <label for="display" className="form-label">
            Skype
          </label>
          <input
            type="name"
            className="form-control"
            id="display"
            placeholder="skype"
          />

          <label for="display" className="form-label">
            Place
          </label>
          <input
            type="name"
            className="form-control"
            id="display"
            placeholder="Guntur"
          />
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-primary px-5 my-3">save</button>
      </div>

      </div>
    </>
  );
};

export default Profile;
