import { FC } from "react";
import { AnimatedUnderlineLink } from "../UI/AnimatedUnderlineLink/AnimatedUnderlineLink";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/utils/constants";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-accent text-sm uppercase font-display tracking-[0.2em]">
      <div className="container mx-auto px-6 py-10 flex justify-between">
        <div className="flex flex-col gap-10">
          <address className="not-italic">
            <AnimatedUnderlineLink href={`mailto:${CONTACT_EMAIL}`} label={CONTACT_EMAIL.toUpperCase()} />
          </address>
          <p className="text-textTertiary">Design by Lou Cobos & Developed by Silvia Kenaan</p>
        </div>

        <div className="flex flex-col gap-10 text-end">
          <nav
            aria-label="Social Media"
            className="flex flex-wrap gap-4 text-textSecondary justify-end"
            role="navigation"
          >
            {SOCIAL_LINKS.map(({ label, href }) => (
              <AnimatedUnderlineLink ariaLabel={`Visit Lou Cobos on ${label}`} href={href} key={label} label={label} />
            ))}
          </nav>
          <p className="text-textTertiary">&copy; Lou Cobos 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
