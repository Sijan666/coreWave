import React from 'react';
import Container from '../Container';
import { TbDeviceDesktopCode } from 'react-icons/tb';
import Button from '../Button';
// আপনার যদি অন্য আইকন লাগে, react-icons থেকে ইম্পোর্ট করে নেবেন

const Offer = () => {
    return (
        <section className="py-20">
            {/* Background Shape */}
            <div className="bg-[#EEFFF9] rounded-tl-[350px] rounded-br-[350px] py-28">
                <Container>
                    <div className="flex justify-between gap-x-[113px] items-center">
                        <div className="left w-[664px]">
                            <div className="flex gap-x-8">
                                <div className="flex flex-col gap-y-8 mt-35">
                                    <div className="p-12 rounded-[10px] shadow-new2 bg-white hover:bg-[#06C279] group duration-300">
                                        <TbDeviceDesktopCode size={90} className='text-[#06C279] group-hover:text-white duration-300'/>
                                        <div className="">
                                            <h4 className='text-[#1B1B1B] font-bold text-[20px] py-3.5 group-hover:text-white duration-300'>Web Development</h4>
                                            <p className='text-base text-[#7B7B7B] lg:w-[217px] group-hover:text-white duration-300'>Web development is the art of creating engaging and visually appealing websites</p>
                                        </div>
                                    </div>
                                    <div className="p-12 rounded-[10px] shadow-new2 bg-white hover:bg-[#06C279] group duration-300">
                                        <TbDeviceDesktopCode size={90} className='text-[#06C279] group-hover:text-white duration-300'/>
                                        <div className="">
                                            <h4 className='text-[#1B1B1B] font-bold text-[20px] py-3.5 group-hover:text-white duration-300'>SEO Marketing</h4>
                                            <p className='text-base text-[#7B7B7B] lg:w-[217px] group-hover:text-white duration-300'>Web development is the art of creating engaging and visually appealing websites</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-8">
                                    <div className="p-12 rounded-[10px] shadow-new2 bg-white hover:bg-[#06C279] group duration-300">
                                        <TbDeviceDesktopCode size={90} className='text-[#06C279] group-hover:text-white duration-300'/>
                                        <div className="">
                                            <h4 className='text-[#1B1B1B] font-bold text-[20px] py-3.5 group-hover:text-white duration-300'>UI/UX Analysis</h4>
                                            <p className='text-base text-[#7B7B7B] lg:w-[217px] group-hover:text-white duration-300'>Web development is the art of creating engaging and visually appealing websites</p>
                                        </div>
                                    </div>
                                    <div className="p-12 rounded-[10px] shadow-new2 bg-white hover:bg-[#06C279] group duration-300">
                                        <TbDeviceDesktopCode size={90} className='text-[#06C279] group-hover:text-white duration-300'/>
                                        <div className="">
                                            <h4 className='text-[#1B1B1B] font-bold text-[20px] py-3.5 group-hover:text-white duration-300'>Graphic Design</h4>
                                            <p className='text-base text-[#7B7B7B] lg:w-[217px] group-hover:text-white duration-300'>Web development is the art of creating engaging and visually appealing websites</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h3 className='text-[45px] font-semibold text-[#1B1B1B]'>We offer a variety of services such as</h3>
                            <p className='py-7.5 text-[#7B7B7B] text-base'>At our company, we pride ourselves on offering a variety of services to meet the diverse needs of our clients. Whether you're looking for marketing assistance, website design, or IT support, we've got you covered</p>
                            <div className="btn">
                                <Button btnText={'All Services'} className={'px-[25px] py-[14.5px]'}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Offer;