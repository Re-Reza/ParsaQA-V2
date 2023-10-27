export default function importBootstrap(locale){
    if ( locale == "fa" || locale == "ar" )
    {
        // console.log("in.......................")
        return  import("bootstrap/dist/css/bootstrap.rtl.min.css");
    }
    else{
        // console.log("in ==========================")
        return  import("bootstrap/dist/css/bootstrap.min.css");
    }
}