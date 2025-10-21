import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const testimonials = [
  {
    name: 'Ahmed Hassan',
    position: 'Restaurant Owner, Downtown Toronto',
    message: 'We were skeptical about renovating our family restaurant during peak hours, but ATL Construction managed it flawlessly. They worked after closing time and finished ahead of schedule. The new dining area has boosted our customer turnout by 30%! Their team was respectful and cleaned up every day.',
    image: 'https://api.a0.dev/assets/image?text=Middle Eastern restaurant owner smiling in front of renovated space&aspect=1:1&seed=real-test-1'
  },
  {
    name: 'Maria Rodriguez',
    position: 'Homeowner, Vaughan',
    message: 'ATL built our custom two-story home from the ground up. They handled the winter delays professionally and communicated every step. Our kids love the backyard play area they added. Budget was spot-on, and the quality is top-notch. We\'d hire them again in a heartbeat.',
    image: 'https://api.a0.dev/assets/image?text=Latin American mother with family in new suburban home&aspect=1:1&seed=real-test-2'
  },
  {
    name: 'David Chen',
    position: 'Property Manager, Condo Association',
    message: 'After the storm damaged our building\'s roof, ATL was on site within 24 hours. Their emergency repairs saved us from further water damage. The full roof replacement was done in two weeks with minimal disruption to residents. Outstanding workmanship and fair pricing.',
    image: 'https://api.a0.dev/assets/image?text=Asian property manager inspecting construction site&aspect=1:1&seed=real-test-3'
  },
  {
    name: 'Linda Thompson',
    position: 'Retired Teacher, Scarborough',
    message: 'I needed a wheelchair-accessible bathroom added to my bungalow. ATL\'s crew was patient, explained everything, and even suggested energy-efficient upgrades. The project came in under budget and on time. Now I can age in place comfortably. Highly recommend their residential work!',
    image: 'https://api.a0.dev/assets/image?text=Elderly white woman in accessible home renovation&aspect=1:1&seed=real-test-4'
  },
  {
    name: 'Raj Patel',
    position: 'Small Business Owner, Markham',
    message: 'ATL converted our old warehouse into a modern retail space. They navigated all the permits and dealt with unexpected foundation issues professionally. The result is a beautiful showroom that\'s increased our sales. Their project manager was always reachable and kept us informed.',
    image: 'https://api.a0.dev/assets/image?text=South Asian entrepreneur in commercial retail space&aspect=1:1&seed=real-test-5'
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