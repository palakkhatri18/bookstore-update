import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bookData from './BookDetail';
import './rich.css';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import ReactDOM from 'react-dom'
import CheckoutForm from './Checkoutform';

const ViewBook = () => {
  const { bookId } = useParams();
  const book = bookData.find(book => book.id === bookId);
  const [pincode, setPincode] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(false);

  const checkDelivery = () => {
    // Mock delivery status check
    if (pincode === '123456') {
      setDeliveryStatus('Delivery available to this pincode.');
      setIsDeliveryAvailable(true);
    } else {
      setDeliveryStatus('Delivery not available to this pincode.');
      setIsDeliveryAvailable(false);
    }
  };

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="contain">
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-4 col-12 mb-3 d-flex justify-content-center">
          <img src={book.url} alt={book.title} className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-8 col-12 mb-3 text-justify">
          <p className="head">{book.title}</p>
          <p className="auth"><b>Written By:</b> {book.author}</p>
          <p className="auth"><b>Category:</b> {book.category}</p>
          <p className="sub-head">{book.tag}</p>
          <hr />
          <p className="description">{book.description}</p>
        </div>
        <div className="col-lg-3 col-md-4 col-12 mb-3 d-flex justify-content-center">
          <div className="card">
            <h3 className="card-header">Buy Now</h3>
            <div className="card-body">
              <h5 className="card-title">PaperBack: {book.price}</h5>
              <p className="card-text">Inclusive of All taxes</p>
              <div className="pincode-checker mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button className="btn btn-secondary mt-2" onClick={checkDelivery}>
                  Check Delivery
                </button>
                <p className={`delivery-status mt-2 ${isDeliveryAvailable ? 'text-success' : 'text-danger'}`}>
                  {deliveryStatus}
                </p>  
              </div>
              <button className="btn btn-success mt-3 me-2">Add to Cart</button>
              <button type='button' className="btn btn-primary mt-3 ms-2">
                Buy Now
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBook;
