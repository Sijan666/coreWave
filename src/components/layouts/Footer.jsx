import Container from "../Container"
import Images from "../Images"
import footerLogo from '../../assets/footerLogo.png'
import { FaBehance, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Button from "../Button"


const Footer = () => {
  return (
    <>
      <footer>
        <div className="pt-25 pb-[47px]">
          <Container>
            <div className="flex justify-between flex-col gap-y-8 lg:flex-row items-center lg:items-start">
              {/* logo part */}
              <div className="logo">
                <Images imgSrc={footerLogo} className={'mx-auto lg:mx-0'}/>
                <div className="pt-6.5 text-center lg:text-left">
                  <p className="text-[#7B7B7B] text-[14px]">mukimsdesign@gmail.com</p>
                  <p className="text-[#7B7B7B] text-[14px]">+88 01767630044</p>
                </div>
                <div className="pt-5">
                  <div className="flex gap-x-2 justify-center lg:justify-normal">
                    <div className="p-2 rounded-full bg-[#06C279]">
                      <FaFacebookF className="text-white" />
                    </div>
                    <div className="p-2 rounded-full bg-[#06C279]">
                      <FaTwitter  className="text-white" />
                    </div>
                    <div className="p-2 rounded-full bg-[#06C279]">
                      <FaLinkedinIn  className="text-white" />
                    </div>
                    <div className="p-2 rounded-full bg-[#06C279]">
                      <FaBehance  className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              {/* service part */}
              <div className="service">
                <h4 className="text-[#1B1B1B] text-[20px] font-semibold">Services</h4>
                <ul className="pt-6 flex flex-col gap-y-1">
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">Web Design</li>
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">Web Development</li>
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">SEO Marketing</li>
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">UI/UX Analysis</li>
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">Digital Marketing</li>
                </ul>
              </div>
              {/* help part */}
              <div className="help">
                <h4 className="text-[#1B1B1B] text-[20px] font-semibold">Help</h4>
                <ul className="pt-6 flex flex-col gap-y-1">
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">Account</li>
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">Support Center</li>
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">Privacy Policy</li>
                  <li className="text-[14px] text-[#7B7B7B] cursor-pointer">Terms & Conditions</li>
                </ul>
              </div>
              {/* contact part */}
              <div className="contact">
                <h4 className="text-[#1B1B1B] text-[20px] font-semibold">Contact Us</h4>
                <div className="pt-6">
                  <input type="text" placeholder="Enter your mail" className="py-[13px] px-[15px] rounded-[5px] border-2 border-[#DDDDDD] lg:w-[337px]"/>
                  <div className="btn pt-3.5">
                      <Button btnText={'Request & Callback'} className={'px-[25px] py-[14.5px]'}/>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
