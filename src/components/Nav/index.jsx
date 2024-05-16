
import {Link} from "react-router-dom";
import "./nav.css"

const menus = [
    {
      label : "Home",
      href : "/",
    },

    {
      label : "Teachers",
      href : "/teachers",
    },

    {
      label : "Holidays",
      href : "/holidays",
    },

    {
      label : "Contact",
      href : "/contact-us",
    },
]

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
          

          {menus.map((memu , index)=>{
            return(
              <li style={{
                   display : "flex",
                   alignItems : "center",
                   padding : 10,
                
               }}>
                <Link to={memu.href} style={{
                textDecoration : "none",
                color : "#323232",
                fontSize : "18px",
               
               }}>{memu.label}</Link></li>
    
            )
          })}

          
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