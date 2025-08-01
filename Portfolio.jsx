import React from "react";

const projects = [
  {
    title: "Stats Preview Card",
    repo: "https://github.com/RyanDillon94/Stats-preview-card-component",
    demo: "https://ryandillon94.github.io/Stats-preview-card-component/",
    description: "A responsive stats preview card using HTML and CSS, styled to match Frontend Mentor's challenge."
  },
  {
    title: "BGL Blues Sunderland",
    repo: "https://github.com/RyanDillon94/BGL_Blues_Sunderland",
    description: "Internal landing page mockup for a Sunderland-based project. Includes images and layout test."
  },
  {
    title: "FAQ Accordion",
    repo: "https://github.com/RyanDillon94/FAQ_Accordian",
    demo: "https://ryandillon94.github.io/FAQ_Accordian/",
    description: "A collapsible FAQ accordion built using vanilla HTML, CSS, and JavaScript."
  },
  {
    title: "Results Summary Component",
    repo: "https://github.com/RyanDillon94/results-summary-component-main",
    demo: "https://ryandillon94.github.io/results-summary-component-main/",
    description: "Frontend Mentor challenge: A clean summary card to display assessment results and category breakdowns."
  },
  {
    title: "Recipe Page",
    repo: "https://github.com/RyanDillon94/recipe-page-main",
    demo: "https://ryandillon94.github.io/recipe-page-main/",
    description: "Simple and elegant recipe page layout using semantic HTML and clean design."
  },
  {
    title: "Blog Preview Card",
    repo: "https://github.com/RyanDillon94/blog-preview-card-main",
    demo: "https://ryandillon94.github.io/blog-preview-card-main/",
    description: "A small responsive blog preview card with hover effects and mobile-first design."
  },
  {
    title: "QR Code Component",
    repo: "https://github.com/RyanDillon94/QR_Code",
    demo: "https://ryandillon94.github.io/QR_Code/",
    description: "Minimalist QR code component. Frontend Mentor challenge focused on layout and spacing."
  },
  {
    title: "Social Links Profile",
    repo: "https://github.com/RyanDillon94/Social_Links_Profile",
    demo: "https://ryandillon94.github.io/Social_Links_Profile/",
    description: "Responsive social profile card with personal links, perfect for lightweight profile landing pages."
  },
  {
    title: "Gym Page Test",
    repo: "https://github.com/RyanDillon94/GymPageTest",
    description: "Mockup of a gym website landing page, testing layout and theme colors."
  }
];

export default function Portfolio() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>Ryan Dillon – GitHub Portfolio</h1>
      {projects.map((project, index) => (
        <div key={index} style={{ padding: 16, marginBottom: 16, border: '1px solid #ccc', borderRadius: 8 }}>
          <h2 style={{ fontSize: 20 }}>{project.title}</h2>
          <p>{project.description}</p>
          <div style={{ marginTop: 8 }}>
            {project.demo && (
              <a href={project.demo} target="_blank" style={{ marginRight: 10 }}>
                Live Demo
              </a>
            )}
            <a href={project.repo} target="_blank">GitHub Repo</a>
          </div>
        </div>
      ))}
    </div>
  );
}
