import App from './App';
import ReactDOM from 'react-dom'

test('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDOM.render(<App />, div);
 ReactDOM.unmountComponentAtNode(div);
});


test('renders without crashing2', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
 });


 test('renders without crashing3', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
 });
