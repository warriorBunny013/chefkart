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
        <div className='bg-white w-[27rem] h-[45em]'>
            <Link to="/" className='px-5 py-4 flex justify-between font-medium font-mono tracking-wide'>{"<"}</Link>
            <div className='ml-5 mt-5  flex justify-between'>
            <div className=' pb-10 '>
                <div className=''>
            <div className='flex gap-2'><span className='text-xl whitespace-nowrap font-bold'>{details?.name}</span><div className='mt-1'><span className='bg-green-400 text-white px-1 rounded-sm text-[0.56rem]'>4.2</span></div></div>
            <div className='text-[0.6rem] text-slate-500 tracking-wide'>Mughlai Masala is a style of cookery developed in the indian Subcontinent by the imperial kitchens of the Mughal Empire.</div>
            </div>
            <div className='text-xs pb-5 pt-3 border-b-2 font-medium'>{details?.timeToPrepare}</div>
            </div>
            <img className="h-[10rem]  w-[7.7rem] object-fill" src='food.png' alt='details' />

            </div>
            <div className='mx-5  pb-5 border-b flex flex-col'>
                <span className='text-lg font-bold tracking-wide'>Ingredients</span>
                <span className='text-slate-500 tracking-wide text-[0.6rem]'>For 2 people</span>
            </div>
            <div className='pt-3 mx-5 '>
                <div className='font-medium text-sm'>Vegetables(05)</div>
                <div className='flex justify-between text-[0.75rem] text-slate-800'>
                    <div className='flex flex-col gap-1 mt-2'>
                        {details?.ingredients?.vegetables?.map((data,i)=>{
                            return <div key={i}>{data.name}</div>
                        })}
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                    {details?.ingredients?.vegetables.map((data,i)=>{
                            return <div key={i}>{data.quantity}</div>
                        })}
                    </div>
                </div>
                
            </div>
           
            <div className='pt-5 mx-5 '>
                <div className='font-medium text-sm'>Spices(10)</div>
                <div className='flex justify-between text-[0.75rem] text-slate-800'>
                    <div className='flex flex-col gap-1 mt-2'>
                    {details?.ingredients?.spices.map((data,i)=>{
                            return <div key={i}>{data.name}</div>
                        })}
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                    {details?.ingredients?.spices.map((data,i)=>{
                            return <div key={i}>{data.quantity}</div>
                        })}
                    </div>
                </div>
                
            </div>
           
            
            <div className=' mx-5 '>
                <div className='text-lg font-bold tracking-wide py-4'>Appliances</div>
                <div className='flex gap-4 text-[0.6rem]'>
                {details?.ingredients?.appliances?.map((data,i)=>{
                            return  <div key={i} className='bg-slate-200 overflow-auto object-cover px-4 flex flex-col justify-between py-2'>
                            <img src={data.name+".png"} alt='appliances'/>
                            <span className="">{data.name}</span>
                        </div>
                        })}
                </div>
            </div>
            
            
           

        </div>
    );
}

export default Details;
