import React from 'react'
import Button from '../Button'
import Container from '../Container'
import Images from '../Images'
import ex from '../../assets/ex.png'

const Experience = () => {
    return (
        <>
        <section className='py-25'>
            <Container className={'px-3 lg:px-0'}>
                <div className="flex flex-col lg:flex-row gap-y-10 lg:justify-between ">
                    <div className="left lg:w-[550px] text-center lg:text-left">
                        <h3 className='pb-7.5 text-[#1B1B1B] font-semibold text-[30px] lg:text-[45px] leading-[54px]'>Experience the power of Corewave</h3>
                        <p className='text-base text-[#7B7B7B] pb-[45px] leading-[26px]'>Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>
                        {/* btn */}
                        <div className="btn pt-3">
                            <Button btnText={'Learn More'} className={'px-[25px] py-[14.5px]'}/>
                        </div>
                    </div>
                    <div className="right">
                        <Images imgSrc={ex}/>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Experience