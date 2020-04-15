import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move'; //import react-flip-move animation

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item => //arrow function for text output and deleting an item from the list
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type type="text" 
                    id={item.key} //each item in the list will have it's own unique key
                    value={item.text}
                    onChange = { (e) => {
                            props.setUpdate(e.target.value, item.key) //allow for editing item in the list when clicking on the item
                        }
                    }
                    />
                <span>
                    <FontAwesomeIcon className="faicons" 
                    icon='trash'
                    onClick= { () => props.deleteItem(item.key) //allow for deleting item in the list when clicking on trash icon
                    } />
                </span>
                </p>
            </div>
        })
    return(
        <div> 
        <FlipMove duration={300} easing="ease-in-out"> 
            {listItems}
        </FlipMove>
        </div>
    )
}
//above return element for adding animation when adding and deleting an item from the list
export default ListItems;