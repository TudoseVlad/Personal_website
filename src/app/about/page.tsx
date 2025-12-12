import Link from "next/link";

export default function About() {
  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "SQL",
    "AWS",
    "Docker",
    "Git",
    "Java",
    "Golang",
    "C/C++",
    "Python",
    "HTML",
    "Javascript",
    "C#",
    "MySQL",
    "Backend software development",
    "API integration",
    "Agile development",
  ];

  const experiences = [
    {
      title: "Go Developer",
      company: "Geoned Ineractive S.R.L.",
      period: "Jun 2025 - Present",
      description: "Designed and maintained scalable microservices in Go and Java, leveraging Kafka for event-driven architectures and gRPC for high-performance service communication. Experienced in deploying and orchestrating services on Kubernetes to ensure reliability and scalability. Focused on backend development, system optimization, and delivering resilient distributed systems in fast-paced environments.",
    },
    {
      title: "Software Engineer",
      company: "Equinox AI B.V.",
      period: "JAN 2025 - Jun 2025",
      description: "Developed market-making and price arbitrage algorithms using C++. Proficient in working with REST APIs and integrating various technologies to optimize system performance. Skilled in deploying applications with Docker and ensuring code reliability through unit testing using Google Test. Adept at collaborating with cross-functional teams to deliver high-quality software solutions in fast-paced environments.",
    },
    {
      title: "Software Engineer",
      company: "Harman International",
      period: "FEB 2023 - DEC 2024",
      description: "Developed advanced software solutions for automotive leaders, focusing on enhancing camera systems for accident detection and recreational applications. Designed and architected scalable, efficient systems tailored to client needs, leveraging C++ and Python to optimize system functionality, data layering, and display mechanisms for seamless user experiences. Contributed to innovative development projects and maintenance of shipped products, addressing bug fixes and performance improvements. Collaborated closely with clients to meet specific requirements across the project lifecycle, including tasks like decoding and encoding camera frames to ensure robust, high-performance systems.",
    },
    {
      title: "Software Engineer",
      company: "Avast",
      period: "NOV 2020 - NOV 2022",
      description: "Contributed to impactful projects enhancing product functionality and security. Assisted in developing a VPN mobile app frontend using Kotlin, creating a user-friendly interface and expanding features.\n Integrated microservices into a browser using C++ for seamless communication and robust performance. Implemented critical security features for a VPN, leveraging Golang to build concurrent microservices for improved user privacy and data security. \nAlso developed a phishing email detection microservice in Golang, strengthening cybersecurity by identifying and mitigating scam and spam emails.",
    },
    {
      title: " Junior Software Engineer",
      company: "Amiq Consulting S.R.L.",
      period: "JUL 2019 - SEP 2019",
      description: "Gained in-depth knowledge of the verification process for Devices Under Test (DUT) using SystemVerilog and UVM methodologies. Enhanced software development and GUI design skills by exploring advanced concepts of Python and PyQt5, building a strong and well-rounded technical foundation",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Backend-focused software developer with professional experience in C++,
          Golang, and Python, and personal projects in Java, JavaScript, C#, and Solidity.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Name</h3>
                  <p className="text-gray-600">Vlad Tudose</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Bucharest</h3>
                  <p className="text-gray-600">Bucharest, Romania</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">vlad.tudose@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/vlad-tudose-adrian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    linkedin.com/in/vlad-tudose-75b719195
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-600"><span className="pl-8">{exp.description}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 