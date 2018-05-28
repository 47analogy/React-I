import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <div classname='task'>
        <ul>
          {this.props.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
      </div>
    )
  }
}
