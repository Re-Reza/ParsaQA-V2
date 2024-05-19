
export default function Loading1({locale}){

    return (
        <div className={locale == "en" ? "en-loading lds-spinner" : "fa-loading lds-spinner"} ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}