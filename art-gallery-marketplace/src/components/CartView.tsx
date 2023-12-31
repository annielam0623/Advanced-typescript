import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import CartItem from './CartItem';
import './css/cart.css';

export default function CartView() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-container m-2">
      {!cart.length ? (
        <h1 className="text-light text-center my-5">Your cart is empty.</h1>
      ) : (
        <>
          <h1>Your Cart</h1>
          <div className="text-dark">
            {cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          <hr />
          <h3 className="text-end mx-3">
            Total: ${cart.reduce((s, i) => s + i.price * i.quantity, 0)}
          </h3>
        </>
      )}
    </div>
  );
}





















// type CartItem = {
//   _id: string;
//   title: string;
//   pic: string;
//   description: string;
//   price: number;
//   quantity: number;
// };

// type Props = {
//   item: CartItem;
// };

// export default function CartView() {
//   const { cart } = useContext(CartContext)

//   return <div className="cart-container m-2">
//     { !cart.length
//       ? <h1 className="text-light text-center my-5">Your cart is empty.</h1>
//       : <>
//         <h1>Your Cart</h1>
//         <div className='text-dark'>
//           {cart.map(item => <CartItem key={item._id} item={item} />)}
//         </div>
//         <hr />
//         <h3 className='text-end mx-3'>Total: ${cart.reduce((s, i) => s+i.price*i.quantity, 0)}</h3>
//       </>
//     }
//   </div>
// }

