import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    description: 'Custom residential project designed by QBS Architects Inc., featuring modern design and premium finishes.',
    // Actual extracted image URL
    image: 'https://static.wixstatic.com/media/90a441_86d039bee6ec44928a744f0ca9c00aa6~mv2.jpg/v1/fill/w_327,h_245,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_86d039bee6ec44928a744f0ca9c00aa6~mv2.jpg',
    category: 'Residential',
    completionDate: '2023'
  },
  {
    id: 2,
    description: 'Commercial construction project in collaboration with QBS Architects Inc., delivering high-quality office spaces.',
    // Actual extracted image URL
    image: 'https://static.wixstatic.com/media/90a441_5f65f95edf334849a43b853a2652f251~mv2.jpg/v1/fill/w_327,h_245,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_5f65f95edf334849a43b853a2652f251~mv2.jpg',
    category: 'Commercial',
    completionDate: '2024'
  },
  {
    id: 3,
    description: 'Renovation project led by QBS Architects Inc., transforming existing structures into modern spaces.',
    // Actual extracted image URL
    image: 'https://static.wixstatic.com/media/90a441_af7973d404794e9c91585ec3746ca196~mv2.jpg/v1/fill/w_327,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_af7973d404794e9c91585ec3746ca196~mv2.jpg',
    category: 'Renovations',
    completionDate: '2023'
  },
  {
    id: 4,
    description: 'Residential project currently in progress, designed by QBS Architects Inc.',
    // Actual extracted image URL
    image: 'https://static.wixstatic.com/media/90a441_bc1c7e93226a4f3f88b15a7b7f801c60~mv2.jpg/v1/fill/w_327,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_bc1c7e93226a4f3f88b15a7b7f801c60~mv2.jpg',
    category: 'In Progress',
    completionDate: 'In Progress'
  },
  {
    id: 5,
    description: 'Residential project currently in progress, designed by QBS Architects Inc.',
    // Actual extracted image URL
    image: 'https://static.wixstatic.com/media/90a441_62a36df133934d0496429458e9f73af9~mv2.jpg/v1/fill/w_327,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_62a36df133934d0496429458e9f73af9~mv2.jpg',
    category: 'In Progress',
    completionDate: 'In Progress'
  },
  {
    id: 6,
    description: 'In progress residential project designed by QBS Architects Inc.',
    // Actual extracted image URL
    image: 'https://static.wixstatic.com/media/90a441_f6174e879c344536a68641fd3430ab06~mv2.jpg/v1/fill/w_327,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_f6174e879c344536a68641fd3430ab06~mv2.jpg',
    category: 'In Progress',
    completionDate: 'In Progress'
  }
]

const FeaturedProjects = () => {
  return (
    <section className="animate-on-scroll py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img src={project.image} alt="Featured project" className="w-full h-auto" />
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects