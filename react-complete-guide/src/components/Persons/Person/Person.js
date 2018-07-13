import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';


class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
                
      }
    
      componentWillMount() {
        console.log(' [Person.js] Inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log(' [Person.ls] Inside componentDidMount()');
      }

    render() {

        console.log(' [Person.js] Inside render()');
        
        return (
            <React.Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        )
    }
}

export default withClass(Person, classes.Person);