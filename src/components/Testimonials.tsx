import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const testimonials = [
  {
    name: 'John Smith',
    position: 'CEO, TechCorp',
    message: 'ATL Construction delivered our office complex on time and exceeded our expectations. Their attention to detail is unmatched.',
    image: 'https://api.a0.dev/assets/image?text=Professional businessman portrait&aspect=1:1&seed=test-1'
  },
  {
    name: 'Sarah Johnson',
    position: 'Homeowner',
    message: 'Building our dream home with ATL was a fantastic experience. They made the process smooth and stress-free.',
    image: 'https://api.a0.dev/assets/image?text=Professional woman portrait&aspect=1:1&seed=test-2'
  },
  {
    name: 'Mike Davis',
    position: 'Property Developer',
    message: 'Their expertise in commercial projects is evident. Highly recommend for any construction needs.',
    image: 'https://api.a0.dev/assets/image?text=Construction professional portrait&aspect=1:1&seed=test-3'
  }
]

const Testimonials = () => {
  return (
    <section className="animate-on-scroll py-20 px-4 md:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <blockquote className="text-lg italic mb-6">"{testimonial.message}"</blockquote>
                <cite className="font-semibold">{testimonial.name}</cite>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials