import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, {useRef} from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link"
import article1 from "../../public/images/articles/img1.jpeg"
import article2 from "../../public/images/articles/img2.jpeg"
import article3 from "../../public/images/articles/img3.jpeg"
import article4 from "../../public/images/articles/img4.jpeg"
import {motion, useMotionValue} from "framer-motion";
import TransitionEffect from '../components/TransitionEffect'


const FramerImage = motion(Image);
const MovingImg = ({title,img,link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display ="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event){
        imgRef.current.style.display ="none";
        x.set(0);
        y.set(0);    
    }
    return(
        <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className="capitalize text-xl font-semibold hover:underline">
                {title}
            </h2>
            <FramerImage style={{x:x, y:y}} initial={{opacity:0}} whileInView={{opacity:1, transition: {duration:0.2}}}
            ref={imgRef} src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg md:!hidden" priority sizes="(max-width: 768px) 100vw (max-width:1200px) 50vw, 50vw"/>
        </Link>
    )
}
const Articles = ({img, title, date, link}) => {
    return (
        <motion.li 
        initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once: true}}
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0
        border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col">
            <MovingImg title={title} img={img} link={link}/>
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
                {date}
            </span>
        </motion.li>
    )
}

const FeaturedArticle =  ({img, title, time, summary, link}) => {
    return (
        <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
            <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}} transition={{duration:0.2}}
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 hover:underline xs:text-lg">
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2">
                {summary}
            </p>
            <span className="text-primary font-semibold dark:text-primaryDark">
                {time}
            </span>
        </li>
    )
}
const articles = () => {
  return (
    <>
        <Head>
          <title>Articles Page</title>
          <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Words Can Change The World " className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                    <FeaturedArticle 
                    title="Cảm giác khi một mình đi khám phá thế giới!"
                    summary="Mô tả thế giới khi trải nghiệm một mình cùng với Balo"
                    time="9 min read"
                    link="https://thanhtuanduky.wordpress.com/2023/09/15/cam-giac-khi-mot-minh-di-kham-pha-the-gioi/" 
                    img={article1}
                    />
                    
                    <FeaturedArticle 
                    title="Thần Tượng Của Các Bạn Là Ai?"
                    summary="Nêu lên quan điểm và suy nghĩ cá nhân về thần tượng "
                    time="6 min read"
                    link="https://thanhtuanduky.wordpress.com/2023/08/15/than-tuong-cua-cac-ban-la-ai/" 
                    img={article2}
                    />
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                <ul>
                    <Articles
                        title="Thanh Tuấn Du Ký: Phượng Hoàng Của Đông Âu – Warsaw (Poland)"
                        date="August 17, 2023"
                        link="https://thanhtuanduky.wordpress.com/2023/08/17/thanh-tuan-du-ky-phuong-hoang-cua-dong-au-warsaw-poland/"
                        img={article3}
                    />

                    <Articles
                        title="Thanh Tuấn Du Ký: Ngọc Bội Của Moravia – Olomouc (Czech)"
                        date="July 14, 2023"
                        link="https://thanhtuanduky.wordpress.com/2023/08/17/thanh-tuan-du-ky-phuong-hoang-cua-dong-au-warsaw-poland/"
                        img={article4}
                    /> 

                </ul>
            </Layout>
        </main>
    </>
    )
}

export default articles