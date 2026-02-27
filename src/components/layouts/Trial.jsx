import React from 'react'
import Container from '../Container'
import Images from '../Images'
import trial from '../../assets/trial.png'

const Trial = () => {
    return (
        <>
        <section id='trial'>
            <div className="pt-[86px] pb-[85px] bg-[#06C279] ">
                <Container>
                    <div className="flex justify-between items-center relative">
                        <div className="left">
                            <h3 className='pb-9.5 text-[45px] font-semibold text-white'>Don’t worries, start your free trial today!</h3>
                            <button className='px-[25px] py-[14.5px] rounded-[5px] bg-[#2F2F2F] text-white text-base font-semibold cursor-pointer'>Get Free Trial</button>
                        </div>
                        <div className="right absolute -bottom-25 right-0">
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