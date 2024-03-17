import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        emptyCart,
        updateItemQuantity,
        removeItem
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) totalItems : ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return(
                                    <tr>
                                    <td>
                                        <img src={item.img} style={{height: '6rem'}} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>Quantity({item.quantity})</td>
                                    <td>
                                        <button 
                                            className="btn btn-info ms-2"
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >-</button>
                                        <button 
                                            className="btn btn-info ms-2"
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        >+</button>
                                        <button 
                                            onClick={() => removeItem(item.id)}
                                            className="btn btn-danger ms-2">
                                            Remove Item
                                        </button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h3>Total Price: $ {cartTotal}</h3>
                </div>
                <div className="col-auto"> 
                        <button 
                            onClick={() => emptyCart()}
                            className="btn btn-danger m-2">
                            Clear Cart
                        </button>
                        <button className="btn btn-primary">
                            Buy now
                        </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;