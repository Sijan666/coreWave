import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

const Achievements = () => {
    return (
        <section className="py-20">
            <div className="bg-[#EEFFF9] lg:rounded-tl-[350px] lg:rounded-br-[350px] py-28">
                <Container className={'px-3 lg:px-0'}>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-y-20 lg:gap-x-[113px] items-center">
                        {/* left side */}
                        <div className="left text-center lg:text-left ">
                            <h3 className='lg:text-[45px] text-[30px] font-semibold text-[#1B1B1B] lg:w-[404px] text-center lg:text-left'>Take your business to new heights with our top services.</h3>
                            <p className='py-7.5 text-[#7B7B7B] text-base'>At our company, we pride ourselves on offering a variety of services to meet the diverse needs of our clients. Whether you're looking for marketing assistance, website design, or IT support, we've got you covered</p>
                            <div className="btn">
                                <Button btnText={'Get In Touch Now'} className={'px-[25px] py-[14.5px]'}/>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="right lg:w-[664px]">
                            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8">
                                <div className="flex flex-col gap-y-8 ">
                                    <div className="py-10 px-[72px] rounded-[10px] shadow-new2 bg-white hover:bg-[#06C279] group duration-300 text-center">
                                        <HiOutlineEmojiHappy  size={90} className='text-[#06C279] group-hover:text-white duration-300 mx-auto'/>
                                        <div className="">
                                            <h4 className='text-[#1B1B1B] font-bold text-[20px] py-3.5 group-hover:text-white duration-300'>Project Done</h4>
                                            <p className='text-base text-[#7B7B7B] lg:w-[217px] group-hover:text-white duration-300'>1200+</p>
                                        </div>
                                    </div>
                                    <div className="py-10 px-[72px] rounded-[10px] shadow-new2 bg-white hover:bg-[#06C279] group duration-300 text-center">
                                        <HiOutlineEmojiHappy  size={90} className='text-[#06C279] group-hover:text-white duration-300 mx-auto'/>
                                        <div className="">
                                            <h4 className='text-[#1B1B1B] font-bold text-[20px] py-3.5 group-hover:text-white duration-300'>Happy Clients</h4>
                                            <p className='text-base text-[#7B7B7B] lg:w-[217px] group-hover:text-white duration-300'>500+</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-8 lg:mt-35">
                                    <div className="py-10 px-[72px] rounded-[10px] shadow-new2 bg-white hover:bg-[#06C279] group duration-300 text-center">
                                        <HiOutlineEmojiHappy  size={90} className='text-[#06C279] group-hover:text-white duration-300 mx-auto'/>
                                        <div className="">
                                            <h4 className='text-[#1B1B1B] font-bold text-[20px] py-3.5 group-hover:text-white duration-300'>Running Work</h4>
                                            <p className='text-base text-[#7B7B7B] lg:w-[217px] group-hover:text-white duration-300'>120+</p>
                                        </div>
                                    </div>
                                    <div className="py-10 px-[72px] rounded-[10px] shadow-new2 bg-white hover:bg-[#06C279] group duration-300 text-center">
                                        <HiOutlineEmojiHappy  size={90} className='text-[#06C279] group-hover:text-white duration-300 mx-auto'/>
                                        <div className="">
                                            <h4 className='text-[#1B1B1B] font-bold text-[20px] py-3.5 group-hover:text-white duration-300'>Achevement</h4>
                                            <p className='text-base text-[#7B7B7B] lg:w-[217px] group-hover:text-white duration-300'>150+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Achievements