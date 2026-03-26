import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Scene3D from './components/ThreeScene/Scene3D'
import CourseCard3D from './components/CourseCard3D'

const App = () => {
  const courses = [
    {
      title: 'Web Development',
      description: 'Master modern web technologies and frameworks',
      icon: '🌐',
      delay: 0,
    },
    {
      title: '3D Graphics',
      description: 'Learn Three.js and create stunning 3D experiences',
      icon: '🎮',
      delay: 1,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Dive into neural networks and deep learning',
      icon: '🤖',
      delay: 2,
    },
    {
      title: 'Cloud Computing',
      description: 'Deploy and scale applications on the cloud',
      icon: '☁️',
      delay: 3,
    },
  ]

  return (
    <div className="min-h-screen bg-lightning-black overflow-hidden">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Scene3D />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lightning-purple via-lightning-blue to-lightning-cyan animate-pulse">
              Learn in 3D
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Experience the future of education with immersive 3D learning environments and
              cutting-edge technology
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-lightning-purple to-lightning-blue text-white font-bold text-lg hover:shadow-2xl hover:shadow-lightning-purple/50 transition-all duration-300 transform hover:scale-110">
              Start Your Journey
            </button>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lightning-purple to-lightning-cyan">
              Featured Courses
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              Choose from our curated selection of world-class courses
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <CourseCard3D
                  key={index}
                  title={course.title}
                  description={course.description}
                  icon={course.icon}
                  delay={course.delay}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 border-t border-lightning-purple/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Why Choose E-Learn?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Interactive Learning',
                  description: 'Engage with 3D models and interactive content for better understanding',
                  icon: '✨',
                },
                {
                  title: 'Expert Instructors',
                  description: 'Learn from industry professionals with years of experience',
                  icon: '👑',
                },
                {
                  title: 'Flexible Schedules',
                  description: 'Study at your own pace with lifetime access to course materials',
                  icon: '⏰',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-lightning-purple/30 bg-lightning-dark/50 backdrop-blur-sm hover:border-lightning-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-lightning-purple/20"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-2xl border border-lightning-purple/30 bg-gradient-to-br from-lightning-dark to-lightning-black">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of students already learning with E-Learn
              </p>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-lightning-purple to-lightning-cyan text-white font-bold text-lg hover:shadow-2xl hover:shadow-lightning-purple/50 transition-all duration-300 transform hover:scale-110">
                Enroll Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-lightning-purple/20 bg-lightning-black/80 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2026 E-Learn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
