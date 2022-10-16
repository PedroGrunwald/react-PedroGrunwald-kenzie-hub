import {Routes, Route} from 'react-router-dom'
import Login from '../Pages/Login';


const RoutesMain = () => {
    return (

    <Routes>
    <Route path='/Login' element={<Login/>}/>
    {/* <Route path='/Register' element={}/>
    <Route path='/Dashboard' element={}/> */}
    </Routes>
    )
}


export default RoutesMain