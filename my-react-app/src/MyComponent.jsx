// onChange =   event handler used primarly with form elements
//              ex. <input>, <textarea>, <select>, <radio>
//              Triggers a function every time the value of the input changes

import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("delivery")

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions, if any."/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="gift card">gift card</option>
            </select>
            <p>Payment method: {payment}</p>

            <label>
                <input type="radio" value="pickup" checked={shipping === "pickup"} onChange={handleShippingChange}/>
                Pickup
            </label>
            <br />
            <label>
                <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
            
        </div>
    );
}

export default MyComponent