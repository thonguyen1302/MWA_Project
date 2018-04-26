import { createStore, compose, StoreEnhancer } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './state';

const devtools: StoreEnhancer<IAppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

// export const store = createStore<IAppState>(reducer);
// export const store = createStore(reducer, compose(devtools));

export const store = createStore(reducer);