import React from 'react';
import './Footer.scss';

const Footer = () => {
    const contactInfo = [
        {
            text: "info@plantit.com",
            href: "mailto:info@plantit.com"
        },
        {
            text: "tel:11 23456789",
            href: "11 23456789"
        },
        {
            text: "Av Siempreviva 123",
            href: "https://goo.gl/maps/YMdNgCnfwwPkEt4S7"
        }
    ]

    const socialInfo = [
        {
            text: "facebook",
            href: "facebook.com"
        },
        {
            text: "instagram",
            href: "instagram.com"
        }
    ]

    return (
        <footer>
            <nav>
                <ul>

                    {contactInfo.map((item, key) => {
                        return (
                            <li key={key}>
                                <a href={item.href}> {item.text}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {socialInfo.map((item, key) => {
                        return (
                            <li key={key}>
                                <a href={item.href}> {item.text}</a>
                            </li>

                        )
                    })}
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;