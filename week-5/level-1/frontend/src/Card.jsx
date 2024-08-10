

const Card = ({data})=>{
    const value = data.interest
  console.log(value,"Data from card")


    return <div className=" w-72 h-[350px] m-5  drop-shadow-xl bg-slate-200 rounded-md relative"> 
        <h1 className="text-bold font-bold text-center p-2 mt-2">{data.name}</h1>
        <p className="font-light text-center p-2">{data.description}</p>
        <h3 className="text-center pt-2 font-medium p-2">Interest</h3>
            <div className="flex flex-wrap justify-center ">
          
             {
             value.map((it,index)=>{
                return(<p className="font-light" key={index}>{`${it},`}</p>)
            })
          }
                </div>
                <div className="flex items-center w-full justify-center absolute bottom-6  flex-col">
                <button className="bg-blue-500 p-2 w-[50%] text-white drop-shadow-xl rounded-lg"> <a href={data.linkedIn}>LinkedIn</a></button>
                <button className="bg-black p-2 mt-2 w-[50%] text-white drop-shadow-xl rounded-lg"> <a href={data.twitter}>Twitter</a></button>
                </div>
             
              
            </div>
        }

export default Card;