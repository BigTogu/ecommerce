import { FC } from "react";

const Footer: FC = () => {
    return (
      <footer className="bg-[#1F1F1F] text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest">
        <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0">
          <a className="text-white hover:underline" href="mailto:hola@loucobos.com">
            HOLA@LOUCOBOS.COM
          </a>
          <p className="text-gray-500">DESIGN BY LOU COBOS & DEVELOPED BY SILVIA KENAAN</p>
        </div>
  
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-6">
            <a className="hover:underline" href="#">LINKEDIN</a>
            <a className="hover:underline" href="#">BEHANCE</a>
            <a className="hover:underline" href="#">INSTAGRAM</a>
          </div>
          <p className="text-gray-500">@LOU COBOS 2025</p>
        </div>
      </footer>
    );
  }
  

export default Footer;