import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Support = () => {
  const [expandedFaq, setExpandedFaq] = useState(false);

  const handleFaqChange = (panel) => {
    setExpandedFaq(expandedFaq === panel ? false : panel);
  };

  const supportChannels = [
    {
      title: "Discord Server",
      description: "Join our community server for real-time support and discussions",
      icon: <div className="text-4xl">💬</div>,
      action: "Join Server",
      link: "https://discord.gg/CBCBQqaA2b",
      bgColor: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700"
    },
    {
      title: "GitHub Issues",
      description: "Report bugs, request features, or contribute to the project",
      icon: <div className="text-4xl">🐛</div>,
      action: "Open Issue",
      link: "https://github.com/Crizter/CrizModo-DiscordBot",
      bgColor: "bg-gray-50 border-gray-200",
      textColor: "text-gray-700"
    },
    {
      title: "Email Support",
      description: "Contact us directly for private support or business inquiries",
      icon: <div className="text-4xl">📧</div>,
      action: "Send Email",
      link: "mailto:harshsharma90866@gmail.com",
      bgColor: "bg-green-50 border-green-200",
      textColor: "text-green-700"
    }
  ];

  const troubleshooting = [
    {
      title: "Bot Not Responding",
      steps: [
        "Check if the bot is online in your server",
        "Verify the bot has 'Use Slash Commands' permission",
        "Try using /ping to test connectivity",
        "Ensure the bot role is above the roles it needs to manage"
      ],
      severity: "high"
    },
    {
      title: "Commands Not Working",
      steps: [
        "Verify you have the required permissions for the command",
        "Check if the command syntax is correct",
        "Ensure the bot has necessary permissions in the channel",
        "Try refreshing Discord or using a different device"
      ],
      severity: "medium"
    },
    {
      title: "Voice Channel Management Issues",
      steps: [
        "Verify the bot has 'Manage Channels' permission",
        "Check that the specified channels exist",
        "Ensure the required role exists and is configured correctly",
        "Verify the member count threshold is set appropriately"
      ],
      severity: "medium"
    },
    {
      title: "Pomodoro Timer Problems",
      steps: [
        "Use /pomodoro setup to configure your settings first",
        "Check if you have an active session running",
        "Try stopping the current session with /pomodoro stopsession",
        "Verify the bot can send messages in the channel"
      ],
      severity: "low"
    }
  ];

  const faqs = [
    {
      question: "How do I add CrizModo to my Discord server?",
      answer: "Click the 'Add to Discord' button on our homepage and select your server. Make sure you have 'Manage Server' permission in the target server."
    },
    {
      question: "What permissions does the bot need?",
      answer: "CrizModo requires: Manage Channels, View Channels, Use Slash Commands, Send Messages, and Manage Roles. These are automatically requested during the invite process."
    },
    {
      question: "Can multiple users use the Pomodoro timer simultaneously?",
      answer: "Yes! Each user has their own personal Pomodoro settings and can run independent timer sessions without interfering with others."
    },
    {
      question: "How does the voice channel management work?",
      answer: "The bot monitors a primary voice channel's member count. When it reaches your threshold, a secondary channel becomes visible to specified roles. When the count drops and the secondary channel is empty, it becomes hidden again."
    },
    {
      question: "Are my settings saved if the bot restarts?",
      answer: "Yes! All user settings, configurations, and active sessions are saved to MongoDB and will persist through bot restarts or updates."
    },
    {
      question: "Can I customize the Pomodoro timer durations?",
      answer: "Absolutely! Use /pomodoro setup to set custom work sessions (5-180 min), breaks (1-60 min), long breaks (30-120 min), and session counts (1-10)."
    },
    {
      question: "Is there a limit to how many servers can use the bot?",
      answer: "No, CrizModo can be added to unlimited servers. Each server maintains its own independent configuration and settings."
    },
    {
      question: "How do I report a bug or request a feature?",
      answer: "You can report bugs or request features through our GitHub repository, Discord server, or by contacting us directly via email."
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
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
              Support Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get help with CrizModo, find answers to common questions, or report issues
            </p>
          </div>

          {/* Support Channels */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Get Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={index} className={`${channel.bgColor} border rounded-lg hover:shadow-lg transition-shadow duration-300 p-6 text-center h-full flex flex-col`}>
                  <div className="mb-4">
                    {channel.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${channel.textColor}`}>
                    {channel.title}
                  </h3>
                  <p className={`mb-6 text-sm ${channel.textColor} flex-grow`}>
                    {channel.description}
                  </p>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 w-full"
                    onClick={() => window.open(channel.link, '_blank')}
                  >
                    {channel.action}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Troubleshooting Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Troubleshooting Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {troubleshooting.map((issue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {issue.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                      {issue.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    Follow these steps to resolve the issue:
                  </p>
                  <ol className="space-y-2 flex-grow">
                    {issue.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700 text-sm">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => handleFaqChange(`panel${index}`)}
                    className="w-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-4 text-left flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <span className={`transform transition-transform duration-200 ${
                      expandedFaq === `panel${index}` ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </button>
                  {expandedFaq === `panel${index}` && (
                    <div className="bg-white p-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;