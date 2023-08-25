import React from "react";

import Header from "../homeComponents/Header";
import Footer from "../homeComponents/Footer";
import AsideInfo from "../dashboardComponents/AsideInfo";

import styles from "../../../public/styles/dashboard.module.scss";

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
