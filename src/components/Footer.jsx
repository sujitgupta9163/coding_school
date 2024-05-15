import {Link} from "react-router-dom";

const Footer = ()=>{
  return(
   <footer style={{
    background : "#04011C",
    padding : "80px  15%",
   
    display : "flex",
    justifyContent : "space-between",
    gap : "50"
   }}>

    <div style={{
      width : "100%",
      display : "flex",
      flexDirection : "column",
      gap : 10

    }}>
      <h2 style={{
        color : "white",
        fontWeight : 600,
      }}>Coding institute</h2>
      <p style={{
        color : "white"
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis hic </p>
    </div>

    <div style={{
      width : "100%",
      display : "flex",
      flexDirection : "column",
      gap : 10

    }}>
      <h2 style={{
        color : "white",
        fontWeight : 600,
      }}>Popular Links</h2>
      
      <ul style={{
        padding : 0,
        margin : 0,
        listStyle : "none",
       display : "flex",
       flexDirection : "column",
       gap : 10
      }}>
        <li>
        <Link to = "/" style={{
          color : "white",
          textDecoration : " none"
        }}>Home</Link>
        </li>

        <li>
        <Link to = "/teachers" style={{
          color : "white",
          textDecoration : " none"
        }}>Teachers</Link>
        </li>

        <li>
        <Link to = "/holidays" style={{
          color : "white",
          textDecoration : " none"
        }}>Holidays</Link>
        </li>

        <li>
        <Link to = "/contact-us" style={{
          color : "white",
          textDecoration : " none"
        }}>Contacts</Link>
        </li>
      </ul>
    </div>

    <div style={{
      margin : 0,
      padding : 0,
      width : "100%",
      display : "flex",
      flexDirection : "column",
      gap : 10

    }}>
      <h2 style={{
        color : "white",
        fontWeight : 600,
      }}>Social Links</h2>
       
       <ul style={{
        display : "flex",
        flexDirection : "column",
        gap : 10,
        margin : 0,
        padding : 0,
        listStyle : "none",
        
       }}>
        <li>
          <Link to = "" style={{
            color : "white",
            textDecoration : "none",
          }}>
            <i className="ri-instagram-line"></i>
            Instagram</Link>
        </li>

        <li>
          <Link to= "https://www.linkedin.com/feed/" style={{
            color : "white",
            textDecoration : "none"
          }}>
            <i className="ri-linkedin-box-fill"></i>
            LinkedIn</Link>
        </li>

        <li>
          <Link to= "" style={{
            color : "white",
            textDecoration : "none"
          }}>
            <i className="ri-youtube-line"></i>
            Youtube</Link>
        </li>

        <li>
          <Link to="https://www.facebook.com/" style={{
            color : "white",
            textDecoration : "none"
          }}>
            <i className="ri-facebook-circle-fill"></i>
            Facebook</Link>
        </li>

        <li>
          <Link to="https://github.com/sujitgupta9163/" style={{
            color : "white",
            textDecoration : "none",
            
          }}>
            <i class="ri-github-fill"></i>
            Github</Link>
        </li>
       </ul>
    </div>

    <div style={{
      width : "100%",
      display : "flex",
      flexDirection : "column",
      gap : 10

    }}>
      <h2 style={{
        color : "white",
        fontWeight : 600,
      }}>Contact us</h2>
    
    <form style={{
      display : "flex",
      flexDirection : "column",
      gap : 20
    }}>
      <input type="text" 
      required
      name="fullname"
      placeholder="fullname"

      style={{
        border : "none",
        padding : "11px",
        borderRadius : "5px",
        width : "100%"
      }}
      />

     <input type="email" 
      required
      name="email"
      placeholder="email"

      style={{
        border : "none",
        padding : "11px",
        borderRadius : "5px",
        width : "100%"
      }}
      />

     <textarea type="text" 
      required
      name="message"
      placeholder="message"

      style={{
        border : "none",
        padding : "11px",
        borderRadius : "5px",
        width : "100%"
      }}
      rows= "3"
      ></textarea>

      <button className="footer-btn" style={{
        color : "white",
        fontWeight : 600,
        fontSize : "16px",
        border : "none",
        padding : "12px 5px",
        borderRadius : "5px",
        backgroundColor : "#FFA500"
      }}>submit</button>
      
    </form>
    </div>
    
   </footer>
  )
}
export default Footer;

