import React from "react";
import Header from "../homeComponents/Header";
import Footer from "../homeComponents/Footer";
import { FaLinkedin }  from "react-icons/fa";
import styles from "../../../../public/styles/aboutUs.module.scss";

function AboutUs(){

    const teamList = [
      { name : "پروفسور حمید حسن پور", title : "استادتمام دانشگاه صنعتی شاهرود", linkedin : ""},
      { name : "محمدحسین الهی منش", title : "دکتری دانشگاه صنعتی شاهرود", linkedin : ""},
      { name : "محمدرضا حسن پور", title : "دکتری دانشگاه صنعتی شاهرود", linkedin : ""},
      { name : "آرش غفوری", title : "دکتری دانشگاه علم و صنعت", linkedin : ""},
      { name : "حمیده عرفانی", title : "دکتری دانشگاه سمنان", linkedin : ""},
      { name : "میثم گنجعلی دارانی", title : "کارشناسی ارشد دانشگاه شهاب دانش", linkedin : ""},
      { name : "مرسده ایرانی", title : "کارشناس ارشد دانشگاه علم و صنعت", linkedin : ""},
      { name : "محمد آقاجانی", title : "کارشناس ارشد دانشگاه صنعتی شریف", linkedin : ""},
      { name : "فاطمه وطنی", title : "کارشناس ارشد دانشگاه سمنان", linkedin : ""},
      { name : "ایمان براتی", title : "کارشناس ارشد دانشگاه علم و صنعت", linkedin : ""},
      { name : "آیسان چهره", title : "کارشناس ارشد دانشگاه زنجان", linkedin : ""},
      { name : "اعظم نعمتی", title : "کارشناسی ارشد دانشگاه هنر", linkedin : ""},
      { name : "محمدهادی الهی منش", title : "سطح سوم حوزه علمیه", linkedin : ""},
      { name : "علیرضا بانشی", title : "کارشناسی ارشد دانشگاه تهران", linkedin : ""},
      { name : "محمد پوربخت", title : "کارشناسی دانشگاه خوارزمی", linkedin : ""},
      { name : "مبینا اسماعیلی", title : "کارشناس دانشگاه الزهرا", linkedin : ""},
      { name : "بهار بهزادی پور", title : "کارشناسی دانشگاه خوارزمی", linkedin : ""},
      { name : "یاسمن تیموری", title : "کارشناسی دانشگاه صنعتی شاهرود", linkedin : ""}
    ];

    return(
      <>
        
        <div className="mainContentContainer">
            <Header isAboutUs={true} />

            <div className="position-relative fw-500 txt-gray zindex-dropdown">
              <h1 className={styles["title"]+" text-center txt-gray3"}>
                 تیم&nbsp;
                <span style={{fontSize : "2rem"}} className="txt-darkBlue">پارسا</span>&nbsp;
              </h1>

              <h3  style={{fontSize : "1.5rem"}} className="txt-c-large mb-4 mt-4 txt-gray3">
                درباره ما
              </h3>
              <p className="lh-lg">
              بسیاری از مردم جامعه، در زندگی روزمره خود با مسائل دینی مختلفی مواجه می‌شوند که دریافت پاسخ این پرسشها گاها برای آنها ناممکن و یا زمان بر است. از این رو در سالهای گذشته، سامانه‌های برخط متعددی آماده شده است که از طرفی روند پرسش سوال را بصورت الکترونیکی در اختیار مردم قرارداده و از طرف دیگر، امکان پاسخگویی متمرکز را برای دفاتر مراجع و مراکز پاسخ گویی، فراهم نموده است.
  اما این سامانه‌ها با مشکلات متعددی دست و پنجه نرم می‌کنند که تاثیر بسیار بدی در خدمات آنها گذاشته است. نبود موتور جستجوی معنایی پرسش و پاسخ سیستم هوشمند پاسخگویی به سوالات چالش سوالات تکراری چالش تگ‌گذاری انبوه سوالات چالش غلط های نگارشی و املایی کاربران و حتی افراد خبره پاسخ گو سوالات نامناسب و مناسب حال کاربران ....
              </p>
              <p className="mt-3 mb-3">گروه پارسا در اين زمينه تلاش هايی به عمل آورده است که از جمله آن به موارد زیر میتوان اشاره نمود:</p>
              <ul>
                <li className={styles['featurelistItem']+" mb-3"}>یافتن سوالات مشابه، مرتبط و تکراری</li>
                <li className={styles['featurelistItem']+" mb-3"}>موتور جستجوی سوالات از تمامی پایگاه‌های پرسش و پاسخ اسلامی</li>
                <li className={styles['featurelistItem']+" mb-3"}>تگ‌گذاری خودکار سوالات</li>
                <li className={styles['featurelistItem']+" mb-3"}>سیستم‌های توصیه‌گر سوال</li>
                <li className={styles['featurelistItem']+" mb-3"}>تصحیح غلطهای املایی در سوالات، پاسخ‌ها و متن مورد جستجو</li>
                <li className={styles['featurelistItem']+" mb-3"}>ساده سازی متن سوالات</li>
                <li className={styles['featurelistItem']+" mb-3"}>تصحیح غلطهای املایی در سوالات، پاسخ‌ها و متن مورد جستجو</li>
                <li className={styles['featurelistItem']+" mb-3"}>یافتن پاسخ سوال از متن خام کتابهای اسلامی</li>
                <li className={styles['featurelistItem']+" mb-3"}>سامانه لیبل گذاری دیتا و تولید دیتاست</li>
              </ul>
            </div>

            <ul className={styles["teamListContain er"]}>
              {
                teamList.map((item, index) => <li className="d-flex flex-column align-items-center" key={index}>
                  <img src="/imgs/team-member.png"/>
                  <div className="txt-grey3 mt-3 fw-500" >{item.name}</div>
                  <div className="txt-muted mt-3">{item.title}</div>
                  <div className="txt-c-large txt-large txt-darkBlue mt-2"><FaLinkedin/></div>
                </li>)
              }
            </ul>

        </div>
        <Footer />
      </>
    )
}

export default AboutUs;