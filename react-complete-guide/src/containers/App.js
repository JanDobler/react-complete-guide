import React, { PureComponent } from 'react';

import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'abc1', name: 'Max', age: 28},
        { id: 'abc2', name: 'Jan', age: 26},
        { id: 'abc3', name: 'Laura', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    }

  }

  componentWillMount() {
    console.log(' [App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log(' [App.ls] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUdapte', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUdapte');
  }

  // state = {
  //   persons: [
  //     { id: 'abc1', name: 'Max', age: 28},
  //     { id: 'abc2', name: 'Jan', age: 26},
  //     { id: 'abc3', name: 'Laura', age: 26}
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
        return {
          showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked + 1
        }
    } );
  }

  render() {

    console.log(' [App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
        <React.Fragment>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </React.Fragment>
    );
    // return React.createElement('div', {className: 'App'},
    //         React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
