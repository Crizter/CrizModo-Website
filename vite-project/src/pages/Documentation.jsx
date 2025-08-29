import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Documentation = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  const setupSteps = [
    {
      title: "Clone the Repository",
      description: "Get the source code from GitHub",
      code: `git clone <repository-url>
cd "Timer Bot11"`
    },
    {
      title: "Install Dependencies",
      description: "Install required Node.js packages",
      code: `npm install discord.js mongoose dotenv`
    },
    {
      title: "Environment Configuration",
      description: "Create and configure your .env file",
      code: `TOKEN=your_discord_bot_token
APPLICATION_ID=your_application_id
CLIENT_ID=your_client_id
GUILD_ID=your_test_server_id
PUBLIC_KEY=your_public_key
DATABASE_URL=your_mongodb_connection_string`
    },
    {
      title: "Run the Bot",
      description: "Start your bot instance",
      code: `npm start
# or for development
npm run dev`
    }
  ];

  const permissions = [
    { name: "Manage Channels", description: "For channel permission management", required: true },
    { name: "View Channels", description: "To monitor voice channels", required: true },
    { name: "Use Slash Commands", description: "For command functionality", required: true },
    { name: "Send Messages", description: "For responses and notifications", required: true },
    { name: "Manage Roles", description: "For permission overwrites", required: true }
  ];

  const architecture = [
    { 
      component: "bot.js", 
      description: "Main bot file - Entry point and event handlers",
      type: "Core"
    },
    { 
      component: "commands/", 
      description: "Slash command definitions and structure",
      type: "Commands"
    },
    { 
      component: "handlers/", 
      description: "Command logic handlers for different features",
      type: "Logic"
    },
    { 
      component: "utils/", 
      description: "Utility functions and managers",
      type: "Utils"
    },
    { 
      component: "models/", 
      description: "MongoDB data models",
      type: "Database"
    },
    { 
      component: "database/", 
      description: "Database connection and configuration",
      type: "Database"
    }
  ];

  const tabs = [
    { label: "Quick Start", icon: "🚀" },
    { label: "Installation", icon: "⚙️" },
    { label: "Configuration", icon: "🔧" },
    { label: "Architecture", icon: "🏗️" },
    { label: "Security", icon: "🔒" },
    { label: "Database", icon: "💾" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guide to installing, configuring, and using CrizModo Discord Bot
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    tabValue === index
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Quick Start Tab */}
          {tabValue === 0 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Quick Start Guide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {setupSteps.map((step, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-3 text-sm">
                        {step.description}
                      </p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto mt-auto">
                        <pre>{step.code}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Installation Tab */}
          {tabValue === 1 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Installation Requirements</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                    <ul className="space-y-2">
                      {[
                        "Node.js 16.9.0 or higher",
                        "MongoDB Atlas account or local MongoDB instance",
                        "Discord Bot Token",
                        "Discord Server with appropriate permissions"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Bot Permissions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {permissions.map((permission, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium">{permission.name}</h4>
                            <p className="text-gray-600 text-sm">{permission.description}</p>
                          </div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            Required
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Configuration Tab */}
          {tabValue === 2 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Configuration Guide</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Discord Bot Setup</h3>
                    <ol className="space-y-3">
                      <li>
                        <span>1. Go to <a href="https://discord.com/developers/applications" className="text-blue-600 hover:underline">Discord Developer Portal</a></span>
                      </li>
                      <li>
                        <span>2. Create a new application and bot</span>
                      </li>
                      <li>
                        <span>3. Copy your bot token and application ID</span>
                      </li>
                      <li>
                        <span>4. Set up OAuth2 URL with required scopes:</span>
                        <div className="bg-gray-100 p-3 rounded mt-2 font-mono text-sm overflow-x-auto">
                          https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=2147609616&integration_type=0&scope=bot+applications.commands
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">MongoDB Configuration</h3>
                    <ul className="space-y-2">
                      {[
                        "Create a MongoDB Atlas cluster or set up local MongoDB",
                        "Create a database (name is flexible)",
                        "The bot will automatically create required collections",
                        "Add connection string to .env file"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Tab */}
          {tabValue === 3 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Project Architecture</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Project Structure</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {architecture.map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-mono text-blue-600 text-lg">
                              {item.component}
                            </h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.type === 'Core' ? 'bg-red-100 text-red-800' :
                              item.type === 'Commands' ? 'bg-blue-100 text-blue-800' :
                              item.type === 'Logic' ? 'bg-green-100 text-green-800' :
                              item.type === 'Utils' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {item.type}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Voice Channel Logic</h3>
                    <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                      <pre>{`if (primary_channel_members >= threshold):
    make_secondary_visible_to_role()
elif (secondary_channel_has_members):
    keep_secondary_visible_to_role()  # Protect active users
else:
    hide_secondary_from_everyone()`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {tabValue === 4 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Security Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-3 text-lg">
                      Permission Validation
                    </h3>
                    <p className="text-red-700 text-sm">
                      Commands check user permissions before execution to ensure only authorized users can perform sensitive operations.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-3 text-lg">
                      Input Sanitization
                    </h3>
                    <p className="text-blue-700 text-sm">
                      All user inputs are validated and sanitized to prevent injection attacks and ensure data integrity.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-3 text-lg">
                      Secure Credentials
                    </h3>
                    <p className="text-green-700 text-sm">
                      Environment variables protect sensitive credentials and database connection strings.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-3 text-lg">
                      Error Privacy
                    </h3>
                    <p className="text-purple-700 text-sm">
                      Detailed errors are logged to console while safe messages are sent to users to prevent information leakage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Database Tab */}
          {tabValue === 5 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Database Models</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-3 text-xl">
                      PomodoroUser Model
                    </h3>
                    <p className="text-blue-700 mb-3 text-sm">
                      Stores individual user Pomodoro preferences and settings.
                    </p>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• User ID</li>
                      <li>• Work/break/long break durations</li>
                      <li>• Sessions before long break</li>
                      <li>• Maximum sessions</li>
                      <li>• Creation/update timestamps</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-3 text-xl">
                      RoomActiveCheck Model
                    </h3>
                    <p className="text-purple-700 mb-3 text-sm">
                      Stores guild-specific channel management settings.
                    </p>
                    <ul className="space-y-1 text-purple-700 text-sm">
                      <li>• Guild ID</li>
                      <li>• Feature enabled status</li>
                      <li>• Primary/secondary channel IDs</li>
                      <li>• Required role ID</li>
                      <li>• Member count threshold</li>
                      <li>• Creation/update timestamps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              onClick={() => window.open('https://github.com/Crizter/CrizModo-DiscordBot', '_blank')}
            >
              View on GitHub
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;