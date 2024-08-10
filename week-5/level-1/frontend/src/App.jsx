import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios"
import './App.css'
import New from "./New";

const App = ()=>{
  const [data,setdata] = useState([]);

  const fetchData = async()=>{
    const response  = await axios.get('http://localhost:8080/home');
    setdata(response.data.card);
    console.log(response.data.card)

  }
  useEffect(()=>{
    fetchData()
  },[])


  return<div >
    <div className="flex m-5">
        {
        data.map((data)=>{return <Card key={data._id} data={data} />})
        }
    </div>
    <New/>

  </div>
}
export default App;