import React from 'react'

function App() {
  // Configuration - customize these values
  const config = {
    name: "Emmanuel",
    handle: "@Emmanuel1611",
    role: "Software Engineer & Product Builder",
    subtitle: "Building scalable systems and delightful developer experiences",
    skills: [
      "React", "Node.js", "Python", "TypeScript", 
      "AWS", "Docker", "PostgreSQL", "GraphQL"
    ],
    stats: {
      repositories: "50+",
      contributions: "1,200+",
      followers: "150+",
      experience: "5+ Years"
    }
  }

  const currentYear = new Date().getFullYear()
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-github via-gray-900 to-card p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-1">
          <div className="relative bg-gradient-to-br from-github to-card rounded-xl p-8">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {config.name.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      {config.name}
                    </h1>
                    <p className="text-primary/80 text-lg font-mono">{config.handle}</p>
                  </div>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-semibold gradient-text mb-3">
                  {config.role}
                </h2>
                
                <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                  {config.subtitle}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0">
                {Object.entries(config.stats).map(([key, value]) => (
                  <div key={key} className="glass-effect rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="relative z-10 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {config.skills.map((skill, index) => (
                  <span key={skill} className="tech-badge" style={{animationDelay: `${index * 0.1}s`}}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-700/50">
              <div className="flex items-center gap-6 mb-4 sm:mb-0">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for opportunities</span>
                </div>
                <div className="text-gray-500 text-sm">
                  Last updated: {currentDate}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">© {currentYear} {config.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">Built with</span>
                  <span className="text-primary font-medium text-sm">React</span>
                  <span className="text-gray-500">+</span>
                  <span className="text-accent font-medium text-sm">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-primary/5 to-transparent">
            <h4 className="text-white font-semibold mb-3">🚀 Current Focus</h4>
            <p className="text-gray-300 text-sm">
              Building scalable microservices and exploring AI/ML integrations
            </p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-accent/5 to-transparent">
            <h4 className="text-white font-semibold mb-3">💡 Latest Project</h4>
            <p className="text-gray-300 text-sm">
              Dynamic GitHub profile banner generator with automated deployment
            </p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-emerald-500/5 to-transparent">
            <h4 className="text-white font-semibold mb-3">🎯 Goals 2025</h4>
            <p className="text-gray-300 text-sm">
              Contributing to open source and mentoring junior developers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App