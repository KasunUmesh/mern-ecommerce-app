// Footer
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import linkedin from '../assets/linkedin.svg'

// FOOTER SECTION
const FOOTER_LINKS = [
    {
        title: "Learn More",
        links: [
            "About Us",
            "Categories",
            "Exchange Policy",
            "Order Now",
            "FAQ",
            "Privacy Policy",
        ],
    },
    {
        title: "Our Community",
        links: [
            "Terms and Conditions",
            "Special Offers",
            "Customer Reviews",
        ],
    },
];

const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
        { label: "Contact Number", value: "123-456-7890" },
        { label: "Email Address", value: "info@shoppee.com" },
    ],
};

const SOCIALS = {
    title: "Social",
    links: [
        facebook,
        instagram,
        twitter,
        youtube,
        linkedin,
    ],
};

const FooterData = {
    FOOTER_LINKS,
    FOOTER_CONTACT_INFO,
    SOCIALS,
}

export default FooterData;