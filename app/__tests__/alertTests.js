jest.dontMock('../calculator');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Calculator from '../calculator';

let calculator = '';

describe('Calculator tests', () => {
  beforeEach(() => {
    calculator = TestUtils.renderIntoDocument(<Calculator/>);
  });

  it('Should check initial state', () => {
    expect(calculator.state.age).toBe(20);
  });

  it('Should check initial text of component', () => {
    const label = TestUtils.findRenderedDOMComponentWithClass(calculator, 'alert');
    expect(ReactDOM.findDOMNode(label).textContent).toBe('You are allowed to go 17 years old and above.');
  });

  it('should edit the value', () =>{
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const label = TestUtils.findRenderedDOMComponentWithClass(calculator, 'alert');
    node.value = '22';
    TestUtils.Simulate.change(node);
    expect(calculator.state.age).toBe(22);
    expect(ReactDOM.findDOMNode(label).textContent).toBe('You are allowed to go 18 years old and above.');
  });

  it('should edit the value #2', () =>{
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const label = TestUtils.findRenderedDOMComponentWithClass(calculator, 'alert');
    node.value = '30';
    TestUtils.Simulate.change(node);
    expect(calculator.state.age).toBe(30);
    expect(ReactDOM.findDOMNode(label).textContent).toBe('You are allowed to go 22 years old and above.');
  });

  it('should edit the value #3', () =>{
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const label = TestUtils.findRenderedDOMComponentWithClass(calculator, 'alert');
    node.value = '10';
    TestUtils.Simulate.change(node);
    expect(calculator.state.age).toBe(10);
    expect(ReactDOM.findDOMNode(label).textContent).toBe("You're too young for dating, go play with lego bricks or something.");
  });
});
