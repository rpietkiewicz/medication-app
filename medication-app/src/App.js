import React from 'react';
import './App.css';
import ListItems from './ListItems.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'; //import fortawesome to add icon library 

library.add(faTrash); //adding Trash icon from fortawesome

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [], //set to empty array
      currentItem: {
        text:'', //set to empty string
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this); //this line and below three lines are bindings for the different list item methods
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) { //method for handling the storage of the item in the list 
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e) { //method for adding item to the list
    e.preventDefault(); //prevent app from refreshing when Dodaj button is clicked
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'', //empty string, because user will input for adding title to item
          key:'' //each item added will also have its own unique key
        }
      })
    }
  }

  deleteItem(key) { //method for deleting item from the list
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }

  setUpdate(text, key) { //method for editing the item from the list
    const items = this.state.items;
    items.map(item => {   
      if(item.key===key) { //if statement within the arrow function for, item in list having same key
        item.text=text;
      }
    })
    this.setState({
    items: items
    })
  }

  render() { //what the app will output in the browser
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
