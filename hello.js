const e = React.createElement;

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return 'You can add, update and delete car information.';
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Hello), domContainer);
