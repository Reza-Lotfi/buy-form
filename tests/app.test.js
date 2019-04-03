import { isTSAnyKeyword } from "@babel/types";
import { shallow } from 'enzyme';
import React from 'react';
//components
import BuyType from '../client/components/buyType.jsx';
// import App from '../client/components/app.jsx';


test('adds 1 + 2 to equal 3', () => {
    expect(true).toBe(true);
  });

  describe('functionality of the title section', () => {

    it('Should open up a menu when the button element is pressed', () => {
        const component = shallow(<BuyType />);

        expect(component.find('.buySell_buy-type_dropdown_option').length).toBe(0);
        expect(component.find('.app_buySellTitleButton').length).toBe(1);
        component.find('.app_buySellTitleButton').simulate('click');
        expect(component.find('.buySell_buy-type_dropdown_option').length).toBe(4);
    });

    it('Pop-up menu should be able to change the state of the App react component', () => {
      
    });

    it('Depending on price should calculate the price of all the shares you want to buy', () => {

    });

  });

