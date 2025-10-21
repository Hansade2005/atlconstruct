const steps = [
  {
    number: '01',
    title: 'Feasibility',
    description: 'Our feasibility process is designed to objectively and rationally uncover the strengths and weaknesses of the proposed venture, and opportunities.',
  },
  {
    number: '02',
    title: 'Design Development',
    description: 'Consult and hire the right architect and designer for the project. Build the best team of consultants for the scope of work required on the project.'
  },
  {
    number: '03',
    title: 'Construction Management',
    description: 'We manage the entire construction process, ensuring precision, quality materials, and skilled craftsmanship to bring your vision to life.'
  },
  {
    number: '04',
    title: 'Ongoing Maintenance',
    description: 'We provide continuous support and maintenance to protect your investment and ensure long-term satisfaction and value.'
  }
]

const OurProcess = () => {
  return (
    <section className="animate-on-scroll py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Process</h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
          Our process is project specific and will be customized to suit each Client's requirements and the project's stage and needs. We have the skills and experience necessary to lead your project from the feasibility stages, through to selecting a designer or architect, managing the construction, all the way through to the on-going maintenance of your project to ensure that your investment is protected.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProcess