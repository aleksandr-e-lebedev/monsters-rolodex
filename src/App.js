import React from 'react';

import CardList from './components/card-list/card-list';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    this.setState({
      monsters: users,
    });
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
