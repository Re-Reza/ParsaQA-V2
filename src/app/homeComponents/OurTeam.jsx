import React from "react";

import styles from "../../../public/styles/home.module.scss";

import { FaLinkedin } from "react-icons/fa";

function OurTeam() {

    return (
        <section className={styles["ourTeamSection"]}>

            <article className="d-flex align-items-center mb-4">
                <div className="txt-c-large txt-gray3 me-5">تیم ما</div>
                <div className="d-flex ms-5">
                    <div className="d-flex flex-column align-items-center me-4">
                        <img src="/imgs/teamate1.png" alt="teamate1" />
                        <span className={styles["ourTeamIcon"]}><FaLinkedin /></span>
                    </div>
                    <div className="d-flex flex-column align-items-center me-4">
                        <img src="/imgs/teamate2.png" alt="teamate2" />
                        <span className={styles["ourTeamIcon"]}><FaLinkedin /></span>
                    </div>
                    <div className="d-flex flex-column align-items-center me-4">
                        <img src="/imgs/teamate3.png" alt="teamate3" />
                        <span className={styles["ourTeamIcon"]}><FaLinkedin /></span>
                    </div>
                    <div className="d-flex flex-column align-items-center me-4">
                        <img src="/imgs/teamate4.png" alt="teamate4" />
                        <span className={styles["ourTeamIcon"]}><FaLinkedin /></span>
                    </div>
                    <div className="d-flex flex-column align-items-center me-4">
                        <img src="/imgs/teamate5.png" alt="teamate5" />
                        <span className={styles["ourTeamIcon"]}><FaLinkedin /></span>
                    </div>
                    <div className="d-flex flex-column align-items-center me-4">
                        <img src="/imgs/teamate6.png" alt="teamate6" />
                        <span className={styles["ourTeamIcon"]}><FaLinkedin /></span>
                    </div>

                </div>
            </article>

            <article className="d-flex align-items-center">
                <div className="txt-c-large txt-gray3 me-5">حامیان و همکاران</div>
                <div className="d-flex align-items-center ms-5">
                    <img src="/imgs/bonyad.png" className="me-4" alt="bonyad" />
                    <img src="/imgs/sutLogo.png" className="me-4" alt="sut" />
                    <img src="/imgs/hoze.logo.png" className="me-4" alt="hoze" />
                    <img src="/imgs/logoRight.png" className="me-4" alt="logoRight" />
                    <img src="/imgs/logoLeft.png" className="me-4" alt="logoLeft" />
                </div>
            </article>

        </section>
    )
}


export default OurTeam;