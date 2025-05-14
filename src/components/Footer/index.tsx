import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-accent text-sm uppercase font-display tracking-[0.2em]">
      <div className="container mx-auto px-4 py-6 flex justify-between">
        <div className="flex flex-col gap-6">
          <a className="block text-textSecondary" href="mailto:hola@loucobos.com">
            HOLA@LOUCOBOS.COM
          </a>
          <p className="text-textTertiary">DESIGN BY LOU COBOS & DEVELOPED BY SILVIA KENAAN</p>
        </div>

        <div className="flex flex-col gap-6 text-end">
          <div className="flex flex-wrap gap-4 text-textSecondary justify-end">
            <a href="#">DRIBBLE</a>
            <a href="#">LINKEDIN</a>
            <a href="#">BEHANCE</a>
            <a href="#">INSTAGRAM</a>
          </div>
          <p className="text-textTertiary">@LOU COBOS 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
