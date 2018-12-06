import React, { Component } from 'react';
import Item from './canvasComponents/Item.js'
import Target1 from './canvasComponents/Target1.js'
import Target2 from './canvasComponents/Target2.js'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import style from './canvas.css'


class Canvas extends Component {
    state = {
        items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
            { id: 5, name: 'Item 5' }
        ]
    }

modelItem = (id) => {
    console.log('model ' + id)
}

saveItem = (id) => {
    console.log('save ' + id)
}

render() {
    return(
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
            </header>
            <div className="App-intro">
                <div className="app-container">
                    <div className="item-container">
                    
                        {this.state.items.map((item, index) => (
                            <Item key={item.id} item={item} handleDrop={(id) => this.modelItem(id)}/>
                        ))}
                    </div>
                    <div>
                      
                    <Target1 />
                    </div>
                    
                    <Target2 />
                    
                </div>
            </div>
        </div>
    )
}
}

export default DragDropContext (HTML5Backend)(Canvas)