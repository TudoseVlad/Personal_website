'use client';

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "web3", name: "Web3 Development" },
    { id: "AI/ML", name: "AI/ML" },
  ];

  const projects = [
    {
      id: 1,
      title: "Object Detection for Robotic Arms",
      category: "AI/ML",
      description: "Developed a machine learning-based object detection system using the YOLO (You Only Look Once) algorithm. The system detects objects captured by a camera mounted above a crate, determines the objects' visibility, and prioritizes extraction based on surface area. Created a user interface using PyQt for testing program accuracy and decision- making.",
      technologies: ["Python", "PyQt", "YOLO"],
      image: "/img/Object_Detection_for_Robotic_Arms.png",
      link: "https://github.com/TudoseVlad/Object_detection",
      
    },
    {
      id: 2,
      title: "Data Scraper for Websites",
      category: "web",
      description: "Designed a data scraping program specifically tailored for the iabilet site. The program extracts data and formats it into a template, which is then stored on Firebase Cloud for use in frontend applications.",
      technologies: ["Python", "Web Scraping", "Selenium", "Firebase Cloud"],
      image: "/img/Data_Scraper_for_Websites.png",
      link: "https://github.com/TudoseVlad/data_fetcher",
    },
    {
      id: 3,
      title: "Youtube Copy",
      category: "web",
      description: "A simple youtube copycat using React.",
      technologies: ["JavaScript", "React"],
      image: "/img/Youtube_Copy.png",
      link: "https://github.com/TudoseVlad/Simple_youtube_copy_project",
    },
    {
      id: 4,
      title: "Small web3 project",
      category: "web3",
      description: "Created and implemented various small- scale projects on the Ethereum blockchain using Solidity for smart contract development and JavaScript with React for frontend components.",
      technologies: ["Solidity", "JavaScript", "React"],
      image: "/img/Small_web3_project.png",
      link: "https://github.com/TudoseVlad/Lottery_blockchain_project",
    },
    {
      id: 5,
      title: "Java Spring API project",
      category: "Web",
      description: "Designed for handling order management with a dual-database architecture. It uses PostgreSQL for storing order data and user credentials (hashed for JWT generation) and Redis for storing JWT tokens. The API provides various endpoints for user authentication (/auth), order creation (/orders), and order queries (e.g., retrieving orders by ID or status). Authentication is required for order-related commands via Bearer tokens. This project demonstrates secure, scalable order processing with separate databases for different types of data.",
      technologies: ["Java", "Spring", "PostgreSQL", "Redis"],  
      image: "/img/Java_Spring_API_project.png",
      link: "https://github.com/TudoseVlad/SpringProject ",
    },
    // Add more projects as needed
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my work and personal projects showcasing my skills and experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
} 