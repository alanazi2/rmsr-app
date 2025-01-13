import React from 'react';
import { motion } from 'framer-motion';
import Image from './Image'; // استخدم مكون Image إذا كان لديك إعداد لـ Next.js

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <img
              src="/rms1.jpg"
              alt="Rashid Alanazi"
              className="rounded-3xl object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-medium tracking-wider text-zinc-400">
              ABOUT ME
            </h2>

            <p className="text-4xl font-light leading-relaxed">
              An independent digital designer and front-end developer. Passionate about crafting unforgettable experiences and providing companies with innovative, user-centric solutions for nearly a decade.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "19+", label: "Years", sublabel: "of experience" },
                { value: "122+", label: "Projects", sublabel: "Delivered" },
                { value: "140%", label: "Client ROI", sublabel: "" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative p-6 rounded-2xl bg-zinc-800/50 backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-zinc-400">
                    {stat.label}
                    {stat.sublabel && <span className="block">{stat.sublabel}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default HomePage;
