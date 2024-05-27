import Nav from "./Nav";
import Footer from "./Footer";
import 'animate.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";






const Home =()=>{
 return(
  <div>
      <Nav/>
           <div>
                <header className="grid md:grid-cols-2 md:p-20 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  animate__animated animate__fadeIn ">
                  <div><img src="./images/faculty.jpg " 
                  className="w-3/4 rounded-2xl animate__animated animate__pulse  animate__bounceIn border border-indigo-500/50 shadow-xl "
                  /></div>

                <div className="flex flex-col gap-5 justify-center">
                  <h1 className=" text-7xl font-bold text-white">"Say Hello ! Learn Coding this platfoem</h1>
                  <p className="text-2xl text-semibold text-stone-600">Enjoy complete digital learning experince with code school </p>
                    <div className="flex gap-6">
                        <button className="bg-stone-600 text-white px-8 py-2 rounded-md text-lg hover:bg-orange-600">Learn More</button>
                        <button  className=" border boder-2 border-[#57534E] px-8 py-2 rounded-md text-lg text-[#57534E] font-semibold  hover:bg-orange-600 hover:text-white" >Watch Video</button>
                    </div>
                </div>
                  
                </header>

                    <div className="p-24">
                    <h1 className="text-center text-4xl font-bold">Benifits & Advantages</h1>
                    <p className="text-gray-600 text-center mt-5 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nostrum dolor, fuga quos voluptatum possimus dolorem accusantium architecto cum distinctio a quae nihil culpa consectetur sint! Quaerat a perspiciatis sit quod eum sunt laboriosam voluptates.</p>

                      <div className="w-11/12  mx-auto mt-12 grid grid-cols-4 gap-6">
                            <div className="shadow-2xl boder rounded-md p-4 text-center">
                              <i className="ri-artboard-line text-6xl"></i>
                              <h1 className="text-2xl font-semibold text-center mb-3">Great Faculty</h1>
                              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos alias saepe praesentium animi aspernatur</p>
                            </div>


                            <div className="shadow-2xl boder rounded-md p-4 text-center">
                            <i className="ri-edit-box-line text-6xl"></i>
                              <h1 className="text-2xl font-semibold text-center mb-3">Latest Curriculum</h1>
                              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos alias saepe praesentium animi aspernatur </p>
                            </div>

                            <div className="shadow-2xl boder rounded-md p-4 text-center">
                              <i className="ri-tree-line text-6xl"></i>
                              <h1 className="text-2xl font-semibold text-center mb-3">Green Enviroment</h1>
                              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos alias saepe praesentium animi aspernatur</p>
                            </div>

                            <div className="shadow-2xl boder rounded-md p-4 text-center">
                              <i className="ri-shake-hands-line text-6xl"></i>
                              <h1 className="text-2xl font-semibold text-center mb-3">Support's</h1>
                              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos alias saepe praesentium animi aspernatur </p>
                            </div>
                            
                      </div>
                      

                      
                    </div>

                    <div className="p-24 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    <h1 className="text-center text-4xl font-bold">Campus Portfolio</h1>
                    <p className="text-gray-600 text-center mt-5 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nostrum dolor, fuga quos voluptatum possimus dolorem accusantium architecto cum distinctio a quae nihil culpa consectetur sint! Quaerat a perspiciatis sit quod eum sunt laboriosam voluptates.</p>

                    <div className="grid grid-cols-2">
                        <div>
                        <Swiper className="w-9/12  mt-8">
                          <SwiperSlide><img src="./images/s1.jpg" className="w-full rounded-xl" /></SwiperSlide>
                          <SwiperSlide><img src="./images/s2.jpg" className="w-full rounded-xl" /></SwiperSlide>
                          <SwiperSlide><img src="./images/s3.jpg" className="w-full rounded-xl" /></SwiperSlide>
                          <SwiperSlide><img src="./images/s4.jpg" className="w-full rounded-xl" /></SwiperSlide>
                          <SwiperSlide><img src="./images/s5.jpg" className="w-full rounded-xl" /></SwiperSlide>
                          
                          
                        
                          </Swiper>
                        </div>

                        <div className="flex flex-col gap-5 justify-center">
                             <h1 className=" text-7xl font-bold text-white">"Say Hello ! Learn Coding this platfoem</h1>
                             <p className="text-2xl text-semibold text-stone-600">Enjoy complete digital learning experince with code school </p>
                             <div className="flex gap-6">
                             <button className="bg-stone-600 text-white px-8 py-2 rounded-md text-lg hover:bg-orange-600">Learn More</button>
                             <button  className=" border boder-2 border-[#57534E] px-8 py-2 rounded-md text-lg text-[#57534E] font-semibold  hover:bg-orange-600 hover:text-white" >Watch Video</button>
                       </div>
                    </div>
                    </div>

                   </div>
                
           </div>
      <Footer/>
</div>
 )
}
export default Home;