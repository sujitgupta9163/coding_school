import Nav from "./Nav";
import Footer from "./Footer";

const Teachers =()=>{
  return(
    <div>
      <Nav/>
      <div>
        <header style={{
           height : "100px",
           backgroundImage: "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )",
           display : "flex",
           justifyContent : "center",
           alignItems : "center"
         }}>
          <h1 style={{
            fontSize : "40px",
          }}>
            <i className="ri-presentation-line" style={{marginRight : "14px"}}></i>
            Teachers</h1>
        </header>

        <section style={{
          // height : "2000px",
          // background : "red",
          width : "80%",
          margin : "0 auto",
          padding : "50px 0",
          display : "flex",
          alignItems :"center",
          justifyContent : "center",
          columnGap : "2%",
          rowGap : 40,
          flexWrap : "wrap"
        }}>
          <div style={{width : "20%"}}>
            <img src="./teachers/a.jpg" width="100%" style={{borderRadius : "5px"}}/>
            <h2>Sumit kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/b.jpg" width="100%" style={{
              borderRadius : "5px"
            }} />
            <h2>Abhshek kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/c.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Alok kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/d.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Lalit kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/e.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Toshak kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/f.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Nikhil kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/g.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Krishna kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/h.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Devanand kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>


          <div style={{width : "20%"}}>
            <img src="./teachers/i.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Sujit kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/j.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Aditya kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/k.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Sunny kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>

          <div style={{width : "20%"}}>
            <img src="./teachers/c.jpg" width="100%" style={{
              borderRadius : "5px"
            }}/>
            <h2>Sumit kumar</h2>
            <p>MCA (Quantum Univercity)</p>
          </div>



          

        </section>


      </div>
      <Footer/>
    </div>
  )
}
export default Teachers;