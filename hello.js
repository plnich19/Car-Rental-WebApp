const e = React.createElement;

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
     return (
     
            " "+this.state.date.toLocaleDateString()+""
        );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Hello), domContainer);
