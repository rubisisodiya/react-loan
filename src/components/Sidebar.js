
import React, { Component } from "react";
import "../styles/Calculator.css";
class SideBar extends Component {
    render(){

        let amount = JSON.parse(localStorage.getItem('amount'));
        


        function getValue(e){
            let a = e.target.getAttribute('amount'); 
            let y = e.target.getAttribute('years'); 
            console.log(a,y);

            this.props.changeValue(a,y);
        }
        let temp1;
        if(amount !== null){
            temp1 = amount.map((amount,i) => {
                return(
                    <li onClick={getValue.bind(this)} key={i} amount={amount.amount} years={amount.years}>
                         Amount: {amount.amount} Months: {amount.years} </li>
                )
            })

        }
        
       
        
      return (
          <div>
              <h2 className="rec">Last 15 Values</h2>
                <ul>
                    {temp1}
                </ul>
          </div>
        
      )
    }
  }

  export default SideBar;
