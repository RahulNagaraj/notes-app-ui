import { h, render } from 'preact';
import Counter from './counter';

const appRoot = document.getElementById('root');

render(
  <div>
    <Counter />
  </div>,
  appRoot,
  appRoot.lastChild
);

if (module.hot) {
  module.hot.accept();
}
