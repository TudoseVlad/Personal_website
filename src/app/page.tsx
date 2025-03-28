import Link from "next/link";
const featuredProjects = [
  {
    id: 1,
    title: "Object Detection for Robotic Arms",
    description: "Program that detects objects captured by a camera mounted above a crate, determines the objects' visibility, and prioritizes extraction based on surface area.",
    link: "https://github.com/TudoseVlad/Object_detection",
  },
  {
    id: 2,
    title: "Java Spring API project",
    description: "Designed for handling order management with a dual-database architecture using PostgreSQL and Redis and JWT tokens.",
    link: "https://github.com/TudoseVlad/SpringProject ",
  },
];
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I&apos;m Vlad Tudose
              </h1>
              <p className="text-xl mb-8">
                <span className="pl-o">Backend-focused software developer in designing microservices, optimizing performance, and contributing to
                all stages of the software lifecycle.</span>
              </p>
              <div className="space-x-4">
                <Link
                  href="/projects"
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 bg-white rounded-lg shadow-xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-blue-500 rounded-lg shadow-xl transform -rotate-3"></div>
              {/* Add your profile image here */}
            </div>
          </div>
        </div>
      </section>
    
      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-700">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
