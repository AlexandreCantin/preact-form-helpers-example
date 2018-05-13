import "./style";
import { h, Component } from "preact";

import Example1 from './components/examples/example-1';
import Example2 from './components/examples/example-2';
import Example3 from './components/examples/example-3';
import Example4 from './components/examples/example-4';

// Form object
export default class App extends Component {

  constructor(props) {
    super(props);
  }


  render({}, { form }) {
    return (
      <main>
        <h1>Preact-forms-helper example application</h1>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
      </main>
    );
  }
}