import {IoIosCheckmarkCircle} from "react-icons/io";

import "./order.css";

export default function OrderPlacedModal({onClick}){
    return(
        <div className="modal-container" onClick={onClick}>
            <div className="modal-content-container">
                <IoIosCheckmarkCircle className="order-placed-logo"/>
                <p className="order-placed-large-text">Order Placed Successfully</p>
                <p className="order-placed-small-text">It will be delivered in 5 days</p>
            </div>
        </div>
    )
}