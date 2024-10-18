import "./Skills.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Skills = () => {
  return (
    <div className="pt-10 pb-24 text-slate-50 font-Inter">
      <div className="text-3xl font-bold flex items-center justify-center ">
        <h1 className="">My Skills</h1>
      </div>

      <Swiper
        slidesPerView={2} // Default for smaller screens
        spaceBetween={10} // Default for smaller screens
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 50 },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center mt-20 ">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-[#F4DB28] to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",
                  animationDelay: "3s",
                }}
              >
                <div className="absolute text-center inset-0   px-4 py-8">
                  <div className="flex items-center justify-center">
                    <img width={100} height={100} src="js.png" alt="" />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">
                    Javascrip
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="flex mb-10 justify-center items-center mt-16 ">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-[#2162AF] to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",
                }}
              >
                <div className="absolute text-center inset-0   px-4 py-8">
                  <div className="flex items-center justify-center">
                    <img width={100} height={100} src="ts.png" alt="" />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">Typescript</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex mb-10 justify-center items-center mt-16 ">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-[#0e151f] to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",  animationDelay: "3s", 
                }}
              >
                <div className="absolute text-center inset-0   px-4 py-8">
                  <div className="flex items-center justify-center">
                    <img width={100} height={100} src="NEXTJS.jpg" alt="" />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">NextJS</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex mb-10 justify-center items-center mt-16 ">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-[#2162AF] to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",
                }}
              >
                <div className="absolute text-center inset-0   px-4 py-8">
                  <div className="flex items-center justify-center">
                    <img width={100} height={100} src="css.png" alt="" />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">CSS</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        

        <SwiperSlide>
          <div className="flex justify-center items-center mt-20">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-[#E44D21] to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",
                  animationDelay: "1s", // Adjust animation delay as needed
                }}
              >
                <div className="absolute inset-0 text-center px-4 py-6">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-24 h-24"
                      src="html.png"
                      alt="React Logo"
                    />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">HTML</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center mt-20 ">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-blue-700 to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",
                  animationDelay: "2s",
                }}
              >
                <div className="absolute text-center inset-0   px-4 py-8">
                  <div className="flex items-center justify-center">
                    <img width={100} height={100} src="react (2).png" alt="" />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">React</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center mt-20 ">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-green-500 to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",
                  animationDelay: "4s",
                }}
              >
                <div className="absolute text-center inset-0   px-4 py-8">
                  <div className="flex items-center justify-center">
                    <img width={100} height={100} src="react.png" alt="" />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">Node js</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center mt-20">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-[#DD2C00] to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",
                  animationDelay: "3s", // Adjust animation delay as needed
                }}
              >
                <div className="absolute inset-0  text-center px-4 py-6">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-24 h-24"
                      src="firebase.png"
                      alt="React Logo"
                    />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">
                    Firebase
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center mt-20">
            <div className="flex justify-center items-center mt-20">
              <div
                className="bg-gradient-to-t from-green-500 to-[#081927] relative w-48 h-48 rounded-2xl shadow-md m-4 overflow-hidden animate-updown"
                style={{
                  clipPath:
                    "polygon(49% 0, 100% 35%, 100% 60%, 100% 99%, 0 98%, 0% 60%, 0 0)",
                  animationDelay: "0s",
                }}
              >
                <div className="absolute inset-0 text-center  px-4 py-6">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-24 h-24"
                      src="mongodb.png"
                      alt="React Logo"
                    />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white">MongoDB</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Skills;
