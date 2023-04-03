import { render as rtlRender } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';

import {store} from '../store';


export const render = (ui: React.ReactElement) => {
  const renderResult = rtlRender(
      <Provider store={store}>{ui}</Provider>
  )
  return {
    ...renderResult,
    store,
  }
}