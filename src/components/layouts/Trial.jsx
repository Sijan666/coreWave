import React from 'react'
import Container from '../Container'
import Images from '../Images'
import trial from '../../assets/trial.png'

const Trial = () => {
    return (
        <>
        <section id='trial'>
            <div className="pt-[86px] pb-[85px] bg-[#06C279] px-3 lg:px-0">
                <Container>
                    <div className="lg:flex lg:justify-between items-center md:relative">
                        {/* left side */}
                        <div className="left text-center md:text-left">
                            <h3 className='pb-9.5 text-[20px] md:text-[30px] lg:text-[45px] font-semibold text-white'>Don’t worries, start your free trial today!</h3>
                            <button className='px-[25px] py-[14.5px] rounded-[5px] bg-[#2F2F2F] text-white text-base font-semibold cursor-pointer '>Get Free Trial</button>
                        </div>
                        {/* right side */}
                        <div className="right absolute -bottom-25 right-0 hidden md:block">
                            <Images imgSrc={trial} className={'w-full h-[390px]'}/>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Trial