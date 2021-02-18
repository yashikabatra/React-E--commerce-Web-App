import React, { Component } from 'react';
import { Card } from "antd";
import "../styles/payment_page.css";



class Payment_Page extends Component {
    state = {  }
    render() { 
        return (
            <Card className="payment_card">
                <h1 className="heading_payment">PAYMENT INFORMATION</h1>
            <form>
                <label>Name on Card</label>
                <input type="text" class="form-control"></input>

                <label>Credit Card Number</label>
                <input type="text" class="form-control"></input>

                <label>Exp Month</label>
                <input type="text" class="form-control"></input>

                <label>Exp Year</label>
                <input type="text" class="form-control"></input>

                <label>CVV</label>
                <input type="text" class="form-control"></input>
            </form>
            <button className="btn btn-primary payment_button">DONE</button>
            </Card>
          );
    }
}
 
export default Payment_Page;