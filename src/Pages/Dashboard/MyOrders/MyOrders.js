import React from 'react'
import { useEffect } from "react";
import { useState } from "react";

import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
   const { user } = useAuth();
  const [books, setBooks] = useState([]);
  const [control, setConrol] = useState(false);
  const [deletes, setDelete] = useState(false);
  useEffect(() => {
    fetch(`https://secure-anchorage-89979.herokuapp.com/allBooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [control]);
   const handleDelete = (id) => {
    fetch(`https://secure-anchorage-89979.herokuapp.com/deleteBook/${id}`, {
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
      setDelete(true);
      handleDelete(id);
    } else {
      setDelete(false);
    }
  };
  let count = 1;
 return (
      <div className="container mt-5">
      {books.length === 0 ? (
        <button variant="primary" disabled>
          <spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </button>
      ) : (
        <>
          <h1>My books</h1>
          {books.map(
            (book, index) =>
              book.email === user.email && (
                <div className="row booking-border mx-5">
                  <div className="col-12 col-sm-6 col-lg-11 d-flex justify-content-center align-items-center">
                    <div
                      style={{ border: "1 px solid #f1f1f1" }}
                      className="d-flex mybook-img justify-content-center align-items-center"
                    >
                      <div className="col-1">
                        <h3>{count++}</h3>
                      </div>
                      <img src={book.img} alt="" />
                      <h5>{book.name}</h5>
                      <p>{book.description}</p>
                      <button
                        className="btn btn-danger "
                        onClick={() => deleteConfirm(book._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </>
      )}
    </div>
 )
}

export default MyOrders
