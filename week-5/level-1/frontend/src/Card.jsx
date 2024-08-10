

const Card = ({data})=>{
    const value = data.interest
  


    return <div className="h-80 w-72 m-5 p-4 drop-shadow-xl bg-slate-200 rounded-md"> 
        <h1 className="text-bold font-bold text-center p-2">{data.name}</h1>
        <p className="font-light text-center pb-2">{data.description}</p>
        <h3 className="text-center pt-2 font-medium pb-4">Interest</h3>
            <div className="flex flex-wrap justify-center">
          
             {
             value.map((it,index)=>{
                return(<p className="font-light" key={index}>{`${it},`}</p>)
            })
          }
                </div>
                <div className="flex items-center w-full justify-center mt-4 flex-col">
                <button className="bg-blue-500 p-2 w-[50%] text-white drop-shadow-xl rounded-lg"> <a  href="https://www.linkedin.com/in/aman-kumar-singh-961027244/">LinkedIn</a></button>
                <button className="bg-black p-2 mt-2 w-[50%] text-white drop-shadow-xl rounded-lg"> <a  href="https://x.com/AmanKumars2001">Twitter</a></button>
                </div>
             
              
            </div>
        }

export default Card;