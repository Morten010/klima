import React from 'react'
import { footerLinks } from '../constants'
import style from "./Footer.module.scss"
import logo from "../assets/Partner-UNDP-Full.png"

export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className={"container " + style.cont}>
            {footerLinks.map(item => (
                <div>
                    <h2>
                        {item.title}
                    </h2>
                    <ul>
                        {item.links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url}>
                                    <span>
                                        {link.title}
                                    </span>
                                    {link.pdf && (
                                        <span>(.pdf)</span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <img src={logo} alt="logo" />
        </div>
    </footer>
  )
}
