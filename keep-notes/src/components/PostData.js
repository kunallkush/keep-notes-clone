import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function PostData() {
  const [showModal, setShowModal] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    setShowModal(true);
    // fetchData();
  }, []);

  const handleSendData = () => {
    axios
      .post("https://chimpu.xyz/api/post.php", { phonenumber: phoneNum })
      .then((response) => {
        if (response.data.error === false) {
          setShowModal(false);
          setPhoneNum("");
          setData(response.data);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.msg,
          });
        }
        // console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching Data", error);
      });
  };

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show" : ""} mt-5`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              Please provide a phone number to retrieve data.
              </h1>
              {/* <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button> */}
            </div>
            <div className="modal-body">
              <input
                type="number"
                class="form-control"
                value={phoneNum}
                placeholder="Enter Phone Number"
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSendData}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {data && <div className="container d-flex justify-content-center mt-3"><h3>Data received: <span className="fs-3" style={{color:"white"}}>{data.msg}</span></h3></div>}
    </>
  );
}

export default PostData;
