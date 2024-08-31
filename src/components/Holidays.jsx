import Nav from "./Nav";
import Footer from "./Footer";

const Holidays = () =>{

  const holidays = [
      {
        title : "Summer Vocation",
        duration : "1 month",
        date : "10-10-2024"
      },

      {
        title : "Summer Vocation",
        duration : "1 month",
        date : "10-10-2024"
      },

      {
        title : "Summer Vocation",
        duration : "1 month",
        date : "10-10-2024"
      },

      {
        title : "Summer Vocation",
        duration : "1 month",
        date : "10-10-2024"
      },
  ]
  return(
    <div>
      <Nav/>
           <div style={{
            width : '80%',
            margin : "0 auto",
            textAlign : "center",
            padding : "64px 0px"
           }}>
              <h1 style={{fontSize : 32 , padding : 0 , margin : 0 , fontWeight : "bold"}}>Teacher's Holiday's</h1>

                <table width='100%'>
                   <thead>
                      <tr style={{
                        background : "#ccc",
                        
                      
                      }}>
                          <th style={{padding : 10 ,  border : '1px solid white'}}>S/No</th>
                          <th style={{  border : '1px solid white'}}>Title</th>
                          <th style={{  border : '1px solid white'}}>Duration</th>
                          <th style={{  border : '1px solid white'}}>Date</th>
                      </tr>
                   </thead>
                      <tbody>
                          {
                              holidays.map((item , index)=>(
                                <tr key={index} style={{
                                  textAlign : "center",

                                }}>
                                    <td style={{padding : 14 , borderBottom : '1px solid #ddd'}}>{index}</td>
                                    <td style={{padding : 14 , borderBottom : '1px solid #ddd'}}>{item.title}</td>
                                    <td style={{padding : 14 , borderBottom : '1px solid #ddd'}}>{item.duration}</td>
                                    <td style={{padding : 14 , borderBottom : '1px solid #ddd'}}>{item.date}</td>
                                </tr>
                              ))
                          }
                      </tbody>
                </table>
           </div>
      <Footer/>
    </div>
  )
}
export default Holidays;