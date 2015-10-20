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
    expect(calculator.state.message).toBe('');
  });

  it('There should be no initial text component', () => {
    const label = TestUtils.scryRenderedDOMComponentsWithClass(calculator, 'alert');
    expect(label.length).toBe(0);
  });

  it('should edit the value', () =>{
    calculator.handleSubmit = jest.genMockFunction();
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const form = calculator.refs.form;
    node.value = '22';
    TestUtils.Simulate.change(node);
    TestUtils.Simulate.submit(form);

    expect(calculator.handleSubmit).toBeCalled();
  });

  it('should edit the value #2', () =>{
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const form = calculator.refs.form;
    node.value = '22';
    TestUtils.Simulate.change(node);
    TestUtils.Simulate.submit(form);
    expect(calculator.state.age).toBe(22);

    const label = TestUtils.findRenderedDOMComponentWithClass(calculator, 'alertText');
    expect(ReactDOM.findDOMNode(label).textContent).toBe('You are allowed to go 18 years old and above.');
  });

  it('should edit the value #3', () =>{
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const form = calculator.refs.form;
    node.value = '30';
    TestUtils.Simulate.change(node);
    TestUtils.Simulate.submit(form);

    const label = TestUtils.findRenderedDOMComponentWithClass(calculator, 'alertText');
    expect(calculator.state.age).toBe(30);
    expect(ReactDOM.findDOMNode(label).textContent).toBe('You are allowed to go 22 years old and above.');
  });

  it('should edit the value #4', () =>{
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const form = calculator.refs.form;
    node.value = '10.4';
    TestUtils.Simulate.change(node);
    TestUtils.Simulate.submit(form);

    const label = TestUtils.findRenderedDOMComponentWithClass(calculator, 'alertText');
    expect(calculator.state.age).toBe(10);
    expect(ReactDOM.findDOMNode(label).textContent).toBe("You're too young for dating, go play with lego bricks or something.");
  });

  it('should edit the value #5', () =>{
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const form = calculator.refs.form;
    node.value = '23.9';
    TestUtils.Simulate.change(node);
    TestUtils.Simulate.submit(form);
    expect(calculator.state.age).toBe(23);

    const label = TestUtils.findRenderedDOMComponentWithClass(calculator, 'alertText');
    expect(ReactDOM.findDOMNode(label).textContent).toBe('You are allowed to go 19 years old and above.');
  });

  it('It should close the message', () =>{
    let node = TestUtils.findRenderedDOMComponentWithClass(calculator, 'age');
    const form = calculator.refs.form;
    node.value = '23.9';
    TestUtils.Simulate.change(node);
    TestUtils.Simulate.submit(form);
    expect(calculator.state.age).toBe(23);

    let close = TestUtils.findRenderedDOMComponentWithClass(calculator, 'close');
    let label = TestUtils.scryRenderedDOMComponentsWithClass(calculator, 'alertText');
    TestUtils.Simulate.click(close);
    expect(label.length).toBe(1);

    label = TestUtils.scryRenderedDOMComponentsWithClass(calculator, 'alertText');
    expect(label.length).toBe(0);
  });
});
