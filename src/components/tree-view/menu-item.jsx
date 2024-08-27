import MenuList from "./menu-list";
import { useState } from "react";

export default function MenuItem({item}){

    const [displayCurrentChildren , setDisplayCurrentChildren] = useState({});
    function handleToggleChildren(getcurrentlabel) {
        setDisplayCurrentChildren({...displayCurrentChildren,[getcurrentlabel]: !displayCurrentChildren[getcurrentlabel]})
    }

    return (<li>
        
        <div style={{display : 'flex', gap : '20px'}}>
        <p>{item.label}</p>
        {item && item.children&& item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>{
            displayCurrentChildren[item.label]? '-':'+'
        }</span> : null}
        </div>
         

         {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
            (<MenuList list = {item.children} /> )
            : null
         }
    </li>);
}