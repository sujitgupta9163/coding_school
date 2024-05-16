import Nav from "./Nav";
import Footer from "./Footer";


const teachers = [
  {
    image : "./teachers/a.jpg",
    name : "Raj kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/b.jpg",
    name : "Devanand kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/c.jpg",
    name : "Lalit kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/d.jpg",
    name : "Nikhil kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/e.jpg",
    name : "Toshak kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/f.jpg",
    name : "Tanishk kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/g.jpg",
    name : "Sunny kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/h.jpg",
    name : "Sujit kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/i.jpg",
    name : "Aditya kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/j.jpg",
    name : "Alok kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/k.jpg",
    name : "Vipry kumar",
    qua : "MCA (Quantum Univercity)"
  },

  {
    image : "./teachers/l.jpg",
    name : "Surendar kumar",
    qua : "MCA (Quantum Univercity)"
  },
  
]

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
          

          {
            teachers.map((teacher , index)=>{
              return (
                <div style={{width : "20%"}} key={index}>
                  <img src={teacher.image} width="100%" alt={teacher.image} style={{borderRadius : "5px"}}/>
                  <h2>{teacher.name}</h2>
                  <p>{teacher.qua}</p>
              </div>
              )
            })
          }

        </section>
      </div>
      <Footer/>
    </div>
  )
}
export default Teachers;