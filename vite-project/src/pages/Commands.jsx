import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Commands = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const commandCategories = [
    { id: 'all', label: 'All Commands', icon: '📋' },
    { id: 'pomodoro', label: 'Pomodoro', icon: '⏱️' },
    { id: 'voice', label: 'Voice Management', icon: '🔊' },
    { id: 'general', label: 'General', icon: '⚙️' }
  ];

  const commands = [
    {
      command: "/pomodoro setup",
      description: "Configure your personal Pomodoro timer settings with custom durations and session counts.",
      category: "pomodoro",
      permissions: ["Use Application Commands"],
      options: [
        { name: "work", type: "Integer", description: "Work session duration (5-180 minutes)", required: false },
        { name: "break", type: "Integer", description: "Short break duration (1-60 minutes)", required: false },
        { name: "longbreak", type: "Integer", description: "Long break duration (30-120 minutes)", required: false },
        { name: "sessions", type: "Integer", description: "Sessions before long break (1-10)", required: false },
        { name: "max-sessions", type: "Integer", description: "Maximum total sessions (1-10)", required: false }
      ],
      examples: [
        "/pomodoro setup work:25 break:5 longbreak:15 sessions:4",
        "/pomodoro setup work:50 break:10 max-sessions:6",
        "/pomodoro setup longbreak:30 sessions:3"
      ]
    },
    {
      command: "/pomodoro start",
      description: "Start a new Pomodoro session using your configured settings with interactive controls.",
      category: "pomodoro",
      permissions: ["Use Application Commands"],
      options: [],
      examples: ["/pomodoro start"]
    },
    {
      command: "/pomodoro rest",
      description: "Take a manual break using your configured short break duration.",
      category: "pomodoro",
      permissions: ["Use Application Commands"],
      options: [],
      examples: ["/pomodoro rest"]
    },
    {
      command: "/pomodoro skip",
      description: "Skip the current phase and move to the next work or break session.",
      category: "pomodoro",
      permissions: ["Use Application Commands"],
      options: [],
      examples: ["/pomodoro skip"]
    },
    {
      command: "/pomodoro stopsession",
      description: "Stop the current Pomodoro session completely and reset all timers.",
      category: "pomodoro",
      permissions: ["Use Application Commands"],
      options: [],
      examples: ["/pomodoro stopsession"]
    },
    {
      command: "/pomodoro help",
      description: "Get detailed help and usage information about all Pomodoro commands.",
      category: "pomodoro",
      permissions: ["Use Application Commands"],
      options: [],
      examples: ["/pomodoro help"]
    },
    {
      command: "/enable-roomactivecheck",
      description: "Configure dynamic voice channel visibility based on member count and role management.",
      category: "voice",
      permissions: ["Manage Channels", "Manage Roles"],
      options: [
        { name: "enabled", type: "Boolean", description: "Enable or disable the feature", required: true },
        { name: "primary-channel", type: "Channel", description: "Voice channel to monitor for member count", required: true },
        { name: "secondary-channel", type: "Channel", description: "Voice channel to show/hide based on activity", required: false },
        { name: "required-role", type: "Role", description: "Role that can see the secondary channel when active", required: false },
        { name: "threshold", type: "Integer", description: "Member count threshold (1-50, default: 10)", required: false }
      ],
      examples: [
        "/enable-roomactivecheck enabled:true primary-channel:#study-hall secondary-channel:#overflow required-role:@Students",
        "/enable-roomactivecheck enabled:true primary-channel:#general threshold:15",
        "/enable-roomactivecheck enabled:false"
      ]
    },
    {
      command: "/ping",
      description: "Check if the bot is responsive and view current latency statistics.",
      category: "general",
      permissions: ["Use Application Commands"],
      options: [],
      examples: ["/ping"]
    }
  ];

  const filteredCommands = commands.filter(cmd => {
    const matchesSearch = cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'pomodoro': return 'bg-blue-100 text-blue-800';
      case 'voice': return 'bg-purple-100 text-purple-800';
      case 'general': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Bot Commands
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete reference for all CrizModo slash commands with detailed options and examples
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search commands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-2">
              <div className="flex flex-wrap gap-2">
                {commandCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-800 border border-blue-300'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span className="font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Commands Grid */}
          <div className="space-y-6">
            {filteredCommands.map((cmd, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  {/* Command Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="font-mono text-blue-600 text-xl mb-2">
                        {cmd.command}
                      </h2>
                      <p className="text-gray-700 mb-3">
                        {cmd.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(cmd.category)}`}>
                      {cmd.category}
                    </span>
                  </div>

                  {/* Permissions */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Required Permissions:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cmd.permissions.map((permission, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Options */}
                  {cmd.options.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Options:
                      </h3>
                      <div className="space-y-3">
                        {cmd.options.map((option, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-mono text-sm text-blue-600">
                                {option.name}
                              </span>
                              <div className="flex gap-2">
                                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                                  {option.type}
                                </span>
                                {option.required && (
                                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                                    Required
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                              {option.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Examples */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Examples:
                    </h3>
                    <div className="space-y-2">
                      {cmd.examples.map((example, idx) => (
                        <div key={idx} className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCommands.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-xl text-gray-500 mb-2">
                No commands found
              </h2>
              <p className="text-gray-400">
                Try adjusting your search terms or filter options
              </p>
            </div>
          )}

          {/* Quick Reference */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Quick Reference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">
                  Pomodoro Workflow
                </h3>
                <ol className="space-y-1 text-blue-600 text-sm">
                  <li>1. /pomodoro setup - Configure settings</li>
                  <li>2. /pomodoro start - Begin session</li>
                  <li>3. Use interactive buttons to control</li>
                  <li>4. /pomodoro help - Get assistance</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">
                  Voice Management
                </h3>
                <ol className="space-y-1 text-blue-600 text-sm">
                  <li>1. Set up channels and roles</li>
                  <li>2. /enable-roomactivecheck - Configure</li>
                  <li>3. Bot monitors member counts</li>
                  <li>4. Automatic visibility control</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">
                  Troubleshooting
                </h3>
                <ol className="space-y-1 text-blue-600 text-sm">
                  <li>1. /ping - Check bot status</li>
                  <li>2. Verify bot permissions</li>
                  <li>3. Check channel/role settings</li>
                  <li>4. Contact support if needed</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Commands;