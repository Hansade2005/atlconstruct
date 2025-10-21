import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const allProjects = [
  {
    id: 1,
    title: 'Invergordon',
    description: 'Custom residential project designed by QBS Architects Inc.',
    // Updated image URLs based on extracted data
    images: [
      'https://static.wixstatic.com/media/90a441_86d039bee6ec44928a744f0ca9c00aa6~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_199d3d43383b446b9aacdf4291c9455f~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_675a8390feff4cb4b8773e5aee0de8e3~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_2539e570d66a4cc08eaa82e62638da15~mv2.jpg'
    ],
    category: 'Residential',
    completionDate: '2023'
  },
  {
    id: 2,
    title: 'Hopecrest',
    description: 'Commercial construction project in collaboration with QBS Architects Inc.',
    // Updated image URLs based on extracted data
    images: [
      'https://static.wixstatic.com/media/90a441_5f65f95edf334849a43b853a2652f251~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_60fa8b2cc3f84095b56dfe8cb4fe0f4e~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_33311e7092564dc08fde42018c0d6e1c~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_8f865b6e0ee24422be3a8bc77fb2d8b1~mv2.jpg'
    ],
    category: 'Commercial',
    completionDate: '2024'
  },
  {
    id: 3,
    title: 'Thornton A',
    description: 'Renovation project led by QBS Architects Inc.',
    // Updated to include 5 images based on extracted data
    images: [
      'https://static.wixstatic.com/media/90a441_af7973d404794e9c91585ec3746ca196~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_b7cde6a4bb9f4a5bacf82f0399cfb5b7~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_b8c1007a908048abae7ad5c4a460f916~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_bc1c7e93226a4f3f88b15a7b7f801c60~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_9f28808c5cdd47828fce43109b9eba5e~mv2.jpg'
    ],
    category: 'Renovations',
    completionDate: '2023'
  },
  {
    id: 4,
    title: 'Thornton B (In Progress)',
    description: 'Residential project currently in progress, designed by QBS Architects Inc.',
    // Updated image URLs based on extracted data
    images: [
      'https://static.wixstatic.com/media/90a441_bc1c7e93226a4f3f88b15a7b7f801c60~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_9f28808c5cdd47828fce43109b9eba5e~mv2.jpg'
    ],
    category: 'In Progress',
    completionDate: 'In Progress'
  },
  {
    id: 5,
    title: 'Thornton C (In Progress)',
    description: 'Residential project currently in progress, designed by QBS Architects Inc.',
    // Updated image URLs based on extracted data
    images: [
      'https://static.wixstatic.com/media/90a441_62a36df133934d0496429458e9f73af9~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_81a02aa54d9f4e45b17b5d848e076f44~mv2.jpg'
    ],
    category: 'In Progress',
    completionDate: 'In Progress'
  },
  {
    id: 6,
    title: 'King (In Progress)',
    description: 'In progress residential project designed by QBS Architects Inc.',
    // New project added based on extracted data
    images: [
      'https://static.wixstatic.com/media/90a441_f6174e879c344536a68641fd3430ab06~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_587d5851758b4dd6a1350cf07655e32d~mv2.jpg'
    ],
    category: 'In Progress',
    completionDate: 'In Progress'
  },
  {
    id: 7,
    title: 'Woodrow (In Progress)',
    description: 'In progress residential project designed by QBS Architects Inc.',
    // New project added based on extracted data
    images: [
      'https://static.wixstatic.com/media/90a441_06bddaea561e4e568f86ae7a3f6475cc~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_f11ffc9f5f244914b48fb17635710559~mv2.jpg',
      'https://static.wixstatic.com/media/90a441_ff6e30cfd80448fb9229f57b7782d953~mv2.jpg'
    ],
    category: 'In Progress',
    completionDate: 'In Progress'
  }
];


const categories = ['All', 'Commercial', 'Residential', 'Renovations', 'In Progress']

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory)

  return (
    <div className="bg-secondary text-primary">
      <Nav />
      <section className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Projects</h1>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary hover:bg-accent hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                {project.images.length > 1 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-48"
                  >
                    {project.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={`${project.title} ${index + 1}`} className="w-full h-48 object-cover" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">Completed: {project.completionDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Past Projects Videos */}
          <section className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Past Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/FixjbRzER3E"
                    title="Invergordon Ave Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">104 Invergordon Ave</h3>
                  <p className="text-gray-600 mb-4">Completed in 2020 - Scarborough, ON M1S 2Z2</p>
                  <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Residential</span>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/PkqFYgRsSfo"
                    title="Thornton Rd Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">334 Thornton Rd North</h3>
                  <p className="text-gray-600 mb-4">Completed in 2022 - Oshawa, ON L1J 6T7</p>
                  <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Residential</span>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/eDJt4ULmD3o"
                    title="Carncastle Court Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">1992 Carncastle Court</h3>
                  <p className="text-gray-600 mb-4">Completed in 2025 - Oshawa, ON L1J 6T7</p>
                  <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Residential</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Projects