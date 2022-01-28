import React from 'react';
import EmployeeCard from '../src/component/EmployeeDetails/EmployeeCard';
import { create } from 'react-test-renderer';
import data from "./mock/employeeData";

describe('Employee Card Details unit test',()=>{
    test('testing app button', () => {
    let tree = create(<EmployeeCard user={data} />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})

