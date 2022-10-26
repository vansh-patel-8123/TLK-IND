import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ lang = false }) {
    return (
        <>
            {lang ? (
                <ul>
                    <li>
                        <a href="#">
                            أنا <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">الصفحة الرئيسية 1</Link>
                            </li>
                            <li>
                                <Link to="/home-dark">الصفحة الرئيسية الظلام</Link>
                            </li>
                            <li>
                                <Link to="/home-rtl">الصفحة الرئيسية Rtl</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/service">خدمة</Link>
                    </li>
                    <li>
                        <Link to="/about-us">عن</Link>
                    </li>
                    <li>
                        <Link to="/contact">اتصل</Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a href="#">
                            Home <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">Home 1</Link>
                            </li>
                            <li>
                                <Link to="/home-dark">Home Dark</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/about-us">About</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navigation;
