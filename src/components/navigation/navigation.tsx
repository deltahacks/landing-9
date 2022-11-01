import Logo from "../../../public/DH9.svg";
import Facebook from "../../../public/Facebook.svg";
import Instagram from "../../../public/Instagram.svg";
import Linkedin from "../../../public/LinkedIn.svg";
import Twitter from "../../../public/Twitter.svg";

const socialIcons = {
    Facebook: {
        img: Facebook,
        href: "https://www.facebook.com/thedeltahacks/",
    },
    Instagram: {
        img: Instagram,
        href: "https://www.instagram.com/deltahacks/",
    },
    Linkedin: {
        img: Linkedin,
        href: "https://www.linkedin.com/company/deltahacks",
    },
    Twitter: {
        img: Twitter,
        href: "https://twitter.com/DeltaHacks",
    },
};

const buttons = ["About", "FAQ", "Sponsors", "Contact"];

const SocialIcon = ({
    logo,
    title,
    href,
}: {
    logo: any;
    title: string;
    href: string;
}) => {
    return (
        <a href={href} className="mr-2 filter hover:brightness-90">
            <img src={logo} alt={title} className="h-8 w-8"></img>
        </a>
    );
};

const NavButton = ({ title }: { title: string }) => {
    return (
        <a
            href="#"
            className="font-minecraft font-white text-white font-light mr-3"
        >
            {title}
        </a>
    );
};

const Navigation = () => {
    return (
        <div className="flex justify-between items-center bg-slate-600 bg-opacity-40 w-full h-12">
            <div className="h-9 w-9 flex justify-center align-center ml-2">
                <img src={Logo} alt="Deltahacks logo" />
            </div>
            {/* <div>
                {buttons.map((title) => (
                    <NavButton key={title} title={title} />
                ))}
            </div> */}

            <div className="flex justify-center align-center">
                {Object.entries(socialIcons).map(([key, value]) => (
                    <SocialIcon
                        key={key}
                        title={key}
                        logo={value.img}
                        href={value.href}
                    />
                ))}
            </div>
        </div>
    );
};

export default Navigation;
