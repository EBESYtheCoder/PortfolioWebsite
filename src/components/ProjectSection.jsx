import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cypto Price Tracking",
    description:
      "A React app that tracks real-time crypto prices using the CoinGecko API. Clean UI, fast updates, and mobile-friendly.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "CoinGecko"],
    demoUrl: "https://greatstack.in/cryptoplace/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Powered Blog Site",
    description:
      "A full-stack blog platform powered by AI. Users can write, edit, and get AI-assisted content suggestions in real time.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "Node"],
    demoUrl: "https://quickblog-gs.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "E-Commerce Amazon Clone",
    description:
      "A full-stack Amazon clone with product listings, cart, checkout and built with vanilla js.",
    image: "/projects/project3.png",
    tags: ["Vanilla JS", "Node", "Stripe"],
    demoUrl: "https://nzombe01.netlify.app",
    githubUrl: "https://github.com/EBESYtheCoder/javascript-amazon-project",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full text-secondary-foreground bg-primary/20 border ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sb mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/EBESYtheCoder"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
