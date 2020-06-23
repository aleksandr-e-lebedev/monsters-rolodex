import React from 'react';

import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    this.setState({
      monsters: users,
    });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          value={searchField}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
