"use client";
import React from "react";

function ProfilePageLayout({
  profileSrc,
  name,
  description,
  sections,
  activeSection,
  onSectionChange,
  renderContent,
  linkedInUrl,
}) {
  return (
    <div className="min-h-screen bg-[#f0f0f0] font-sans">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <img
            src={profileSrc}
            alt="Profile Picture"
            className="w-64 h-64 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </header>

        <nav className="grid grid-cols-6 gap-2 mb-8">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => onSectionChange(section.id)}
              className={`px-2 py-1 text-sm transition duration-300 whitespace-nowrap ${
                activeSection === section.id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="bg-white p-8 rounded-lg shadow-md">
          {renderContent()}
        </div>

        <footer className="mt-8 text-center">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl text-blue-500 hover:text-blue-600"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}

function ProfilePageLayoutStory() {
  const [activeSection, setActiveSection] = React.useState("about");

  const sections = [
    { id: "about", label: "About Me" },
    { id: "blog", label: "Blog" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <div>About content goes here</div>;
      case "blog":
        return <div>Blog content goes here</div>;
      case "experience":
        return <div>Experience content goes here</div>;
      case "projects":
        return <div>Projects content goes here</div>;
      case "contact":
        return <div>Contact content goes here</div>;
      default:
        return <div>Default content</div>;
    }
  };

  return (
    <div>
      <ProfilePageLayout
        profileSrc="https://ucarecdn.com/a79dc86f-9792-41f7-8cfa-ef88f507e689/-/format/auto/"
        name="Soumyo Sinha"
        description="Accomplished executive with experience across top technology organizations. Dog lover, occasional chef, and consummate bibliophile."
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        renderContent={renderContent}
        linkedInUrl="https://www.linkedin.com/in/soumyosinha"
      />
    </div>
  );
}

export default ProfilePageLayout;