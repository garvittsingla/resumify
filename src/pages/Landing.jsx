import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, LogIn, ChevronRight, Code2, Palette,
  Chrome, Facebook, Apple, ShoppingCart, Slack, Twitter 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Company data
const companies = [
  { name: "Google", Icon: Chrome, color: "text-blue-500" },
  { name: "Meta", Icon: Facebook, color: "text-blue-600" },
  { name: "Apple", Icon: Apple, color: "text-gray-400" },
  { name: "Amazon", Icon: ShoppingCart, color: "text-orange-500" },
  { name: "Slack", Icon: Slack, color: "text-purple-500" },
  { name: "Twitter", Icon: Twitter, color: "text-blue-400" }
];

// Features data
const features = [
  {
    icon: Code2,
    title: "Custom Domains",
    description: "Connect your own domain or use our free subdomain options."
  },
  {
    icon: Palette,
    title: "Beautiful Themes",
    description: "Choose from dozens of professional themes or create your own."
  },
  {
    icon: Layers,
    title: "Project Showcase",
    description: "Display your work with our dynamic project layouts."
  }
];

function Navbar() {
    const navigate = useNavigate()

    function gotologin(){
        navigate("/login")
    }

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Layers className="w-8 h-8 text-orange-500" />
        <span className="text-xl font-bold">Resumify</span>
      </div>
      <button onClick={gotologin} className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors">
        <LogIn className="w-4 h-4" />
        <span>Login</span>
      </button>
    </nav>
  );
}

function Hero() {
    const navigate = useNavigate()

    function gotologin(){
        navigate("/login")
    }
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
        Build Your Professional Portfolio in Minutes
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        Showcase your work with our powerful portfolio builder. Create stunning, 
        professional portfolios that stand out from the crowd.
      </p>
      <button onClick={gotologin} className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 mx-auto transition-colors">
        <span>Start Building Free</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function CompanyMarquee() {
  const marqueeAnimation = {
    variants: {
      animate: {
        x: [0, -1920],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      },
    },
    animate: "animate"
  };

  return (
    <div className="relative overflow-hidden bg-gray-900/50 py-12 mt-16">
      <div className="flex overflow-hidden">
        {[1, 2].map((key) => (
          <motion.div 
            key={key}
            className="flex min-w-full px-12"
            {...marqueeAnimation}
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div 
                key={`${key}-${index}`}
                className="flex items-center shrink-0 w-[200px] mr-16"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex flex-col items-center gap-2 w-full">
                  <company.Icon className={`w-8 h-8 ${company.color}`} />
                  <span className="text-gray-400 text-sm font-medium text-center">
                    Used by {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-20">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-xl">
          <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-20 pb-16">
        <Hero />
        <CompanyMarquee />
        <Features />
      </main>

      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl font-medium text-gray-400 mb-8">
            Trusted by thousands of professionals worldwide
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;