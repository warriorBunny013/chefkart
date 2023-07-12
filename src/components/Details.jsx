import axios from "axios"
import React,{useEffect} from "react";
import { Link } from "react-router-dom";

const Details = () => {
    const [details,setDetails]=React.useState([]);

    useEffect(()=>{
      axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1").then(res=>setDetails(res.data)).catch(err=>console.log(err))
    },[])
  
    console.log(details)
    return (
        <div className='bg-white overflow-hidden w-[27rem] h-[45em]'>
            <Link to="/" className='px-5 py-4 flex justify-between tracking-wide'><img className="w-[0.4rem] mt-[0.45rem] mr-[1.5rem] h-[0.7rem]" src="leftarrow.png" alt="arrow"/></Link>
            <div className='ml-5 mt-5  flex justify-between'>
            <div className=' '>
                <div className=''>
            <div className='flex gap-2'><span className='text-xl whitespace-nowrap font-bold mb-2'>{details?.name}</span><div className='mt-1'><span className='bg-green-400 text-white px-1 rounded-sm text-[0.4rem]'>4.2</span></div></div>
            <div className='text-[0.5rem]  tracking-wide text-slate-300 '>Mughlai Masala is a style of cookery developed in the indian Subcontinent by the imperial kitchens of the Mughal Empire.</div>
            </div>
            <div className='text-xs pb-5 pt-3 border-b-2 flex font-medium'>
                <img alt="clock" className="w-[0.7rem] h-[0.7rem] mt-[0.2rem] mr-2" src="clock.png" />
                <span className="text-[0.6rem]">{details?.timeToPrepare}</span>
                
                </div>
            </div>
            {/* <div className="bg-blue-400 rounded-full w-[20rem] h-[20rem]"></div> */}
            <div className="relative">
               <img className="max-h-[20rem] max-w-[10rem]" src='food.png' alt='details' />
               <div className="opacity-25 bg-yellow-100 absolute -top-10  h-[14rem] w-[14rem] rounded-full"></div>
                
            </div>
            
            </div>
            <div className='mx-5  pb-5 border-b flex flex-col'>
                <span className='text-md font-bold tracking-wide '>Ingredients</span>
                <span className='text-[0.5rem] tracking-wide text-slate-400 '>For 2 people</span>
            </div>
            <div className='pt-3 mx-5 '>
                <div className='font-semibold flex text-xs'>
                    <span>Vegetables(05)</span>
                    <img src="arrowdown.png" className="w-[0.5rem] h-[0.3rem] mt-[0.3rem] ml-3" alt="arrowdown"/>
                    
                    </div>
                <div className='flex justify-between text-[0.6rem] text-slate-600'>
                    <div className='flex flex-col gap-1 mt-2'>
                        {details?.ingredients?.vegetables?.map((data,i)=>{
                            return <div key={i}>{data?.name}</div>
                        })}
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                    {details?.ingredients?.vegetables.map((data,i)=>{
                            return <div key={i}>{data?.quantity}</div>
                        })}
                    </div>
                </div>
                
            </div>
           
            <div className='pt-5 mx-5 '>
            <div className='font-semibold flex text-xs'>
                    <span>Spices (10)</span>
                    <img src="arrowdown.png" className="w-[0.5rem] h-[0.3rem] mt-[0.3rem] ml-3" alt="arrowdown"/>
                    
                    </div>
                <div className='flex justify-between text-[0.6rem] text-slate-600'>
                    <div className='flex flex-col gap-1 mt-2'>
                    {details?.ingredients?.spices.map((data,i)=>{
                            return <div key={i}>{data?.name}</div>
                        })}
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                    {details?.ingredients?.spices.map((data,i)=>{
                            return <div key={i}>{data?.quantity}</div>
                        })}
                    </div>
                </div>
                
            </div>
           
            
            <div className=' mx-5 mt-5 '>
                <span className='text-md font-bold tracking-wide '>Appliances</span>
                <div className='flex gap-6 text-[0.6rem] '>
                {details?.ingredients?.appliances?.map((data,i)=>{
                            return  <div key={i} className='bg-slate-100 mt-2 overflow-auto object-cover px-4 flex flex-col justify-between py-2'>
                            <img src="refrigerator.png" className="w-[2rem]" alt='appliances'/>
                            <span className="">{data?.name}</span>
                        </div>
                        })}
                </div>
            </div>
            
            
           

        </div>
    );
}

export default Details;
