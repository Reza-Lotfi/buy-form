import React from 'react';

import StockTitle from './title.jsx';
import Shares from './shares.jsx';
import Pricing from './pricing.jsx';
import EstimatedCost from './estimatedCost.jsx';
import CheckBox from './checkBox.jsx';
import ReviewOrder from './reviewOrder.jsx';
import BuyingPower from './buyingPower.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode : 'Market Order',
            shares: 'none',
            price: 0
        };
        
    }

    componentDidMount() {
        var url = '/stocks/AAPL'
        var appThis = this;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(result => {
            result = result[0].currentPrice;
            appThis.setState({
                price : result
            })
        })
    }

    changeMode(event) {
        
        this.setState({
            mode : event.target.textContent
        },
        function() {console.log(this.state.mode)}
        )
        
    }

    handleShares(e) {
        var val = e.target.value;
        console.log(e.target.value === '');
        if(e.target.value === '' || e.target.value === '0') {
            console.log('okk')
            val = 'none';
        }
        this.setState({
           shares : val
        }, () => {console.log(this.state.shares)})
    }

    render() {
        return (
            <form className='app_buySell_orderForm'>
               <div className='app_buySell_cardHeader'>
                   <StockTitle changeMode={this.changeMode.bind(this)}/>
               </div> 
               <div className='app_buySell_orderInfo'>
                        <Shares handleShares={this.handleShares.bind(this)}/>
                        <Pricing price={this.state.price}/>
                        <EstimatedCost price={this.state.price} handleCost={this.state.shares}/>
               </div>
               <CheckBox />
               <ReviewOrder price={this.state.price} sharesNum={this.state.shares}/>
               <BuyingPower />
        
            </form>
        )
    }
}

export default App;