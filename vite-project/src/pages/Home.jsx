import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button, Card, CardContent, Typography, Box, Grid, Chip, Container } from '@mui/material'

const Home = () => {
  const features = [
    {
      icon: <div className="text-4xl">⏱️</div>,
      title: "Pomodoro Timer System",
      description: "Customizable study sessions with interactive controls, progress tracking, and persistent settings saved to MongoDB.",
      details: ["Customizable work/break durations", "Visual progress bars", "Session counters", "Smart break management"]
    },
    {
      icon: <div className="text-4xl">🔊</div>,
      title: "Voice Channel Management",
      description: "Dynamic voice channel visibility based on member count with threshold-based control and role management.",
      details: ["Auto show/hide channels", "Configurable thresholds", "Role-based access", "Edge case protection"]
    },
    {
      icon: <div className="text-4xl">💾</div>,
      title: "MongoDB Integration",
      description: "Persistent data storage for user preferences, configurations, and session data across bot restarts.",
      details: ["User settings persistence", "Configuration backup", "Session recovery", "Data integrity"]
    },
    {
      icon: <div className="text-4xl">🔒</div>,
      title: "Security & Permissions",
      description: "Comprehensive permission validation, input sanitization, and secure credential management.",
      details: ["Permission validation", "Input sanitization", "Secure credentials", "Error privacy"]
    },
    {
      icon: <div className="text-4xl">⚡</div>,
      title: "Performance Optimized",
      description: "Built with discord.js v14, optimized for performance with rate limiting and error handling.",
      details: ["Rate limit handling", "Automatic reconnection", "Memory optimization", "Fast response times"]
    },
    {
      icon: <div className="text-4xl">🎧</div>,
      title: "24/7 Support",
      description: "Comprehensive logging, monitoring, and support system for seamless bot operation.",
      details: ["Detailed logging", "Error tracking", "Performance monitoring", "Community support"]
    }
  ];

  const commands = [
    {
      command: "/pomodoro setup",
      description: "Configure your Pomodoro timer settings with custom work, break, and session parameters.",
      example: "/pomodoro setup work:25 break:5 longbreak:15 sessions:4",
      category: "Pomodoro"
    },
    {
      command: "/pomodoro start",
      description: "Start a new Pomodoro session with your configured settings and interactive controls.",
      example: "/pomodoro start",
      category: "Pomodoro"
    },
    {
      command: "/enable-roomactivecheck",
      description: "Configure dynamic voice channel visibility based on member count and roles.",
      example: "/enable-roomactivecheck enabled:true primary-channel:#study-hall",
      category: "Voice Management"
    },
    {
      command: "/pomodoro rest",
      description: "Take a manual break using your configured short break duration.",
      example: "/pomodoro rest",
      category: "Pomodoro"
    },
    {
      command: "/pomodoro skip",
      description: "Skip the current phase and move to the next work or break session.",
      example: "/pomodoro skip",
      category: "Pomodoro"
    },
    {
      command: "/ping",
      description: "Check if the bot is responsive and view current latency statistics.",
      example: "/ping",
      category: "General"
    }
  ];

  const stats = [
    { number: "50k+", label: "Active Users" },
    { number: "10+", label: "Upcoming features" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
       <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative flex flex-col justify-center items-center z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            CrizModo
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 pt-2 pb-2 text-gray-300 max-w-3xl mx-auto">
            Discord Timer & Channel Management Bot
          </h2>
          <p className="text-lg mb-10 pt-2 pb-2 text-gray-400 max-w-4xl mx-auto">
            A comprehensive Discord bot providing Pomodoro timer functionality and dynamic voice channel management with MongoDB integration. 
            Boost your server's productivity and organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg"
              onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=2147609616&scope=bot', '_blank')}
            >
              Add to Discord
            </button> */}
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CrizModo combines productivity tools with advanced Discord server management to create the perfect environment for focused work and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-96 flex flex-col">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2 mt-auto">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Commands Section */}
     <section id="commands" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Bot Commands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive slash commands for Pomodoro timer management, voice channel control, and server administration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {commands.map((cmd, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-64 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-mono text-black text-lg font-semibold">
                    {cmd.command}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cmd.category === 'Pomodoro' ? 'bg-blue-100 text-blue-800' :
                    cmd.category === 'Voice Management' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {cmd.category}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 flex-grow text-sm leading-relaxed">
                  {cmd.description}
                </p>
                <div className="bg-black text-white p-3 rounded-lg mt-auto">
                  <code className="text-sm text-gray-300">
                    {cmd.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section id="documentation" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Documentation & Setup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get CrizModo up and running in your Discord server.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Quick Setup
              </h3>
              <div className="space-y-4 flex-grow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Invite the Bot</h4>
                    <p className="text-gray-600 text-sm">Click "Add to Discord" and select your server</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Configure Permissions</h4>
                    <p className="text-gray-600 text-sm">Ensure the bot has Manage Channels and View Channels permissions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Start Using Commands</h4>
                    <p className="text-gray-600 text-sm">Use /pomodoro setup to configure your timer settings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Required Permissions
              </h3>
              <div className="space-y-3 flex-grow">
                {[
                  "Manage Channels - For channel permission management",
                  "View Channels - To monitor voice channels", 
                  "Use Slash Commands - For command functionality",
                  "Send Messages - For responses and notifications",
                  "Manage Roles - For permission overwrites"
                ].map((permission, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">
                      {permission}
                    </span>
                  </div>
                ))}
              </div>
              
              <button
                className="mt-6 border border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
                onClick={() => window.open('https://github.com/Crizter/CrizModo-DiscordBot', '_blank')}
              >
                View Full Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
      


      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to boost your server's productivity?
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Join thousands of Discord servers already using CrizModo for better time management and voice channel organization.
          </p>
          <button
            className="bg-white text-black hover:bg-gray-200 font-semibold px-12 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg"
            onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=2147609616&scope=bot', '_blank')}
          >
            Add CrizModo to Discord
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default Home