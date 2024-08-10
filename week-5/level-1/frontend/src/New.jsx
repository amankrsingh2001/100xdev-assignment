import { useState } from "react";
import axios from "axios"

const New = () =>{

        const [data ,setData] = useState({
            name:"",
            description:"",
            interest:[],
            LinkedIn:"",
            twitter:""
        })

        const submitHandler = async(e)=>{
            e.preventDefault();
      
            const interest = data.interest.split(','); 
            const newData = {...data,interest:interest}
            const sendData = await axios.post('http://localhost:8080/home/addUser',{newData})
        }

        const handleChange = (e) => {
            const { name, value } = e.target;
            setData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        };

    return <div className="w-screen h-[800px] flex justify-center items-center ">
        <div className="h-[80%] w-[600px] bg-[#233142] flex items-center justify-center drop-shadow-md ">
        <form onSubmit={submitHandler} className="flex flex-col ">
            <div className="mb-2 flex-col flex ">
            <label className="text-white p-2 ">Name </label>
                <input className="bg-slate-200 p-2 rounded-md  outline-none" type="text" placeholder="name" value={data.name} onChange={handleChange} name="name"/>
            </div>
            <div  className="mb-2 justify-between flex flex-col w-[300px]">
            <label className="text-white p-2">Description </label>
                <input className="bg-slate-200 p-2 outline-none rounded-md" type="text" placeholder="description" value={data.description} onChange={handleChange} name="description"/>
            </div>
            <div  className="mb-2 justify-between flex w-[300px] flex-col">
            <label className="text-white p-2">Interest </label>
                <textarea className="bg-slate-200 p-2 h-32 rounded-md outline-none" type="text" value={data.interest} onChange={handleChange} placeholder="please enter you interest seprated by comma" name="interest"/>
            </div>

            <div className="mb-2 justify-between flex w-[300px] flex-col">
                <label className="text-white p-2">LinkedIn</label>
                    <input className="bg-slate-200 p-2  rounded-md outline-none"  type="text" placeholder="linkedIn url" onChange={handleChange} value={data.linkedIn} name="linkedIn"/>
            </div>
            <div className="mb-2 justify-between flex w-[300px] flex-col">
                <label className="text-white p-2">Twitter</label>
                    <input className="bg-slate-200 p-2 outline-none rounded-md"  type="text" placeholder="linkedIn url" onChange={handleChange} value={data.twitter} name="twitter"/>
            </div>
           
           
            <button className="bg-[#f95959] rounded-md p-2 mt-4 text-white">Add new Card</button>
        </form>

        </div>
       
        </div>

}

export default New