import Nav from "./Nav";
import Footer from "./Footer";

const NotFound = ()=>{
  return(
    <div style={{
     
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
      marginTop : 80,
      gap: 20


    }}>
      <img src="./images/not-found.svg"  width ="600" alt="" />
      <h1 style={{color:"#6C63FF"}}>Not found</h1>
    </div>
  )
}
export default NotFound;