import React, {useRef} from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp; <a href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark">@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} / {address}
            </span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {target: ref, offset: ["start end", "center start"]}
    )
  return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
            Experience
        </h2>

        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                position='Supporter'
                company='GOOGLE PRODUCT FORUM VIETNAM' companyLink='google.com  '
                time='11/2016 - 03/2020' address ='Online'
                work='Responsible for working on a range of projects (5 projects at a time), designing appealing websites and interacting on a daily basis with graphic designers, back-end developers, and marketers.
                Support Vietnamese users and advise users on Google products such as Chrome, Photos, Drive, Account, Gmail, ...
                Increase the time involved and work to solve high-level product problems or customers with product issues.
                Keep up to date with and update knowledge of Google products from Google experts.
                Introduce and marketing the Google Product market and encourage people to participate in community development and promote how to use Google products.'
                />

                <Details 
                position='COMMUNITY'
                company='IVO - Bất Động Sản Sạch' companyLink='batdongsansach.vn'
                time='10/2018 - 03/2019' address ='268 To Hien Thanh, District 10 , Ho Chi Minh City, Vietnam'
                work='Develop content and promote IVO articles to the Vietnamese CEO and Real Estate community
                Advertise and develop community groups on IVO and Clean Real Estate managed by IVO and Clean Real Estate.
                Increase the rate of registration and participation of events organized by IVO.
                Updates on the trend of ICO development and thriving on IVO.'
                />

                <Details 
                position='Community Manager'
                company='JDI ONE - Defily Finance' companyLink='https://defily.io/'
                time='06/2021 - 02/2022' address ='F9, Maritime Building, 42 Tu Cuong, Ward 4, Tan Binh District, Ho Chi Minh City, Vietnam'
                work='Build and develop the community in the Defily project.
                Manage, communicate and interact with members participating in the Defily Finance project.
                Receive tasks given by superiors. Share information from the developers or project managers to members.
                When members have questions related to the Defily project, the Community Manager or Community Members affiliated with the project must answer questions and resolve concerns raised by members.'
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience