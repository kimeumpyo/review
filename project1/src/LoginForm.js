import { useState } from 'react';

const LoginFrom = () => {
    const [userInfo, setUserInfo] = useState({
        userId : '',
        userPw : ''

    })
    
    let userIdE1;

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

        userIdE1.focus();
    }



    return (
        <div>
            아이디 : <input type='text' name='userId' value={userInfo.userId} 
            onChange={handleChange} ref={(ref) => userIdE1 = ref}/><br/>
            비밀번호 : <input type='password' name='userPw' value={userInfo.userPw} onChange={handleChange}/><br/>
            <button type='submit' onClick={handleClick}>로그인</button>
        </div>
    );


};

export default LoginFrom