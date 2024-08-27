import data from "./data";
import React, { useState } from 'react';
import './style.css';

export default function Accordian(){
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple , setMultiple] = useState([]);


    function handleSingleSelection(getcurrentId){
        setSelected(getcurrentId == selected?null : getcurrentId);
    }
    
    function handleMultiSelection(getcurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getcurrentId)

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getcurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId , 1)
        setMultiple(cpyMultiple)

    }
    return(
         <div className ="Wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>enable multi selection</button>
    <div className="accordian">{
        data && data.length > 0 ?( 
        data.map((dataItem) => <div className="item">
            <div onClick = {enableMultiSelection? ()=> handleMultiSelection(dataItem.id):()=> handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
            </div>
            {
                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                <div>{dataItem.answer}</div>:null
            }
        </div>) )
            
            :(<div>no data preasent</div>) 
             

        }

        </div>
    </div>);
}