import React from 'react';
import BuyType from './buyType.jsx';

class StockTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownOn : false,
        }
    }

    render() {
        return (
            <div>
                 <div className='app_buySellTitle'>               
                    <h3 >Buy AAPL</h3>                  
                </div>
                <BuyType />
            </div>
        );
    }
};

export default StockTitle;

