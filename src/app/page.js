export const metadata = {
    title: 'پارسا',
    // description: 'Generated by create next app',
}
import  { use } from "react"
import Header from "./homeComponents/Header";
import Aside from "./homeComponents/Aside";
import Introduction from "./homeComponents/Introduction";
import Questions from "./homeComponents/Questions";
import OurTeam from "./homeComponents/OurTeam";
import Footer from "./homeComponents/Footer";
import { getLastQuestions, getCategories } from "../dataService/homeData";



async function getQuestionsData() {
    // const resposne = await getLastQuestions();
    // console.log(resposne.data)
    return "hi"
}

async function getCategoriesData(){
    console.log("in this")
    const responseData = (await getCategories());
    console.log("hererer")
    console.log(responseData)
    return responseData.data;
}

export default function Home() {
    try {
        // const h = use(getQuestionsData());
        // const categories = use(getCategoriesData())
    }
    catch ( err ) {
        console.log(err)
    }

    return (
        <>
            <main className="mainContentContainer">
                <Header />
                <div className="home-questionContainer">
                    <Questions />
                    <aside className="aside">
                        <Aside/>
                    </aside>
                </div>
                <Introduction />
                {/* <OurTeam /> */}
            </main>
            <Footer/>
        </>
    )
}