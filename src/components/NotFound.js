import Hero from "./Hero";
const NotFound = () => {
    return(
        <>
             <Hero text="404 Error - Page Not Found" />
            {/* <h1 className="error-heading">404 Error</h1> */}
            {/* <h1 className="error-heading">Page Not Found</h1> */}
            <p className="error-txt">This was a web page that doesn't exist.
            <br /><br /> 
                If you came upon this page by mistake, try checking the URL in your web browser.</p>
        </>
      
    );
   
}

export default NotFound
