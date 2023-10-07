export default function importBootstrap(locale){
    if ( locale == "fa" || locale == "ar" )
    {
        return  import("bootstrap/dist/css/bootstrap.rtl.min.css");
    }
    else{
        return  import("bootstrap/dist/css/bootstrap.min.css");
    }
}