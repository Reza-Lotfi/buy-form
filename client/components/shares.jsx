import React from 'react';
//compnents
import Input from './input.jsx';

class Shares extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='shares_buySell_section'>
                <label>
                    <div className='shares_buySell_title'>Shares</div>
                    <Input placeHolder='0' handleShares={this.props.handleShares}/>
                </label>
            </div>
        );
    }
};

export default Shares;