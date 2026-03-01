import React from 'react'
import Images from './Images'
import stars from '../assets/stars.png'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

const Reviewcard = ({className , client , reviewTitle , desc , reviewerName , sellerType}) => {
    return (
        // parent div
        <div className={`${className} px-[57px] py-[45px] rounded-[15px] shadow-new4 overflow-hidden text-center relative border border-[#F1F1F1] group `}>
            {/* image  */}
            <Images imgSrc={client} className={'w-fit mx-auto'}/>
            <div className="pt-[15px]">
                <h4 className='text-[#1B1B1B] text-[24px] font-semibold pb-1'>{reviewTitle}</h4>
                {/* rating */}
                <Images imgSrc={stars} className={'mx-auto'}/>
                <p className='text-base text-[#7B7B7B] pt-5 pb-[15px]'>{desc}</p>
                <h4 className='text-[#1B1B1B] text-[18px] font-semibold'>{reviewerName}</h4>
                <h5 className='text-[#7B7B7B] text-[14px]'>{sellerType}</h5>
            </div>
            {/* badge icon */}
            <div className="py-3 px-3 bg-[#343434] group-hover:bg-[#06C279] duration-300 text-white rounded-full absolute top-15 left-30">
                <BiSolidQuoteAltLeft size={25} className='' />
            </div>
        </div>
    )
}

export default Reviewcard