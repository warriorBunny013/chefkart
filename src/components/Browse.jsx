import axios from "axios"
import React,{useEffect} from "react";
import { Link } from "react-router-dom";
const Browse = () => {
    const [data,setData]=React.useState([]);

  useEffect(()=>{
    axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/").then(res=>setData(res.data)).catch(err=>console.log(err))
  },[])

  console.log(data)
    return (
        <div className="bg-white w-[27rem] h-[39em] ">
        <div className=" px-10 py-4 font-medium tracking-wide">Select Dishes</div>
        <div>
          <div className="bg-slate-800 h-10 pt-5">
            <div className="flex bg-white shadow-sm justify-between text-slate-800 font-bold mx-5 text-sm px-4 py-4 rounded-md">
              <div className="border-r pr-6">21 May 2021</div>
              <div>10:30 Pm-12:30 Pm</div>
            </div>
          </div>
          <div className="mt-14 mx-5 flex overflow-hidden gap-4">
            <button className="bg-yellow-100 rounded-xl px-4  border-2 border-yellow-400 text-[0.8rem] text-yellow-400 font-bold">Italian</button>
            <button className=" rounded-xl px-4  border-2  text-[0.8rem]  border-slate-300 text-slate-300 ">Italian</button>
            <button className=" rounded-xl px-4  border-2 border-slate-300 text-slate-300  text-[0.8rem]">Italian</button>
            {/* <button className=" rounded-xl px-4  border-2  text-[0.8rem]  font-bold">Italian</button> */}
          </div>
        </div>
        <div>
          <div className="font-bold tracking-wide mx-5 mt-5 text-slate-800">Popular Dishes</div>
          <div className="flex justify-center border-b-2  mb-5">
          <div className="flex mb-5  mt-5  w-[20rem] overflow-x-auto hide-scroll-bar space-x-4">
            {data?.popularDishes?.map((data,i)=>{
              return    <><section className="relative flex-shrink-0 ml-5 rounded-full border-2 border-yellow-400">
              <span><img src={data.image} className="bg-yellow-300 h-14 w-14 rounded-full border-2 border-white" alt=""
              /></span>
              <div className="absolute top-5 left-3 text-white text-[0.6rem]">{data.name}</div>
            </section><section className="relative flex-shrink-0 ml-5 rounded-full border-2 border-yellow-400">
              <span><img src={data.image} className="bg-yellow-300 h-14 w-14 rounded-full border-2 border-white" alt=""
              /></span>
              <div className="absolute top-5 left-3 text-white text-[0.6rem]">{data.name}</div>
            </section></>
            })}
          {/* <div className="bg-pink-500 rounded-full flex items-center justify-center text-white text-xs h-[3.6rem] w-[3.6rem]">Biryani</div> */}
   
          </div>
          </div>
        </div>
        <div>
        
          <div className="flex justify-between mb-3 mx-5">
            <div className="font-bold tracking-wide  text-slate-800 text-lg">Recomended</div>
            <button className="bg-slate-900 text-white text-[0.6rem] px-4 py-1 rounded-md">Menu</button></div>
          <div className="mx-5 flex flex-col space-y-2 h-[15rem] overflow-y-auto hide-scroll-bar">
            {data?.dishes?.map((dat,i)=>{
              return <><div key={i} className=" flex py-4 justify-between">
              <div className="">
              <div className="flex gap-2 font-medium text-sm"><div>{dat?.name}</div><div className="flex"><img className="w-[0.6rem] h-[0.6rem] mt-2" alt="veg" src="veg.jpg"/></div><div><span className="bg-green-400 text-white px-1 rounded-sm text-[0.56rem]">{dat.rating}</span></div></div>
              <div className="flex"><div className="flex gap-2 ">
              {dat?.equipments?.map((d,index)=>{
                 return <span key={index} className="text-[0.46rem]">{d}</span>
              })}
                </div>
              <div className=" border-l border-slate-300 flex flex-col px-4"><span className="text-[0.5rem] font-bold">Ingredients</span><Link to="/details" className="text-yellow-500 font-bold text-[0.6rem]">View list</Link></div></div>
              <div className="text-[0.54rem] leading-tight mt-2">{dat.description}</div>
              </div>
              <div>
                <div className=" w-[6rem] h-[4rem] relative rounded-lg">
                 <img className="w-[6rem] h-[4rem] object-cover bg-red-700 rounded-lg" src={dat.image} alt="food"/>
                 <button className="text-yellow-500 border-2 bg-white  border-yellow-400 shadow-sm px-4 absolute -bottom-3 left-5 font-medium text-sm  rounded-md">Add</button>
                </div>
              </div>
              </div>
              <div key={i} className=" flex py-4 justify-between">
              <div className="">
              <div className="flex gap-2 font-medium text-sm"><div>{dat?.name}</div><div><img className="w-[0.6rem] h-[0.6rem] mt-2" alt="veg" src="veg.jpg"/></div><div><span className="bg-green-400 text-white px-1 rounded-sm text-[0.56rem]">{dat.rating}</span></div></div>
              <div className="flex"><div className="flex gap-2">
              {dat?.equipments?.map((d,index)=>{
                 return <span key={index} className="text-[0.46rem]">{d}</span>
              })}
                </div>
              <div className=" border-l border-slate-300 flex flex-col px-4"><span className="text-[0.5rem] font-bold">Ingredients</span><div className="text-yellow-500 font-bold text-[0.6rem]">View list</div></div></div>
              <div className="text-[0.54rem] leading-tight mt-2">{dat.description}</div>
              </div>
              <div>
                <div className=" w-[6rem] h-[4rem] relative rounded-lg">
                 <img className="w-[6rem] h-[4rem] object-cover bg-red-700 rounded-lg" src={dat.image} alt="food"/>
                 <button className="text-yellow-500 border-2 bg-white  border-yellow-400 shadow-sm px-4 absolute -bottom-3 left-5 font-medium text-sm  rounded-md">Add</button>
                </div>
              </div>
              </div>
              
              </>
            })}
          
          </div>
          
        </div>
      </div>
    );
}

export default Browse;
