import React from 'react'
import Image from 'next/image'
import config from '../../config';
import LineTri from '../reusables/Decoration/LineTri';


const Workforce = () => {

    const card = "relative rounded-lg border-[0.4px] border-[#D3D3D3] py-8 px-10 grid grid-cols-2 gap-x-8 gap-y-8";
    
    return (
      <div className="w-[90%] mx-auto lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className={card}>
          <h3 className="col-span-2 font-semibold text-xl">
            Things you can do
            <br />
            with Workforce
          </h3>
          {config.workforce.map((item, index) => {
            return <ItemCard key={index} item={item} />;
          })}
        </div>
        <div className={card}>
          <LineTri className={"max-lg:hidden absolute bottom-0 -right-10"} />
          <h3 className="col-span-2 font-semibold text-xl">
            Things your
            <br />
            fieldworkers can
          </h3>
          {config.fieldWorkers.map((item, index) => {
            return <ItemCard key={index} item={item} />;
          })}
        </div>

        <div className="rounded-lg border-[0.4px] border-[#D3D3D3] py-8 px-10 lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {config.automate.map((item, index) => {
            return <ItemCard key={index} item={item} />;
          })}
        </div>
      </div>
    );
}



const ItemCard = ({item}) =>{
    return(
        <div className='flex flex-col gap-3'>
          <Image src={item.icon} width={40} height={40} clas
           alt="logo" />
          <h4 className='text-lg font-semibold'>{item.title}</h4>
          <p className='font-medium text-black/60'>{item.desc}</p>
        </div>
    )
}
export default Workforce
