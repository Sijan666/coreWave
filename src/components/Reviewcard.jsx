import React from 'react'
import Images from './Images'
import stars from '../assets/stars.png'

const Reviewcard = ({className , client , reviewTitle , desc , reviewerName , sellerType}) => {
    return (
        <div className={`${className} px-[57px] py-[45px] rounded-[15px] shadow-new4 overflow-hidden text-center`}>
            <Images imgSrc={client} className={'w-fit mx-auto'}/>
            <div className="pt-[15px]">
                <h4 className='text-[#1B1B1B] text-[24px] font-semibold pb-1'>{reviewTitle}</h4>
                <Images imgSrc={stars} className={'mx-auto'}/>
                <p className='text-base text-[#7B7B7B] pt-5 pb-[15px]'>{desc}</p>
                <h4 className='text-[#1B1B1B] text-[18px] font-semibold'>{reviewerName}</h4>
                <h5 className='text-[#7B7B7B] text-[14px]'>{sellerType}</h5>
            </div>
        </div>
    )
}

export default Reviewcard