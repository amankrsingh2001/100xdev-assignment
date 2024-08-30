import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios"
import './App.css'
import New from "./New";

const App = ()=>{
  const [data,setdata] = useState([]);
  const [count,setCount]  = useState(0);
  const [userAdded,setUserAdded] = useState(false);

  const fetchData = async()=>{
    const response  = await axios.get('http://localhost:8080/home');
    setdata(response.data.card);
    
  }

   useEffect(()=>{

     fetchData()
   },[userAdded])


  return<div >
      <New setUserAdded = {setUserAdded}/>
    <div className="flex flex-wrap m-5">
        {
        data.map((data)=>{return <Card key={data._id} data={data} />})
        }
    </div>

    <div>
      <button onClick={()=>setCount(count+1)}>
        Increase count{count}
      </button>
    </div>
   

  </div>
}
export default App;