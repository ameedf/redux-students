import { createStore } from 'redux';
import { reducer } from './reducer';

export const applicationStore = createStore(reducer);