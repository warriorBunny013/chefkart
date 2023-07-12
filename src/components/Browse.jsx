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
        <div className="relative bg-white  w-[27rem] h-[45rem] ">
        <div className="py-4 px-5 font-medium tracking-wide flex"><img className="w-[0.4rem] mt-[0.45rem] mr-[1.5rem] h-[0.7rem]" src="leftarrow.png" alt="arrow"/><span>Select Dishes</span></div>
        <div>
          <div className="bg-slate-800 h-10 pt-5">
            <div className="flex bg-white shadow-md justify-center text-slate-800 font-semibold mx-5  px-4 py-5 rounded-md">
              <div className="flex border-r pr-4">
                <img className="w-[0.8rem] h-[0.8rem] mt-[0.1rem] mr-[0.4rem]" alt="calender" src="calender.png"/>
                <span className="text-[0.7rem]">21 May 2021</span>
                
                </div>
              
                <div className="flex pl-4">
                <img className="w-[0.8rem] h-[0.8rem] mt-[0.1rem] mr-[0.4rem]" alt="clock" src="alarm.png"/>
                <span className="text-[0.7rem]">10:30 Pm-12:30 Pm</span>
                
                </div>
            </div>
          </div>
          <div className="mt-14 mx-5 flex overflow-hidden gap-4 text-[0.6rem]">
            <button className="bg-yellow-100 rounded-xl px-6 py-1 border  border-yellow-400 text-[0.6rem] text-yellow-400 font-semibold">Italian</button>
            <button className=" rounded-xl px-6 py-1   border text-[0.6rem]  border-slate-300 text-slate-400 ">Indian</button>
            <button className=" rounded-xl px-6 py-1 border  border-slate-300 text-slate-400  text-[0.6rem]">Indian</button>
            {/* <button className=" rounded-xl px-4  border-2  text-[0.8rem]  font-bold">Italian</button> */}
          </div>
        </div>
        <div>
          <div className="font-bold tracking-wide mx-5 mt-5  text-sm text-slate-800">Popular Dishes</div>
          <div className="flex justify-center  ">
          <div className="flex mb-5  mt-2  max-w-[27rem] overflow-x-auto hide-scroll-bar space-x-4 z-100 bg-white">
            {data?.popularDishes?.map((data,i)=>{
              return    <><section className="relative flex-shrink-0 ml-5 rounded-full border-2 border-yellow-400">
              <span className="relative ">
                <img src={data.image} className=" bg-yellow-300 object-cover h-14 w-14 rounded-full border-2 border-white" alt=""
              />
              <div className="absolute top-0 z-10 glass-body rounded-full h-14 w-14 border-2 border-white "></div>
              </span>
              <div className="absolute top-5 left-3 text-white text-[0.6rem] z-10">{data.name}</div>
            </section>
            <section className="relative flex-shrink-0 ml-5 rounded-full border-2 border-yellow-400">
              <span className="relative ">
                <img src={data.image} className=" bg-yellow-300 object-cover h-14 w-14 rounded-full border-2 border-white" alt=""
              />
              <div className="absolute top-0 z-10 glass-body rounded-full h-14 w-14 border-2 border-white "></div>
              </span>
              <div className="absolute top-5 left-3 text-white text-[0.6rem] z-10">{data.name}</div>
            </section>
            
            </>
            })}
          {/* <div className="bg-pink-500 rounded-full flex items-center justify-center text-white text-xs h-[3.6rem] w-[3.6rem]">Biryani</div> */}
   
          </div>
          </div>
        </div>
        <div>
        
         
          <div className="mx-5 flex flex-col pt-4 border-t-2  h-[24rem] overflow-y-auto hide-scroll-bar">
          <div className="flex justify-between">
            <div className="font-bold tracking-wide flex  text-slate-800 text-lg">
              <span>Recommended</span>
              <img className="w-[0.5rem] h-[0.3rem] mt-3 ml-3" src="arrowdown.png" alt="ksnf"/>
              </div>
            <button className="bg-slate-900 text-white text-[0.6rem] px-5 h-[1.4rem] shadow-md rounded-md">Menu</button>
          </div>
          <div className="">
            {data?.dishes?.map((dat,i)=>{
              return <><div key={i} className=" flex py-5 border-b justify-between">
              <div className="">
              <div className="flex gap-2 font-semibold text-xs mb-1">
                <div>{dat?.name}</div>
                <div className="flex flex-col justify-center">
                  <img className="w-[0.4rem] h-[0.4rem] " alt="veg" src="veg.jpg"/>
                </div>
                <div>
                  <span className="bg-green-500 text-white px-1 rounded-sm text-[0.4rem]">
                    {dat?.rating}</span>
                </div>
              </div>
              <div className="flex "><div className="flex gap-2 border-r pr-3">
              {dat?.equipments?.map((d,index)=>{
                 return<div className="flex flex-col"> 
                  <img alt="appliances" className="w-[0.7rem] h-[1rem]" src="fridge.png"/>
                  <span key={index} className="text-[0.4rem]">{d}</span>
                  </div>
              })}
                </div>
              <div className=" flex flex-col px-4"><span className="text-[0.4rem] font-bold">Ingredients</span><Link to="/details" className="text-yellow-500 font-semi-bold text-[0.4rem]">View list</Link></div></div>
              <div className="text-[0.56rem] w-[13rem] leading-tight mt-2 text-slate-500 ">{dat?.description}</div>
              </div>
              <div>
                <div className=" w-[6rem] h-[4rem] relative rounded-lg">
                 <img className="w-[6rem] h-[4rem] object-cover bg-red-700 rounded-lg" src={dat?.image} alt="food"/>
                 <button className="text-yellow-500 border-2 bg-white  border-yellow-400  px-5 absolute -bottom-3 left-5 font-medium text-xs py-[0.2rem]  rounded-md shadow-lg">Add</button>
                </div>
              </div>
              </div>
              <div key={i} className=" flex py-5 border-b justify-between">
              <div className="">
              <div className="flex gap-2 font-semibold text-xs mb-1">
                <div>{dat?.name}</div>
                <div className="flex flex-col justify-center">
                  <img className="w-[0.4rem] h-[0.4rem] " alt="veg" src="veg.jpg"/>
                </div>
                <div>
                  <span className="bg-green-500 text-white px-1 rounded-sm text-[0.4rem]">
                    {dat?.rating}</span>
                </div>
              </div>
              <div className="flex "><div className="flex gap-2 border-r pr-3">
              {dat?.equipments?.map((d,index)=>{
                 return<div className="flex flex-col"> 
                  <img alt="appliances" className="w-[0.7rem] h-[1rem]" src="fridge.png"/>
                  <span key={index} className="text-[0.4rem]">{d}</span>
                  </div>
              })}
                </div>
              <div className=" flex flex-col px-4"><span className="text-[0.4rem] font-bold">Ingredients</span><Link to="/details" className="text-yellow-500 font-semi-bold text-[0.4rem]">View list</Link></div></div>
              <div className="text-[0.56rem] w-[13rem] leading-tight mt-2 text-slate-500 ">{dat?.description}</div>
              </div>
              <div>
                <div className=" w-[6rem] h-[4rem] relative rounded-lg">
                 <img className="w-[6rem] h-[4rem] object-cover bg-red-700 rounded-lg" src={dat?.image} alt="food"/>
                 <button className="text-yellow-500 border-2 bg-white  border-yellow-400  px-5 absolute -bottom-3 left-5 font-medium text-xs py-[0.2rem]  rounded-md shadow-lg">Add</button>
                </div>
              </div>
              </div>
         
              
              
              
              
              </>
            })}
            </div>
            
          </div>
          
        </div>
        <div className="bg-slate-900 py-2 px-4 rounded-lg text-white flex  justify-between fixed bottom-10 min-w-[20rem]  mx-4">
          <div className="flex">
          <img className="w-[1rem] h-[1rem] mt-[0.1rem] mr-2" src="fastfood.png" alt="klsnf" />
         <div className="text-[0.8rem]">3 food items selected</div>
          </div>
          
         <img className="w-[1rem] h-[0.6rem] mt-1" src="whitearrow.png" alt="mkasnf" />
        </div>
      </div>
    );
}

export default Browse;
