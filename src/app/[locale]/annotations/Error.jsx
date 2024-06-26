import { BiError } from "react-icons/bi";
import styles from "../../../../public/styles/error.module.scss";

function Error({text}){
    
    return(
        <div className={styles["error"]}>
           {text ? text : "در دریافت اطلاعات خطایی رخ داده است " }<span className={styles["errIcon"]}><BiError/></span> 
        </div>
    )
}

export default Error;