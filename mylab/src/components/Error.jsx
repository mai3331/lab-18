import React from "react";
import { Link,useRouteError } from "react-router-dom";


const Error=()=>{
const err=useRouteError()
    return(
    <>
    <div className="container text-center mt-4 my-auto" style={{backgroundColor:'#b0c4b1',display:'block'}}>
        <h2>Oops,an error has occured...</h2>
        <p className="mb-5">{err.message}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/" className="btn" style={{ border: '#84a59d solid 3px', padding: '10px 20px', textDecoration: 'none', color: 'white' , backgroundColor: '#e9edc9' }}>
            GO Back to Home page
        </Link>
    </div>
    </div>
      
    </>
    )
}
export default Error