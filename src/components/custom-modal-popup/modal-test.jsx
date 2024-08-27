import { useState } from "react"
import Modal from "./modal";
import './modal.css'

export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleDoggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }
    function onClose(){
        setShowModalPopup(false)
    }

    return (
        <div>
            <button onClick={handleDoggleModalPopup}>show modal popup</button>
            {showModalPopup && <Modal onClose={onClose} />}
        </div>

    );

}