import { useState, useRef } from 'react';

const LoginFrom = ({message}) => {
    const [userInfo, setUserInfo] = useState({
        userId : '',
        userPw : ''
    })

     const[isLogin, setIsLogin] = useState(false);
    
    let userIdE1 = useRef(null);  // ref 요소의 선택
    let loginCnt = useRef(0);
    
    const handleChange = (e) => {
        // userInfo[e.currentTarget.name] = e.currentTarget.value
        // setUserInfo(userInfo);
        
        setUserInfo({...userInfo, [e.currentTarget.name] : e.currentTarget.value})
    };
    
    const handleClick = () => {
        alert(`${userInfo.userId} / ${userInfo.userPw}`);
        setUserInfo({
            userId : '',
            userPw : ''
        });
        
        // userIdE1.focus();
        userIdE1.current.focus();
        loginCnt.current++;
        console.log("로그인 카운트 : ", loginCnt.current);
        setIsLogin(true)
    }



    return (
        <div>
            {isLogin && <h1>{message}</h1>}
            아이디 : <input type='text' name='userId' value={userInfo.userId} 
            onChange={handleChange} ref={userIdE1}/><br/>
            비밀번호 : <input type='password' name='userPw' value={userInfo.userPw} onChange={handleChange}/><br/>
            <button type='submit' onClick={handleClick}>로그인</button>
        </div>
    );
};



export default LoginFrom