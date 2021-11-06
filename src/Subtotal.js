import react from "react"
import './Subtotal.css';
import CorrencyFormat from 'react-currency-format';
function Subtotal() {
    return <div className='Subtotal'>
         <CurrencyFormat
           renderText={(value) => (
               <>
               <p>
                   Subtotal ({basket.length} items):
                   <strong>{` ${value}`}</strong>
               </p>
               <small className='subtotal__gift'>
                   <input type='checkbox'/> This order contains a gift
               </small>
               </>
           )}
          decimalScale={2}
          value={getBAsketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
          />
        
   </div>;
}
export default Subtotal;