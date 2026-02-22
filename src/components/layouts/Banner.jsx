import Button from "../Button"
import Container from "../Container"
import Images from "../Images"
import bannerImg from '../../assets/bannerImg.png'


const Banner = () => {
    return (
        <>
        <div className="bg-[#EEFFF9] pt-[190px] ">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="left lg:w-[526px]">
                        <h1 className="font-light text-[60px] text-[#1B1B1B] ">Empower Your Team <span className="font-bold">With CoreWave's</span></h1>
                        <p className="pt-[37px] pb-[51px] text-[#717171] text-[20px] leading-7.5">Boost Productivity and Wellness in Your Organization with CoreWave's Advanced Tools and Techniques</p>
                        <div className="flex gap-x-5">
                            <div className="btn">
                                <Button btnText={'Explore More'} className={'px-[25px] py-[14.5px]'}/>
                            </div>
                            <div className="btn">
                                <Button btnText={'Watch Video'} className={'px-[25px] py-[14.5px]'}/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Images imgSrc={bannerImg}/>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Banner
