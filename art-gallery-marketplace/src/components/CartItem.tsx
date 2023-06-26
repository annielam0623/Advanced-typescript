
import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

type Props = {
  item: CartContext.CartItem;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { handleCartRemove } = useContext(CartContext);

  return (
    <div className="cart-item bg-light rounded-end my-3">
      <div className="mh-100 item-img-container">
        <img src={item.pic} alt={item.title} className="item-img" />
      </div>
      <div className="item-details p-2">
        <h3 className="d-inline">{item.title}</h3>
        <button
          className="d-inline float-end bg-dark text-light"
          onClick={() => handleCartRemove(item)}
        >
          Remove
        </button>
        <p className="h-50 p-1 my-1 item-description border-dark-subtle">
          {item.description}
        </p>
        <span className="float-start mt-2 fs-5">Price: ${item.price}</span>
        <span className="float-end mt-2 fs-5">Quantity: {item.quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
