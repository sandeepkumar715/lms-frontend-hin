import aboutMainPage from "../assets/Images/aboutMainPage.jpg";
import billgates from "../assets/Images/bill gates.png"
import einstein from "../assets/Images/einstein.jpg"
import kalam from "../assets/Images/kalam.png"
import nelsonmandela from "../assets/Images/nelson mandela.jpeg"
import stevejob from "../assets/Images/steve job.jpg"
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs(){
        return(
            <HomeLayout>
                <div className="pl-20 pt-20 flex flex-col text-white">
                    <div className="flex items-center gap-5 mx-10">
                        <section className="w-1/2 space-y-10">
                            <h1 className="text-yellow-500 text-5xl font-semibold">

                                Affordable and quality education
                            </h1>
                            <p className="text-xl text-gray-200">
                                Our goal is to provide the Affordable and quality education to the world.
                                We are providing the platform for the aspiring teachers and students to share 
                                their skills ,creativity and knowledge to each other to empower and contribute
                                int the growth and wellness of mankind.

                            </p>
                           
                        </section>
                         <div className="w-1/2">
                            <img
                                id="test1"
                                style={{
                                    filter: "drop-shadow(0px 10px rgb(0,0,0));"
                                }}
                                alt="about main page"
                                className="drop-shadow-2xl"
                                src={aboutMainPage}
                             />

                            </div>
                </div>
                   <div className="carousel w-1/2 my-16 m-auto">
                                
                                        <div id="slide1" className="carousel-item relative w-full">
                                                <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                                <img
                                                alt="Tailwind CSS slide example"
                                                src={nelsonmandela}
                                                className="w-40 m-auto rounded-full border-2 border-gray-400" />
                                               
                                                <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                                                 <p className="text-xl text-gray-200 ">
                                                   {"Education is the most powerful tool you can use to change the world"}

                                                </p>
                                                <div className="absolute   left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a href="#slide5" className="btn btn-circle">❮</a>
                                                <a href="#slide2" className="btn btn-circle">❯</a>
                                                </div>
                                        </div>
                                            
                                        
                                        </div>
                                        <div id="slide2" className="carousel-item relative w-full">
                                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                                <img
                                                alt="Tailwind CSS slide example"
                                                src={kalam}
                                                className="w-40 m-auto rounded-full border-2 border-gray-400" />
                                                <h3 className="text-2xl font-semibold">A.P.J Abdul Kalam</h3>
                                                 <p className="text-xl text-gray-200 ">
                                                   {"Dream is not that which you see while sleeping it is something that does not let you sleep"}

                                                </p>
                                                <div className="absolute   left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a href="#slide1" className="btn btn-circle">❮</a>
                                                <a href="#slide3" className="btn btn-circle">❯</a>
                                                </div>
                                        </div>
                                        </div>
                                        <div id="slide3" className="carousel-item relative w-full">
                                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                                <img
                                                alt="Tailwind CSS slide example"
                                                src={einstein}
                                                className="w-40 m-auto rounded-full border-2 border-gray-400" />
                                                <h3 className="text-2xl font-semibold">Albert Einstein</h3>
                                                 <p className="text-xl text-gray-200 ">
                                                   {"imagination is more important than knowledge” and urged that we “not to stop questioning"}

                                                </p>
                                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a href="#slide2" className="btn btn-circle">❮</a>
                                                <a href="#slide4" className="btn btn-circle">❯</a>
                                                </div>
                                        </div>
                                        </div>
                                        <div id="slide4" className="carousel-item relative w-full">
                                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                                <img
                                                alt="Tailwind CSS slide example"
                                                src={stevejob}
                                                className="w-40 m-auto rounded-full border-2 border-gray-400" />
                                                <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                                                 <p className="text-xl text-gray-200 ">
                                                   {" Your time is limited, so don't waste it living someone else's life."}

                                                </p>
                                                <div className="absolute   left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a href="#slide3" className="btn btn-circle">❮</a>
                                                <a href="#slide5" className="btn btn-circle">❯</a>
                                                </div>
                                        </div>
                                        </div>
                                       <div id="slide5" className="carousel-item relative w-full">
                                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                                <img
                                                alt="Tailwind CSS slide example"
                                                src={billgates}
                                                className="w-40 m-auto rounded-full border-2 border-gray-400" />
                                                <h3 className="text-2xl font-semibold">Bill Gates</h3>
                                                 <p className="text-xl text-gray-200 ">
                                                   {"Success is a lousy teacher. It seduces smart people into thinking they can't lose"}

                                                </p>
                                                <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a href="#slide4" className="btn btn-circle">❮</a>
                                                <a href="#slide1" className="btn btn-circle">❯</a>
                                                </div>
                                        </div>
                                       </div>
                                
                           
                    </div>
                </div>
            </HomeLayout>
        )

}
export default AboutUs;