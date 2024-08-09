import Card from "./Card";
import {datas} from './Utils'
import './App.css'

const App = ()=>{
 

  return<div >
    <div className="flex m-5">
        {
        datas.map((data)=>{return <Card key={data.key} data={data} />})
        }
    </div>

  </div>
}
export default App;