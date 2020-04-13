import React from 'react';
import './App.css';
import ListItems from './ListItems.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault(); //prevent app from refreshing when Dodaj button is clicked
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key===key) {
        item.text=text;
      }
    })
    this.setState({
    items: items
    })
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">Witamy na Lek!</h2>
       <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Dodaj leki.."
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
            <button type="submit">Dodaj</button>
          </form>
        </header>
        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate={this.setUpdate}></ListItems>
       </div>
    );
  }
}

export default App;
