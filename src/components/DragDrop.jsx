import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import Items from './Items';

import Navbar from './ItemComponents/Navbar';
import Button from './ItemComponents/Button';
import Card from './ItemComponents/Card';
import Footer from './ItemComponents/Footer';
import TextArea from './ItemComponents/TextArea';

const DragDrop = () => {
    const itemList = [
        {
            id: 0,
            name: "navbar"
        },
        {
            id: 1,
            name: "button"
        },
        {
            id: 2,
            name: "card"
        },
        {
            id: 3,
            name: "text-area"
        },
        {
            id: 4,
            name: "footer"
        },
    ];

    const [board, setBoard] = useState([]);

    const deleteEle = (index) => {
        setBoard(board.filter((e, ind) => {
            return ind !== index
        }))
    }

    const component = [
    <Navbar />, 
    <Button />, 
    <Card />, 
    <TextArea />, 
    <Footer />
];


    const [{ isOver }, drop] = useDrop(() => ({
        accept: "text",
        drop: (item) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addItemToBoard = (id) => {
        const boardItemList = itemList.filter((items) => id === items.id);
        const itemId = boardItemList[0].id;
        setBoard((board) => [...board, component[itemId]]);
    }


    return (
        <>
            <div className="mainBody">
                <div className="items">
                    {itemList.map((item) => {
                        return <Items id={item.id} name={item.name} />
                    })}
                </div>
                <div className="board" id='board' ref={drop}>
                    {board?.map((element, index) => {
                        return (
                            <>
                                <div className="ele" key={index} style={{width : index===0? "100%": "auto"}} >
                                    {element}
                                    <i className="fas fa-xmark cross" onClick={() => { deleteEle(index) }} ></i>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default DragDrop
