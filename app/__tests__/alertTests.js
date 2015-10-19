jest.dontMock('../calculator');
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Calculator from '../calculator';

let calculator = '';

describe('Calculator tests', () => {
  beforeEach(() => {
    calculator = TestUtils.renderIntoDocument(<Calculator/>);
  });

  it('Check initial state', () => {
    expect(calculator.state.age).toBe(20);
  });
});
