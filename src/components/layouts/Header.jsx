import Images from "../Images"
import Logo from "../../assets/Logo.png"
import Container from "../Container"
import Button from "../Button"


const Header = () => {
    return (
        <>
        <header className="py-[35px] fixed w-full ">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-[416px]">
                        {/* logo */}
                        <div className="logo">
                            <Images imgSrc={Logo}/>
                        </div>
                        {/* navbar */}
                        <nav>
                            <ul className="flex gap-x-5">
                                <li>Home</li>
                                <li>About</li>
                                <li>Portfolio</li>
                                <li>Service</li>
                                <li>Blog</li>
                                <li>Testimonial</li>
                            </ul>
                        </nav>
                    </div>
                    {/* btn */}
                    <div className="btn">
                        <Button btnText={'Register'} className={'px-[25px] py-[14.5px]'}/>
                    </div>
                </div>
            </Container>
        </header>
        </>
    )
}

export default Header