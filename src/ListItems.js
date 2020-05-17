import React from 'react';
import './ListItems.css';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value = {item.text}
                    onChange ={
                        (e) =>{
                            props.editItem(e.target.value, item.key)
                        }
                    }
                    />
             
     
                <button className="ToDoItem-Delete" onClick={() => props.deleteItem(item.key)}>
        x
      </button></p>
                
            </div>
        })
    return (
        <div>{listItems}</div>
    )
}

export default ListItems;