export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              I'm an aspiring software engineer with a keen interest in finance,
              blending coding and financial skills.
            </h3>

            <p className="text-muted-foreground">
              As a current Computer Science student with over 2.5 years of web
              development experience, I specialize in creating responsive,
              accessible, and high-performing web applications using modern
              technologies, while also exploring the dynamic world of finance to
              enhance my problem-solving toolkit.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 tracking-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
