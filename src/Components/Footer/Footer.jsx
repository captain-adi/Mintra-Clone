import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "ONLINE SHOPPING",
      links: ["Men", "Women", "Kids", "Home & Living", "Beauty", "Gift Card", "Myntra Insider"],
    },
    {
      title: "CUSTOMER POLICIES",
      links: ["Contact Us", "FAQ", "T&C", "Terms of Use", "Track Orders", "Shipping", "Returns"],
    },
    {
      title: "USEFUL LINKS",
      links: ["Blog", "Careers", "Site Map", "Corporate Information", "Whitehat", "Privacy Policy"],
    },
  ];

  return (
    <footer className=" relative bottom-0">
      <div className="py-8 bg-gray-100 flex justify-evenly flex-wrap">
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-gray-800 text-sm mb-6 font-bold">{section.title}</h3>
            {section.links.map((link, i) => (
              <a key={i} href="#" className="text-gray-600 text-sm mb-1 hover:text-gray-800">{link}</a>
            ))}
          </div>
        ))}
      </div>

      <hr className="border-gray-300" />

      <div className="flex justify-between items-center p-4">
        <p className="text-gray-500">© 2023 www.myntra.com. All rights reserved.</p>
        
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500"><FaFacebook size={20} /></a>
          <a href="#" className="text-gray-600 hover:text-pink-500"><FaInstagram size={20} /></a>
          <a href="#" className="text-gray-600 hover:text-blue-400"><FaTwitter size={20} /></a>
          <a href="#" className="text-gray-600 hover:text-red-500"><FaYoutube size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
