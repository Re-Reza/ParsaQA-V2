import Header from "../[locale]/homeComponents/Header";
import Footer from "../[locale]/homeComponents/Footer";
import styles from "../../../../public/styles/question.module.scss";

export default function layout({ children }) {
    return (
        <>
            <div className="mainContentContainer">
                <Header question={true} />
                {children}
            </div>
            <Footer />
        </>
    )
}