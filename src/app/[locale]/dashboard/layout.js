import React from "react";

import Header from "../[locale]/homeComponents/Header";
import Footer from "../[locale]/homeComponents/Footer";
import AsideInfo from "../[locale]/dashboardComponents/AsideInfo";

import styles from "../../../../public/styles/dashboard.module.scss";

export default function layout({ children }) {
    return (
        <>
            <div className="mainContentContainer">
                <Header isDashboard={true} />

                <div className={styles["contentContainer"]}>
                    {children}
                    <AsideInfo />
                </div>

            </div>

            <Footer />
        </>
    )
}
