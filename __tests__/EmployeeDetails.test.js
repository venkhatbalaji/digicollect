import React from 'react';
import EmployeeDetails from '../src/component/EmployeeDetails/EmployeeDetails';
import { create } from 'react-test-renderer'

describe('Employee Details unit test',()=>{
    test('testing app button', () => {
    let tree = create(<EmployeeDetails />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})

