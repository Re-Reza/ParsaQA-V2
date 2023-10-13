export const metadata = {
    title: 'پارسا',
}

export const dynamic = "force-dynamic";
import  { use } from "react"
import Header from "./homeComponents/Header";
import Aside from "./homeComponents/Aside";
import Introduction from "./homeComponents/Introduction";
import Questions from "./homeComponents/Questions";
// import OurTeam from "./homeComponents/OurTeam";
import Footer from "./homeComponents/Footer";
import Error from "./error/Error";
import moment from "jalali-moment";
import { getLastQuestions, getCategories, getHadis } from "../../dataService/homeData";

async function getQuestionsData(locale) {
    try{
        // const resposne = await getLastQuestions(locale);
        const date = moment().format("YYYY-MM-DD");
        const resposne =  await fetch(`https://api.parsaqa.com/api/v1/questions/recommended?filter[]=language,${locale}&filter[]=created_at,${date}`,{
            // cache : "no-store",
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
        const data = (await resposne).json();
        return data;
    }
    catch(err) {
        console.log(err);
        return null;
    }
}

async function getCategoriesData(){
    try{
        const responseData = await getCategories(1);
        return responseData.data;
    }
    catch(err) {
        console.log(err);
        return null;
    }
    
}

async function getHadisData(){
    try{
        const responseData = await getHadis();
        return responseData.data;
    }
    catch(err) {
        console.log(err);
        return null;
    }
    
}

export default function Home({ params : { locale }}) {
    const serverData = use(getQuestionsData(locale));
    // console.log(serverData)
    const categories = ( use(getCategoriesData()) );
    const hadisData = use( getHadisData() );

    return (
        <>
            <main className="mainContentContainer">
                <Header lang={locale} />
                <div className="home-questionContainer">
                    {
                        serverData ? 
                        <Questions data={serverData.data}/>
                        :
                        <Error/>
                    }
                    <aside className="aside">
                        {
                            categories ? 
                            <Aside hadisData={hadisData} data={categories.data}/> : <></>
                        }
                    </aside>
                </div>
                <Introduction />
                {/* <OurTeam /> */}
            </main>
            <Footer/>
        </>
    )
}
