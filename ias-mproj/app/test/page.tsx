import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 text-secondary">
      {/* Header */}
      <header className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2">PhishGuard</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#features" className="text-white font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#examples" className="text-white font-medium">
                  Examples
                </a>
              </li>
              <li>
                <a href="#tips" className="text-white font-medium">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-white font-medium">
                  Test Yourself
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary-dark text-white text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">
            Protect Yourself from Email Phishing Attacks
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Learn how to identify and avoid email phishing attempts that could
            compromise your personal information and online security.
          </p>
          <a
            href="#features"
            className="mt-6 inline-block bg-white text-primary px-6 py-3 rounded font-medium hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary relative inline-block pb-2">
            What is Phishing?
            <span className="block h-1 w-16 bg-primary mx-auto mt-2"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <div className="text-center text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold">Email Deception</h3>
              <p className="text-gray-600">
                Phishing emails impersonate trusted entities to trick you into
                revealing sensitive information.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <div className="text-center text-4xl mb-4">🔑</div>
              <h3 className="text-xl font-bold">Credential Theft</h3>
              <p className="text-gray-600">
                The goal is to steal usernames, passwords, or personal data for
                malicious use.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <div className="text-center text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold">Protection Strategies</h3>
              <p className="text-gray-600">
                Learn to recognize phishing attempts and protect yourself from
                online scams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
