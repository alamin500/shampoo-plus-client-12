import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
const ManageAllOrders = () => {
 const [books, setBooks] = useState([]);
  const [control, setConrol] = useState(false);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/allOrders`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Booking Deleted");
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
  };
  const deleteConfirm = (id) => {
    let clicked = window.confirm("click to delete");
    if (clicked == true) {
      handleDelete(id);
    } else {
    }
  };
 return (
  <div>
      <br />
      <h1>Manage All Orders :{books.length}</h1>
      <div style={{ color: "red" }}>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          onClick={() => setAdmin(!admin)}
        />
        <label for="vehicle1">
          <h3>Admin</h3>
        </label>
      </div>
      <div className="container mt-5">
        {books.map((book, index) => (
          <div className="row align-items-center mx-5">
            <div className="col-1">
              <h3>{index + 1}</h3>
            </div>
            <div className="booking-border col-12 col-sm-6 col-lg-11 d-flex justify-content-center align-items-center m-0 mb-2">
              <div
                style={{ border: "1 px solid #f1f1f1" }}
                className="d-flex mybook-img justify-content-center align-items-center"
              >
                <img src={book.img} alt="" />
                <h5>{book.name}</h5>
                <p>{book.description}</p>
                <div style={{ width: "140px" }}>
                  {admin && (
                    <button
                      className="btn btn-danger "
                      onClick={() => deleteConfirm(book._id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 )
}

export default ManageAllOrders
