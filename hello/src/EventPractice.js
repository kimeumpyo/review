import { useState} from "react";

const EventPractice = () => {

    const [message, setMessage] = useState('');
    const handleChange = (e) => setMessage(e.currentTarget.value);
    const handleClick = () => {
        alert(message);
        setMessage(''); 
    }

    return (
        <div>
            <h1>아무거나 입력</h1>
            <input 
            type="text" 
            name="message" 
            value={message} 
            // onChange={(e)=> console.log(e.currentTarget.value)}
            // onChange={(e)=> setMessage(e.currentTarget.value)}
            onChange={handleChange}
            />
            <button type="button" onClick={handleClick}>확인</button>
        </div>
    )
}

export default EventPractice;