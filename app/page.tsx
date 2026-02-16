import Link from "next/link";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <Header />

      {/* Hero Section */}
      <main className="pt-16">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <div className="text-center">
              <div className="mb-8 inline-block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <span className="text-4xl font-bold text-slate-700 dark:text-slate-300">YN</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Your Name
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                Full Stack Developer | Designer | Creative Thinker
              </p>
              
              <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 max-w-2xl mx-auto">
                I create beautiful, functional, and user-centered digital experiences.
                Passionate about building innovative solutions that make a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </Link>
                <Link 
                  href="#contact"
                  className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  I'm a passionate developer with a keen eye for design and a love for creating 
                  seamless user experiences. With expertise in modern web technologies, I bring 
                  ideas to life through clean, efficient code.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                  <div className="text-slate-600 dark:text-slate-400">Happy Clients</div>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                  <div className="text-slate-600 dark:text-slate-400">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div 
                  key={project}
                  className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-50">
                      {project}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Project {project}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A brief description of this amazing project and the technologies used to build it.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                        React
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                        TypeScript
                      </span>
                    </div>
                    <Link 
                      href="#"
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "React / Next.js", level: 90, color: "blue" },
                { name: "TypeScript", level: 85, color: "purple" },
                { name: "Node.js", level: 80, color: "green" },
                { name: "UI/UX Design", level: 75, color: "orange" },
                { name: "Tailwind CSS", level: 90, color: "cyan" },
                { name: "Git / GitHub", level: 85, color: "red" },
                { name: "Database", level: 75, color: "yellow" },
                { name: "API Development", level: 80, color: "indigo" },
              ].map((skill) => (
                <div key={skill.name} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:your.email@example.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Email
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-600 dark:text-slate-400">
              © 2026 Your Name. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
