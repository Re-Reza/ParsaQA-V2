import Header from "../homeComponents/Header";
import Footer from "../homeComponents/Footer";
import styles from "../../../../public/styles/question.module.scss";

export default function layout({ children }) {
    return (
        <>
            <div className="mainContentContainer">
                <Header />
                {children}
            </div>
            <Footer />
        </>
    )
}