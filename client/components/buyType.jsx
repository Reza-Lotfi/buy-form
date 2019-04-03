import React from 'react';

class BuyType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownActive : false,
        }
    }

    toggleDropDown() {
        
        this.setState({
            dropDownActive : !this.state.dropDownActive
        })
        
    }

    render() {
        return (
        <div className="app_buySellTitleButton" onClick={() => {this.toggleDropDown()}}>
             <svg width="28" height="28" viewBox="0 0 28 28">
                 <path fillRule="evenodd" d="M14,16 C12.8954305,16 12,15.1045695 12,
                    14 C12,12.8954305 12.8954305,12 14,12 C15.1045695,12 16,12.8954305 16,
                    14 C16,15.1045695 15.1045695,16 14,16 Z M6,16 C4.8954305,16 4,15.1045695 4,
                    14 C4,12.8954305 4.8954305,12 6,12 C7.1045695,12 8,12.8954305 8,14 C8,15.1045695 7.1045695,
                    16 6,16 Z M22,16 C20.8954305,16 20,15.1045695 20,14 C20,12.8954305 20.8954305,12 22,12 C23.1045695,
                    12 24,12.8954305 24,14 C24,15.1045695 23.1045695,16 22,16 Z">
                 </path>
             </svg>
             {
                 this.state.dropDownActive &&
                 <div id='app_buySellTitleDropdown'>
                    <div>
                        <h3 id='app_buySellOrderTypeTitle'>Order Type</h3>
                    </div>
                    <p className='buySell_buy-type_dropdown_option'>Market Order</p>
                    <p className='buySell_buy-type_dropdown_option'>Limit Order</p>
                    <p className='buySell_buy-type_dropdown_option'>Stop Loss Order</p>
                    <p className='buySell_buy-type_dropdown_option'>Stop Limit Order</p>
                </div>
             }
        </div>
        );
    }
}

export default BuyType;