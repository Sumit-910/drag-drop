import React from 'react';
import {useDrag} from 'react-dnd';

const Items = ({id, name}) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: "text",
        item: {id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
  return (
    <>
      <div ref={drag} className="itemCard" style={isDragging?{backgroundColor: "rgb(137, 200, 252)"}:{backgroundColor: "rgb(200, 229, 252)"}}>{name}</div>
    </>
  )
}

export default Items
