import React, { useContext} from 'react'
import './MyOrder.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'

const MyOrder = () => {

    const {url,token} = useContext(StoreContext);

    const [data,setData] = useState([]);

    const fetchOrderData = async()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token:token}});
        setData(response.data.data);
        

    }

    useEffect(()=>{
      if(token){
        fetchOrderData();
      }
    },[token]);



  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {
          data.map((order,index)=>{
            return(
              <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item,index)=>{
                  if(index === order.items.length-1){
                    return item.name+" x "+item.quantity;
                  }
                  else{
                    return item.name+" x "+item.quantity+", ";
                  }
                })}</p>
                <p>₹{order.amount}.00</p>
                <p>Itmes:{order.items.length}</p>
                <p><span>&#x25cf;</span><b>{order.status}</b></p>
                <button onClick={fetchOrderData}>Track Order</button>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default MyOrder
