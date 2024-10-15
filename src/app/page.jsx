"use client";
import React from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("about");
  const [expandedCompany, setExpandedCompany] = React.useState(null);
  const [experiences, setExperiences] = React.useState([
    {
      company: "Apple",
      logo: "https://ucarecdn.com/1b5db36b-5435-480c-9dd1-c168402a772b/-/format/auto/",
      year: "2022-23",
      excerpt:
        "Led subscriptions across business lines, built One Apple story with iPhones",
      description:
        "Led Apple's subscription services, including iCloud, TV+, Arcade, Apple One, Fitness+, News, and Music. Spearheaded expansion into emerging markets, overcoming unique payment challenges. Launched Android ecosystem initiatives to broaden market reach.",
    },
    {
      company: "Walt Disney",
      logo: "https://ucarecdn.com/e05f4c6a-7dff-4d2a-98c0-173676783fa6/-/format/auto/",
      year: "2019-22",
      excerpt: "Drove growth as CMO and moved up to head the business P&L",
      description:
        "Initially joined as CMO, later promoted to head of business P&L. Expanded team from 25 to 50 members across brand, digital, analytics, and partnerships. Achieved 3X business growth through strategic initiatives and innovative marketing approaches.",
    },
    {
      company: "Amazon",
      logo: "https://ucarecdn.com/0b78e55a-f238-49e7-a2c6-b89741e31ebd/-/format/auto/",
      year: "2015-19",
      excerpt: "Held roles across marketing and product management",
      description:
        "Led marketing for a $5B category and launched STEM Club, Amazon's first physical subscription offering. In Private Brands, optimized performance marketing across Amazon, Google, and Meta platforms, achieving industry-leading ROAS. Developed marketing analytics solutions and created an advertising product for Amazon-owned brands, including Private Brands, Kindle, Alexa, and Audible.",
    },
    {
      company: "Lytro",
      logo: "https://ucarecdn.com/8055fdf2-42b7-40d2-91a2-fc9e84cc3fb6/-/format/auto/",
      year: "2014-15",
      excerpt: "First hire in Product Marketing",
      description:
        "Spent a year in Silicon Valley's startup ecosystem, focusing on cutting-edge VR technology. Played a key role in creating the MVP for Lytro's virtual reality offering, which was instrumental in pivoting the company's direction and contributed to its eventual acquisition by Google.",
    },
    {
      company: "Microsoft",
      logo: "https://ucarecdn.com/c74cb8da-9078-4755-b280-f3d44cf15aae/-/format/auto/",
      year: "2011-14",
      excerpt:
        "Led product marketing and program management for smartphones and tablets",
      description:
        "Spearheaded the launch of Microsoft's first smartphones on the new Windows platform under tight deadlines. Managed marketing, program management, and product management across various initiatives. Led the tablet launch team and played a pivotal role in the $7.2B Nokia acquisition, coordinating with 20+ teams globally to align brand identity and go-to-market strategies.",
    },
    {
      company: "Nokia",
      logo: "https://ucarecdn.com/b03d9563-f973-4702-bac4-65d507505245/-/format/auto/",
      year: "2005-11",
      excerpt: "Key roles across marketing, sales, and category leadership",
      description:
        "Started career leading sales teams, then transitioned through roles in brand marketing, product marketing, portfolio management, and program management. Instrumental in scaling business 10X in one of Nokia's largest markets. Led global product launches with average project values exceeding $500M, managed investment portfolios of over $25M, and oversaw a diverse product lineup of 100+ items.",
    },
  ]);

  const projects = [
    {
      title: "Project Alpha",
      thumbnail: "/project-alpha-thumb.jpg",
      excerpt: "Developed an AI-powered recommendation system.",
    },
    {
      title: "Project Beta",
      thumbnail: "/project-beta-thumb.jpg",
      excerpt: "Created a decentralized exchange platform.",
    },
    {
      title: "Project Gamma",
      thumbnail: "/project-gamma-thumb.jpg",
      excerpt: "Built a smart home automation system.",
    },
    {
      title: "Project Delta",
      thumbnail: "/project-delta-thumb.jpg",
      excerpt: "Designed a VR-based educational platform.",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      tags: ["AI", "Healthcare", "Technology"],
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the healthcare industry...",
    },
    {
      id: 2,
      title: "Blockchain: Beyond Cryptocurrency",
      tags: ["Blockchain", "Technology", "Finance"],
      excerpt:
        "Delving into the various applications of blockchain technology beyond digital currencies...",
    },
    {
      id: 3,
      title: "The Rise of Edge Computing",
      tags: ["Edge Computing", "IoT", "Technology"],
      excerpt:
        "Examining the growing importance of edge computing in the Internet of Things ecosystem...",
    },
  ];

  const renderTimeline = () => {
    return (
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start">
            <div className="w-24 h-24 flex-none mr-4 flex flex-col justify-start">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-full h-full object-contain mb-2"
              />
              <p className="text-sm text-gray-500 text-center">{exp.year}</p>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg">{exp.company}</h3>
              <p className="text-gray-700">{exp.excerpt}</p>
              <button
                onClick={() =>
                  setExpandedCompany(expandedCompany === index ? null : index)
                }
                className="text-blue-500 hover:underline mt-2"
              >
                {expandedCompany === index ? "Show less" : "Learn more"}
              </button>
              {expandedCompany === index && (
                <div className="mt-4">
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-4">
              As a seasoned technology executive, I've had the privilege of
              working with some of the world's leading tech companies, including
              Apple, Disney, Amazon, Microsoft, and Nokia. I have worked across
              US, Europe, and Asia which helped me develop a global perspective.
              I have consciously chosen roles that have taken me out of my
              comfort zones and taught me new skills. I love technology and it's
              ability to impact and improve lives of people around the world. I
              enjoy leading teams and I have been fortunate to have worked with
              talented people and in some cases, I have had a little role to
              play in their professional journey.
            </p>
            <p className="text-gray-700 mb-4">
              Beyond my professional endeavors, I'm an avid dog lover and find
              great joy in the companionship of my furry friends. In my free
              time, I enjoy experimenting with new recipes in the kitchen,
              constantly challenging myself to create unique culinary
              experiences. As a consummate bibliophile, I'm always eager to
              expand my knowledge through reading, with a particular fondness
              for science fiction and business strategy books. And I like being
              in the trenches, getting my hands dirty.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise spans a wide range of areas, including marketing,
              product management, strategy, business development, and emerging
              technologies. I've successfully led teams in launching technology
              products across software and hardware, scaling businesses, and
              driving growth and innovation across multiple industries. With a
              strong functional and leadership background in subscriptions,
              e-commerce, and mobile technologies, I'm always excited to tackle
              new challenges and contribute to the ever-evolving tech landscape.
            </p>
          </div>
        );
      case "blog":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Blog</h2>
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="border-b pb-4 mb-4">
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-500 cursor-pointer">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {post.excerpt}
                    <a
                      href={`/blog/${post.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "experience":
        return renderTimeline();
      case "projects":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row"
                >
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="w-full sm:w-[40%] h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.excerpt}</p>
                    <a
                      href={`/projects/${index}`}
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-300"
            >
              <div className="border p-3 rounded">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="border p-3 rounded">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="border p-3 rounded">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] font-sans">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <img
            src="https://ucarecdn.com/a79dc86f-9792-41f7-8cfa-ef88f507e689/-/format/auto/"
            alt="Profile Picture"
            className="w-64 h-64 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold mb-2">Soumyo Sinha</h1>
          <p className="text-xl text-gray-600">
            Accomplished executive with experience across top technology
            organizations. Dog lover, occasional chef, and consummate
            bibliophile.
          </p>
        </header>

        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
          <button
            onClick={() => setActiveSection("about")}
            className={`px-2 py-1 text-sm transition duration-300 whitespace-nowrap ${
              activeSection === "about"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveSection("blog")}
            className={`px-2 py-1 text-sm transition duration-300 whitespace-nowrap ${
              activeSection === "blog"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => setActiveSection("experience")}
            className="px-2 py-1 text-sm transition duration-300 whitespace-nowrap bg-white text-gray-700 hover:bg-gray-100"
          >
            Experience
          </button>
          <button
            onClick={() => setActiveSection("projects")}
            className={`px-2 py-1 text-sm transition duration-300 whitespace-nowrap ${
              activeSection === "projects"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={`px-2 py-1 text-sm transition duration-300 whitespace-nowrap ${
              activeSection === "contact"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Contact Me
          </button>
        </nav>

        <div className="bg-white p-8 rounded-lg shadow-md">
          {renderContent()}
        </div>
        <footer className="mt-8 text-center">
          <a
            href="https://www.linkedin.com/in/soumyosinha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl text-blue-500 hover:text-blue-600"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default MainComponent;