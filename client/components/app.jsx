import React from 'react';
import '../../public/styles/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app_buySellBody'>
               <div className='app_buySellTitle'>
               <svg width='12px' height='15px' viewBox='0 0 12 15' version='1.1'></svg>
                   <h3 >Buy AAPL</h3>
               </div>
            </div>
        )
    }
}

export default App;