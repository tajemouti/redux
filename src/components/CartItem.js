import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from '../icons';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

const CartItem = ({
  id, img, title, price, amount,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        <button
          type="button"
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type="button"
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          type="button"
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
