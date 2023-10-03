import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import {useMotionValue, useSpring, useInView} from 'framer-motion'
import React, {useRef, useEffect} from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import profilePic from "../../public/images/profile/profile-img.jpeg"
import TransitionEffect from '../components/TransitionEffect'


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true});
    
    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() =>{
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
        return <span ref={ref}></span>
    
}
const about = () => {
  return (
    <>
        <Head>
            <title>About Page</title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className='pt-16'>
                <AnimatedText text="Passion Text" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8"/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                        <p className="font-medium">
                        Hello, my name is Nguyen Thanh Tuan (Finn Nguyen), English name is Finn Nguyen. I am a travel blogger and web programmer. I graduated from Ostrava Technical University with a major in Computer Science.                        
                        </p>
                        <p className="my-4 font-medium">
                        I'm a confident, happy person and have a hobby of traveling alone and exploring the world, so I named my travel series Thanh Tuan Du Ky with the slogan: Life is trips, and your own destination.                         </p>
                        <p className="font-medium">
                        Besides, I also like to play and research about many game genres such as horror, comedy, action, ..., and my favorite game is League of Legends.    
                        </p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-dark"/>
                            <Image src={profilePic} className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={50}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied clients</h2>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Project completed</h2>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={1}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years of Experience</h2>
                        </div>
                    </div>
                </div>
            </Layout>
            <Skills/>
            <Experience/>
            <Education/>
        </main>
    </>
    )
}

export default about