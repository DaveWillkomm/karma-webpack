import React from 'react';
import Test from '../js/Test.jsx';
import { shallow } from 'enzyme';

describe('Test', () => {
  it('works', () => {
    const testComponent = shallow(<Test />);

    expect(testComponent.find('.test').length).toBe(1);
  });
});
