import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import './index.css'

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='footer-div'>
            <div className='signin-div'>
                <h3>BE THE FIRST TO KNOW</h3>
                <p className='footer-para'>Sign in for updated from meta muse</p>
                <div className='subscribe-cont'>
                <input type='text' className='footer-input' placeholder='Enter your Email'/>
                <button className='subscribe-btn'>Subscribe</button>
                </div>
            </div>
            <div className='signin-div'>
                <h3>CONTACT US</h3>
                <p className='footer-para'>+44 221 33 5360</p>
                <p className='footer-para'>customercare@mettumuse.com</p>
                <h3>CURRENCY</h3>
                <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1761931178/Language_zvo3ta.png" alt="us-logo"/>
                <p className='small-txt'>Transactions will be completed in Euros and a currency reference is available on hover</p>
            </div>
            
        </div>
        <hr className='footer-hr'/>
        <div className='footer-div'>
           <div className='footer-info'>
             <div >
                <h2 className='fo'>metta muse</h2>
                    <ul>
                        <li className='footer-li'>About Us</li>
                         <li className='footer-li'>Stories</li>
                        <li className='footer-li'>Artisans</li>
                        <li className='footer-li'>Boutiques</li>
                        <li className='footer-li'>Contact Us</li>
                        <li className='footer-li'>EU Compliances Docs</li>
                    </ul>
                
            </div>
            <div>
                <h3>QUICK LINKS</h3>
                 <ul>
                        <li className='footer-li'>Orders & Shipping</li>
                         <li className='footer-li'>Join/Login as a Seller</li>
                        <li className='footer-li'>Payment & Pricing</li>
                        <li className='footer-li'>Return & Refunds</li>
                        <li className='footer-li'>FAQs</li>
                        <li className='footer-li'>Privacy Policy</li>
                        <li className='footer-li'>Terms & Conditions</li>
                    </ul>
            </div>
           </div>
           <div>
                <div>
                    <h2>FOLLOW US</h2>
                    <div className="dis-flex">
                        <div className="insta-div">
                        <PiInstagramLogoFill size={18}/>
                    </div>
                    <div className="insta-div">
                        <TbBrandLinkedinFilled size={18}/>
                    </div>
                    </div>
                </div>
                <div>
                    <h3>metta muse ACCEPTS</h3>
                    <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1761931138/Group_136187_nvzbcf.png" alt="googlepay" className='payment-logo'/>
                    <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1761931138/Group_136190_zwzhow.png" alt="payment" className='payment-img' />
                    <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1761931138/Group_136192_nilfoe.png" alt="paypal" className='payment-img' />
                    <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1761931139/Group_136195_xjmmau.png" alt="qpay" className='payment-img'/>
                    <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1761931138/Group_136193_bsbt9v.png" alt="amex" className='payment-img'/>
                    <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1762066731/Group_xdmqit.png" className='payment-logo' alt="ipay"/>
                </div>
           </div>
        </div>
        <p className="small-txt">Copyrights @ 2023 mettamuse. All rights reserved</p>
    </footer>
  )
}

export default Footer