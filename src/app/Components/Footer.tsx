import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <div>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Column 1: FIND A STORE */}
            <div>
              <h3 className="text-lg font-semibold mb-4">FIND A STORE</h3>
              <ul className="space-y-4">
                <li>Become A Member</li>
                <li>Sign Up For Email</li>
                <li>Send Us Feedback</li>
                <li>Student Discounts</li>
              </ul>
            </div>

            {/* Column 2: GET HELP */}
            <div>
              <h3 className="text-lg font-semibold mb-4">GET HELP</h3>
              <ul className="space-y-4">
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us On Nike Inquiries</li>
                <li>Contact Us On All Other Inquiries</li>
              </ul>
            </div>

            {/* Column 3: ABOUT NIKE */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ABOUT NIKE</h3>
              <ul className="space-y-4">
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>

            {/* Column 4: SOCIAL ICONS and COPYRIGHT */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <FaTwitter className="text-2xl" />
                <FaFacebook className="text-2xl" />
                <FaInstagram className="text-2xl" />
                <FaYoutube className="text-2xl" />
              </div>
              <p className="text-sm">
                India <br />
                &copy; 2023 Nike, Inc. All Rights Reserved
              </p>
              <div className="mt-4 text-sm">
                <a href="#" className="hover:text-gray-400">Guides</a> | 
                <a href="#" className="hover:text-gray-400">Terms of Sale</a> | 
                <a href="#" className="hover:text-gray-400">Terms of Use</a> | 
                <a href="#" className="hover:text-gray-400">Nike Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
