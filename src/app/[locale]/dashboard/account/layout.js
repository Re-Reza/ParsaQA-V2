"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../../../../../public/styles/dashboard.module.scss";

function LayOut({ children }) {

    const links = [
        { title: "مشخصات", path: "/dashboard/account/info" },
        { title: "تنظیمات", path: "/dashboard/account/settings" },
        { title: "امتیازات ", path: "/dashboard/account/rates" },
    ];

    const path = usePathname();
    console.log(path)

    return (
        <div className={styles.settingContainer}>
            <ul className="d-flex justify-content-around mb-5">
                {
                    links.map((item, index) => <li className={"txt-gray3 fw-500 "+styles["link"]+" "+ ( item.path == path ? styles["activeLink"] : "" )} key={index}>
                        <Link href={item.path}>{item.title}</Link>
                    </li>)
                }
            </ul>

            <div>
                {children}
            </div>
        </div>
    )
}

export default LayOut;