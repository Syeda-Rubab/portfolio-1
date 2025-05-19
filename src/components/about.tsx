"use client"

import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image';
import { useSectionInView } from '@/lib/useInView';

//Animation
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const { ref } = useSectionInView("#about")
  return(
  <motion.section
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0}}
  transition={{ delay: 0.175}}
   id='about'
   ref={ref}
   className='max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28'>
    <div className='container mx-auto'>
      <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
         <SectionHeading>
            About
        </SectionHeading>
      </Fade>
    
      <div className='grid xl:grid-cols-2 lg:text-start'>
        <div className='flex-1'>
          <div className='text-lg mt-12 xl:mt-3'>
            <div className='flex justify-start flex-col'>
              <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
               
              </Fade>
              <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                 <p className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                 I&apos;m a full-stack developer with strong expertise in TypeScript, Next.js, and Python. I specialize in building modern, scalable web applications and backend systems. Currently, I&apos;m in the second-to-last quarter of an Agentic AI specialization, where I am learning to build advanced autonomous agents using frameworks like LangChain, AutoGPT, and ReAct.
                 With a passion for AI and web technologies, I aim to bridge the gap between intelligent systems and user-centric product design. I enjoy building smart, efficient, and scalable solutions — whether it&apos;s a full-stack web app or an autonomous AI agent.
                 </p>
              </Fade>

              <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                 <h3 className='font-bold mt-6'>Our Vision</h3>
              </Fade>
             
              <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                 <p className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                    We then use this information to create a custom website that not only reflects your
                    brand but also achieve your business objectives. From resposive design to intuitive 
                    navgition, we focus on every detail.
                </p>
              </Fade>
              
            </div>
          </div>
        </div>
        <div>
            <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
                {/*Right Image*/}
                  <Image
                    src="/about.png"
                    alt="About me"
                    width={400}
                    height={400}
                    quality="100"
                    priority={true}
                    className='rounded-full mt-8 object-cover'/>

            </Fade>
          
         </div>        
      </div>
    </div>
  </motion.section>
  );
}