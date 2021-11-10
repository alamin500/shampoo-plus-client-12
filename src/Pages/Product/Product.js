import React from 'react'
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
// import useFirebase from "../../hooks/useFirebase";
// import "./Product.css";

const Product = ({ product }) => {
  const { user } = useAuth();
  const { name, description, price, img, _id } = product;
 return (
    <div className="col-12 col-sm-6 col-lg-4  d-flex justify-content-center align-items-center px-3">
      <div className="Product-card shadow-sm w-100">
        <div className="hover-img m-0">
          <img className="card-img" src={img} alt="" />
        </div>
        <div className="p-4">
          <h5 className="Product-h5">{name}</h5>
          <hr />
          <h3 className="price-h3">{price} $</h3>
          <hr />
          <p className="describe">{description}</p>

          {user?.email ? (
            <Link to={`/purchase/${_id}`}>
              <button className="btn m-2 btn-success">
                Book {name.toLowerCase()}
              </button>
            </Link>
          ) : (
            <Link to={`/login/${_id}`}>
              <button className="btn m-2 btn-success">
                BOOK {name.toLowerCase()}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
 )
}

export default Product
