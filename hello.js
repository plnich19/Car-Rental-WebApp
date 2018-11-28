const e = React.createElement;

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return 'Hello! This is an admin page';
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Hello), domContainer);
