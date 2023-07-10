import React from 'react'
import styles from "./Navbar.module.css";

export default function Navitem(props) {
    const { text, href } = props;
    return (
        <li className={styles['nav-item']}>
        <a href={href}>{text}</a>
        </li>
    )
}