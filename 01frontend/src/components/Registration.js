import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Registration = () => {
  let [res, setRes] = useState([]);
  let navigate = useNavigate();
  let [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    profilepic: "",
  });

  let submitHandler = async (e) => {
    e.preventDefault();
    try {
      let sendData = await axios.post(
        "http://localhost:3000/api/createUser",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(sendData);
      setRes(sendData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    navigate("/users");
  }, [res]);
  return (
    <div className="w-100 mt-2 d-flex justify-content-end">
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <AddBoxIcon /> Add User
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center w-100 py-1 px-0"
                id="exampleModalLabel"
              >
                User Registration
              </h1>
            </div>
            <div className="modal-body">
              <form enctype="multipart/form-data">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="name"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="mobile"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setData({ ...data, mobile: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <label
                    for="exampleInputPassword1"
                    className="form-label w-25"
                  >
                    City
                  </label>
                  <div className="w-25">
                    <select
                      className="py-1 px-0"
                      name="city"
                      onChange={(e) => {
                        setData({ ...data, city: e.target.value });
                      }}
                    >
                      <option>Mau</option>
                      <option>Lucknow</option>
                      <option>Noida</option>
                      <option>Gorakhpur</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3  align-items-center">
                  <label
                    for="exampleInputPassword1"
                    className="form-label w-25"
                  >
                    Upload Image
                  </label>
                  <div className="input-group mb-3 w-50">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                      name="profilepic"
                      onChange={(e) => {
                        setData({ ...data, profilepic: e.target.files[0] });
                      }}
                    />
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    className="btn btn-primary  w-25"
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
