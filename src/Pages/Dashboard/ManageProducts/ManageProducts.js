import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageProducts = () => {
 const [products, setProducts] = useState([]);
  const [control, setConrol] = useState(false);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [control]);
console.log(products)
   const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteProducts/${id}`, {
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
    <div className='container '>
      <div className='row g-5'>
        <h1 className='product-h1 pt-5' style={{ textAlign: 'center' }}>
          OUR PACKAGES
        </h1>
        {products.map((product) => (
          <div>
            <div className='hover-img m-0'>
              <img className='card-img' src={product.img} alt='' />
            </div>
            <div className='p-4'>
              <h5 className='Product-h5'>{product.name}</h5>
              <hr />
              <h3 className='price-h3'>{product.price} $</h3>
              <hr />
           <p className='describe'>{product.description}</p>
           <button
                        className="btn btn-danger "
                        onClick={() => deleteConfirm(product._id)}
                      >
                        Delete
                      </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
