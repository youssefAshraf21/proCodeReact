import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("")
    const [age, setAge] = useState(5)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")
    function handleNameChange(e :any) {
        setName(e.target.value)
    }

    function handleAgeChange(e:any) {
        setAge(e.target.value)
    }

    function handleCommentChange(e:any) {
        setComment(e.target.value)
    }

    function handlePaymentChange(e:any) {
        setPayment(e.target.value)
    }

    function handleShippingChange(e:any) {
        setShipping(e.target.value)
    }
    return (
        <div>
            <input type="text " value={name} onChange={handleNameChange} className='border-2 ml-4 my-4'/>
            <p className='ml-4'>name: {name}</p>   

            <input type="number" value = {age} onChange={handleAgeChange} className='border-2 ml-4 my-4'/>
            <p className='ml-4'>age: {age}</p>

            <textarea value={comment} onChange= {handleCommentChange} className='border-2 ml-4 my-4' placeholder='write your comment'/>
            <p className='ml-4'>comment: {comment}</p>

            <select value={payment} onChange= {handlePaymentChange} className='border-2 ml-4 my-4'>
                <option value="">Select a payment method</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">PayPal</option>
            </select>
            <p className='ml-4'>payment Method: {payment}</p>

            <label >
                <input type="radio" name="shipping" value="pickup" checked={shipping === "pickup"} onChange={handleShippingChange} className='ml-4 my-4'/>
                pick Up
            </label>
            <br/>   
            <label >
                <input type="radio" name="shipping" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange} className='ml-4 my-4'/>
                Delivery
            </label>
            <p className='ml-4'>Shipping Method: {shipping}</p>
        </div>
    )
}

export default MyComponent