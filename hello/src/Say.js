import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <h1>{message}</h1>
      {/* 방법1 */}
      {/* <button onClick={()=>setMessage("안녕하세요!")}>입장</button>
      <button onClick={()=>setMessage("안녕히 가세요!")}>퇴장</button> */}
      {/* 방법2 */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
};
export default Say;
