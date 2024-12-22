import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialImage1 from "../images/image-1.webp";
import testimonialImage2 from "../images/image-2.webp";
import testimonialImage3 from "../images/image-3.webp";
import testimonialImage4 from "../images/image-4.webp";
import testimonialImage5 from "../images/image-5.webp";
import testimonialImage6 from "../images/image-6.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section
      className="testimonial-section"
      id="testimonials"
      style={{ background: "linear-gradient(120deg, #f8f9fa, #e9ecef)" }}
    >
      <div className="container py-5">
        <h2
          className="text-center section-title mb-5"
          data-aos="fade-up"
          style={{ color: "#333", fontWeight: "bold" }}
        >
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 1 }, // For mobile
            768: { slidesPerView: 2 }, // For tablets
            1024: { slidesPerView: 3 }, // For desktops
          }}
        >
          {[testimonialImage1, testimonialImage2, testimonialImage3, testimonialImage4, testimonialImage5, testimonialImage6].map(
            (image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="testimonial-card text-center p-4 shadow-sm rounded"
                  data-aos="fade-up"
                >
                  <img
                    src={image}
                    alt={`Client ${index + 1}`}
                    className="rounded-circle mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      border: "4px solid #ff7f50",
                    }}
                  />
                  <h5 className="mb-2" style={{ color: "#222" }}>
                    {`Client ${index + 1}`}
                  </h5>
                  <p className="testimonial-text text-muted">
                    "Their professionalism and creativity exceeded my
                    expectations."
                  </p>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
