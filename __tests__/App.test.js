import React from 'react';
import App from '../src/App';
import { create } from 'react-test-renderer'

describe('App unit test',()=>{
    test('testing app button', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})

