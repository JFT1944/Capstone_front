
import { useEffect, useState } from 'react';
import './App.css';
import DispensaHolder from './Dispensa_Holder';

function App() {
const [user, setUser] = useState()
const [token, setToken] = useState()

useEffect(() =>{
let lStorage = localStorage.getItem('user')
let tStorage = localStorage.getItem('token')
console.log(tStorage)
// console.log(JSON.parse(lStorage))
if(lStorage){
  setUser(JSON.parse(lStorage))
}
if(tStorage){
  setToken(tStorage)
}

}, [])

  return (
    <div className="App">
     <DispensaHolder user={user} setUser={setUser} token={token} setToken={setToken}/>
    </div>
  );
}





export default App;
