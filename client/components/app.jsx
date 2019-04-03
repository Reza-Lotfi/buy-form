import React from 'react';
import '../../public/styles/app.css';
//components
import StockTitle from './title.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app_buySellBody'>
                <StockTitle />
            </div>
        )
    }
}

export default App;