import React from 'react'
import Container from '../Container'
import Images from '../Images'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import Button from '../Button'

const Project = () => {
    return (
        <section>
            <Container>
                <div className="text-center">
                    <h3 className='text-[#1B1B1B] font-semibold text-[45px]'>Our Latest Project</h3>
                </div>
                <div className="py-8 flex justify-center border-b border-[#7B7B7B] gap-x-[73px] lg:w-[892px] mx-auto">
                    <button className='text-[#7b7b7b] text-base font-medium cursor-pointer hover:text-[#06C279]'>Mobile App</button>
                    <button className='text-[#7b7b7b] text-base font-medium cursor-pointer hover:text-[#06C279]'>Web Development</button>
                    <button className='text-[#7b7b7b] text-base font-medium cursor-pointer hover:text-[#06C279]'>UI/UX Design</button>
                    <button className='text-[#7b7b7b] text-base font-medium cursor-pointer hover:text-[#06C279]'>Graphic Design</button>
                    <button className='text-[#7b7b7b] text-base font-medium cursor-pointer hover:text-[#06C279]'>Motion Graphic</button>
                </div>
                <div className="pt-[53px]">
                    <div className="flex justify-between">
                        <div className="productOne">
                            <div className="img ">
                                <Images imgSrc={p1} className={''}/>
                            </div>
                            <div className="pt-5 text-center ">
                                <h3 className='pb-[7px] text-[#1B1B1B] font-semibold text-[22px]'>Portfolio Landing Page</h3>
                                <p className='text-base text-[#7B7B7B] lg:w-[344px] mx-auto'>Web development is the art of creating engaging and visually appealing websites </p>
                            </div>
                        </div>
                        <div className="productTwo">
                            <div className="img ">
                                <Images imgSrc={p2} className={''}/>
                            </div>
                            <div className="pt-5 text-center ">
                                <h3 className='pb-[7px] text-[#1B1B1B] font-semibold text-[22px]'>Portfolio Landing Page</h3>
                                <p className='text-base text-[#7B7B7B] lg:w-[344px] mx-auto'>Web development is the art of creating engaging and visually appealing websites </p>
                            </div>
                        </div>
                        <div className="productThree">
                            <div className="img ">
                                <Images imgSrc={p3} className={''}/>
                            </div>
                            <div className="pt-5 text-center ">
                                <h3 className='pb-[7px] text-[#1B1B1B] font-semibold text-[22px]'>Portfolio Landing Page</h3>
                                <p className='text-base text-[#7B7B7B] lg:w-[344px] mx-auto'>Web development is the art of creating engaging and visually appealing websites </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn text-center pt-8">
                    <Button btnText={'View All Projects'} className={'px-[25px] py-[14.5px]'}/>
                </div>
            </Container>
        </section>
    )
}

export default Project