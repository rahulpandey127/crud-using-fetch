import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
let TableComp = () => {
  let [msg, setMsg] = useState({ message: "" });
  let [data, setData] = useState([]);
  let [user, setUser] = useState([]);
  let fetchData = async () => {
    let userData = await fetch("http://localhost:3000/api/allUsers");
    let json = await userData.json();
    setData(json.data);
    setMsg(json.msessage);
  };

  useEffect(() => {
    fetchData();
  }, [data, user]);

  let getData = async (id) => {
    console.log(id);
    let user = await axios.get(`http://localhost:3000/api/getUser/${id}`);
    setUser(user.data.data);
  };

  let deleteUser = async (id) => {
    let deluser = await axios.delete(
      `http://localhost:3000/api/deleteUser/${id}`
    );

    setMsg({ message: deluser.data.message });
  };

  useEffect(() => {
    fetchData();
  }, [msg]);

  return (
    <>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Sr. no.</th>
            <th>Image</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th className="action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            i = i + 1;
            return (
              <tr>
                <td>{i}</td>
                <td>
                  <img
                    src={`http://localhost:3000/uploads/`.concat(
                      ele.profilepic
                    )}
                    alt="user-image"
                    className="pic"
                  />
                </td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.mobile}</td>

                <span className="btn-box">
                  <div>
                    <button
                      type="button"
                      className="btn btn-info btn1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      onClick={() => getData(ele._id)}
                    >
                      <VisibilityIcon />
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal2"
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
                              User Details
                            </h1>
                          </div>
                          <div className="modal-body">
                            <div className="d-flex justify-content-between">
                              <div className="w-25  m-2">
                                <img
                                  src={
                                    "http://localhost:3000/uploads/" +
                                    `${user.profilepic}`
                                  }
                                  alt="user-image"
                                  className="pic1"
                                />
                              </div>
                              <div className="w-75  m-2">
                                <div className="p-2 d-flex">
                                  <div className="w-25">Name :</div>
                                  <div className="w-75"> {user.name}</div>
                                </div>
                                <div className="p-2 d-flex">
                                  <div className="w-25">Email :</div>
                                  <div className="w-75"> {user.email}</div>
                                </div>
                                <div className="p-2 d-flex">
                                  <div className="w-25">Mobile :</div>
                                  <div className="w-75"> {user.mobile}</div>
                                </div>
                                <div className="p-2 d-flex">
                                  <div className="w-25">City :</div>
                                  <div className="w-75"> {user.city}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-warning btn1">
                    <EditIcon />
                  </button>

                  <button
                    className="btn btn-danger btn1"
                    onClick={() => deleteUser(ele._id)}
                  >
                    <DeleteIcon />
                  </button>
                </span>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableComp;
