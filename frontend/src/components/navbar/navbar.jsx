
import { useEffect, useState } from 'react';
import logo from './Logo.png';
function Nav(){
    const [showLog , setSowLog] = useState(false)
    useEffect(()=>{
        const username = localStorage.getItem('username');
        if(username !=null) setSowLog(true)
            console.log(showLog)
    },[showLog])

    const handelLogout = ()=>{
        localStorage.removeItem('username');
    }
    return(
    <>
<div className = "nav-bar">
<a href = "/" className = "logo"><img src ={logo}/></a>
    <ul>
        <li><a href = "/">Home</a></li>
        <li><a href = "/Course">Courses</a></li>
        <li><a href = "/Carriers">Carriers</a></li>
        <li><a href = "/Universities">Universities</a></li>
        <li><a href = "/Contact">Contact</a></li>
        {showLog && <li><a href = "/login" onClick={handelLogout}>LogOut</a></li>}
        {!showLog && <li><a href = "/login">Sign In</a></li>}

    </ul>
</div>
</>
    )
}
export default Nav;
