
import {Link} from "react-router-dom";
import "./nav.css"

const Nav = ()=>{
  return(
    <nav style={{
      background : "white",
      display : "flex",
      justifyContent : "space-between",
      padding : "10px 30px",
      boxShadow : '0  8px 8px  0 rgba(0,0,0,0.1)'
     
     
    }}>
        <div style={{
          display : "flex",
          alignItems : "center",
          gap : "8px"
        }}>
        <img 
         src="./images/logo.png" 
         width="60"
         alt="" 
     />

     <h1>Coding Institute</h1>
        </div>

        <ul style={{
          listStyle : "none",
          padding : 0,
          margin : 0,
          display : "flex",
          gap : "50px",
          
        }}>
           <li style={{
            display : "flex",
            alignItems : "center",
            padding : 10,
            
           }}>
            <Link to="/" style={{
            textDecoration : "none",
            color : "#323232",
            fontSize : "18px",
           
           }}>Home</Link></li>

           <li style={{
            display : "flex",
            alignItems : "center",
            padding : 10,
            
           }}>
            
            <Link to="/teachers" style={{
            textDecoration : "none",
            color : "#323232",
            fontSize : "18px",
           
           }}>Teachers</Link></li>

            <li style={{
            display : "flex",
            alignItems : "center",
            padding : 10,
            
           }}>
           
            <Link to="/holidays" style={{
            textDecoration : "none",
            color : "#323232",
            fontSize : "18px",
           
           }}>Holiday</Link></li>

            <li style={{
            display : "flex",
            alignItems : "center",
            padding : 10,
            
           }}>
            
            <Link to="/contact-us" style={{
            textDecoration : "none",
            color : "#323232",
            fontSize : "18px",
           
           }}>Contact </Link></li>

          <li style={{
            display : "flex",
            alignItems : "center",
            padding : 10,
            
           }}>
           
            <Link to="/talk-to-us" className="talk-to-us-btn" style={{
            textDecoration : "none",
            color : "white",
            fontSize : "18px",
            backgroundColor : "#6C63FF",
            padding : "8px 20px",
            borderRadius : 5
           
           }}>Talk to us</Link></li>
           
           
        </ul>
    </nav>
  )
}
export default Nav;