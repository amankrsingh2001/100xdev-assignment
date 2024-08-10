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


  }
  useEffect(()=>{
    fetchData()
  },[])


  return<div >
      <New/>
    <div className="flex flex-wrap m-5">
        {
        data.map((data)=>{return <Card key={data._id} data={data} />})
        }
    </div>
   

  </div>
}
export default App;