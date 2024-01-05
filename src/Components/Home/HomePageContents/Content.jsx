import { Button, Link } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Wave from 'react-wavify';
import Marquee from "react-fast-marquee"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import PdfResume from "../../../assets/Tanvir_Sarkar_Riad.pdf"
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
const Content = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a8iy13u', 'template_povu9la', form.current, 'bDF6G6duhSy4eyFLx')
            .then((result) => {
                console.log(result.text);
                toast.success('Message Sent')
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className="bg-cover bg-center mb-10 text-white" style={{ backgroundImage: 'url("https://i.ibb.co/9tTpcZn/13295064-5172658.jpg")' }}>
            <div className="w-[85%] m-auto">
                <div className="bg-blue-500 rounded-lg bg-opacity-30 p-5 lg:flex lg:justify-between ">
                    <div>
                        <h2 className="font-kalnia text-3xl text-red-300">
                            Hello there...
                        </h2>
                        <h2 className="text-3xl uppercase">
                            Tanvrir Sarkar Riad
                        </h2>
                        <p className="text-2xl font-kalnia">
                            I am a {' '}

                            <Typewriter
                                words={['Frontend Developer', 'React Developer', 'Mern Stack Developer']}
                                loop={Infinity}
                                cursor
                                cursorStyle='👋'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                            />
                        </p>

                        <p className="lg:w-[65%] md:w-[65%] mt-4">
                            Experienced web developer specializing in React and JavaScript.
                            Proficient in developing dynamic and
                            interactive web applications with a strong focus on
                            user experience and clean code practices.
                        </p>

                        <div className='mt-3'>
                            <a href={PdfResume} download={PdfResume}>
                                <Button variant="outlined">Download Resume <CloudDownloadIcon /></Button>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[30%] lg:w-[30%]">
                        <img className=" rounded-l-[5rem] rounded-r-[7rem]  rounded-b-[4rem] " src="https://i.ibb.co/jW1jTPG/1700465064286.jpg" alt="my-image" />
                    </div>
                </div>
                <div>
                    <Wave mask="url(#mask)" fill="#1277b0" >
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                <stop offset="0" stopColor="white" />
                                <stop offset="0.5" stopColor="black" />
                            </linearGradient>
                            <mask id="mask">
                                <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
                            </mask>
                        </defs>
                    </Wave>
                </div>
                <div className=' bg-blue-500 rounded-lg bg-opacity-30 p-5'>
                    <div className='lg:flex md:flex'>
                        <div>
                            <img className="md:w-[60%] lg:w-[60%] justify-center rounded-l-[5rem] rounded-r-[7rem]  rounded-b-[4rem] " src="https://i.ibb.co/jW1jTPG/1700465064286.jpg" alt="my-image" />
                        </div>
                        <div className='md:w-[45%] lg:w-[45%]'>
                            <p>
                                My name is Tanvir Sarkar Riad. Iam from Rajshahi Division.
                                I am Non CSE student recently completed Diploma In Textile Engineering. I am passionate about web development
                                and want to creat user friendly intereaction web pages. I always try to explore new web technologies and
                                implement it. I learned lot while completing this 3 projects. I continuously seek out opportunities to enhance my skills and stay up-to-date with the latest trends in web development.
                                Now I am seeking an opportunity to start my professional development career.
                            </p>

                            <div className='mt-5'>
                                <h2 className='text-3xl'>Social</h2>
                                <div className='flex gap-4 mt-3'>
                                    <a href="https://github.com/riadsarkar45"><h2 className='bg-blue-500 rounded-lg bg-opacity-30 p-5'>
                                        <GitHubIcon />
                                    </h2></a>
                                    <a href="https://www.linkedin.com/in/riad-sarkar-frontend-dev/"><h2 className='bg-blue-500 rounded-lg bg-opacity-30 p-5'><LinkedInIcon /></h2></a>
                                    <a href="mailto:your.sarkarriad@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here" className="block bg-blue-500 rounded-lg bg-opacity-30 p-5">
                                        <EmailIcon />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* marquee projects running */}
                    <div className='text-3xl font-kalnia'>
                        <div className=' mb-9 mt-5'>
                            <h2 className='font-roboto'>My Skills</h2>
                        </div>
                        <div>
                            <Marquee className='absolute'>
                                <div className='flex gap-4'>

                                    <div className='bg-green-500 rounded-lg bg-opacity-10 p-3 h-44 w-[18rem]'>
                                        <img className=" w-full h-[8rem]" src="https://i.ibb.co/1Lp4NGc/download.jpg" alt="react" />
                                        <div>
                                            <progress className="progress progress-primary w-full" value="60" max="100"></progress>
                                        </div>
                                    </div>

                                    <div className='bg-green-500 rounded-lg bg-opacity-10 p-3 h-44 w-[18rem]'>
                                        <img className=" w-full h-[8rem]" src="https://i.ibb.co/JcKNqry/images.png" alt="react router" />
                                        <div>
                                            <progress className="progress progress-primary w-full" value="50" max="100"></progress>
                                        </div>
                                    </div>

                                    <div className='bg-green-500 rounded-lg bg-opacity-10 p-3 h-44 w-[18rem]'>
                                        <img className=" w-full h-[8rem]" src="https://i.ibb.co/9cmRP6R/1-z-Td-ZMxb-Tk-Vd-XCOo-Zl-XLnsg.png" alt="firebase" />
                                        <div>
                                            <progress className="progress progress-primary w-full" value="40" max="100"></progress>
                                        </div>
                                    </div>

                                    <div className='bg-green-500 rounded-lg bg-opacity-10 p-3 h-44 w-[18rem]'>
                                        <img className=" w-full h-[8rem]" src="https://i.ibb.co/QjFxcd9/download-1.jpg" alt="mongodb" />
                                        <div>
                                            <progress className="progress progress-primary w-full" value="40" max="100"></progress>
                                        </div>
                                    </div>

                                    <div className='bg-green-500 rounded-lg bg-opacity-10 p-3 h-44 w-[18rem]'>
                                        <img className=" w-full h-[8rem]" src="https://i.ibb.co/jyRn6tP/download.png" alt="nodejs" />
                                        <div>
                                            <progress className="progress progress-primary w-full" value="40" max="100"></progress>
                                        </div>
                                    </div>
                                </div>
                            </Marquee>
                            <div className='relative mt-[-3.6rem]'>

                                <Wave fill="#e62315" mask="url(#mask)" options={{ points: 20, speed: 0.2, amplitude: 40 }}>
                                    {/* Example adapted from https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask */}
                                    <mask id="mask">
                                        <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="white" />
                                    </mask>
                                </Wave>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-3xl font-normal'>My Projects</h2>
                        <div className='md:flex lg:flex mt-6 bg-pink-500 bg-opacity-30 p-3'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide>
                                    <div>
                                        <div className='lg:flex md:flex text-white font-serif w-full gap-10'>
                                            <div>
                                                <img className='w-[35rem] h-[28rem]' src="https://i.ibb.co/kmmSdjz/Screenshot-2023-12-30-165207.png" alt="" />
                                            </div>
                                            <div className='w-[50%]'>
                                                <h2 className='text-white font-bold text-4xl'>Bd Job Hunt</h2>
                                                <h2 className='text-3xl mt-3'>Technologies i have used</h2>
                                                <div>
                                                    <h2 className='text-2xl mt-3'>Fontend TechStacks</h2>
                                                    <div className="badge badge-accent badge-outline">React</div>
                                                    <div className="badge badge-accent badge-outline">Firebase</div>
                                                    <div className="badge badge-accent badge-outline">Material UI</div>
                                                    <div className="badge badge-accent badge-outline">Tailwind Css</div>
                                                    <div className="badge badge-accent badge-outline">DaisyUI</div>
                                                </div>
                                                <div>
                                                    <h2 className='text-2xl mt-3'>Backend TechStacks</h2>
                                                    <div className="badge badge-accent badge-outline">Express.js</div>
                                                    <div className="badge badge-accent badge-outline">Node.js</div>
                                                </div>
                                                <div>
                                                    <h2 className='text-2xl mt-3'>Database</h2>
                                                    <div className="badge badge-accent badge-outline">MongoDB</div>
                                                </div>
                                                <div>
                                                    <p className='md:w-[80%] lg:w-[100%] mt-4'>
                                                        BD Job Hunting' is a mern based project. User can manage his
                                                        job accourding to his/her skills and apply to the company website. Personalized
                                                        dashboard for Employers and those people who are looking for job.
                                                    </p>

                                                </div>


                                            </div>
                                        </div>
                                        <div className='w-[100%] mt-3 rounded-md m-auto bg-red-500 p-3 bg-opacity-25'>
                                            <Marquee>
                                                <div className=''>
                                                    <div>
                                                        <img className='w-[15rem]' src="https://i.ibb.co/kmmSdjz/Screenshot-2023-12-30-165207.png" alt="" />
                                                    </div>
                                                    <div>
                                                        <h2>User can see his/her matched job</h2>
                                                    </div>
                                                </div>
                                                <div className='ml-6'>
                                                    <div>
                                                        <img className='w-[15rem]' src="https://i.ibb.co/wLp471V/Screenshot-2024-01-02-130212.png" alt="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='w-[15rem]'>Missing skills and add them</h2>
                                                    </div>
                                                </div>
                                                <div className='ml-6'>
                                                    <div>
                                                        <img className='w-[15rem]' src="https://i.ibb.co/kmmSdjz/Screenshot-2023-12-30-165207.png" alt="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='w-[15rem]'>Filter jobs in need</h2>
                                                    </div>
                                                </div>
                                            </Marquee>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='lg:flex md:flex text-white font-serif w-full gap-10'>
                                        <div>
                                            <img className='w-[96rem] h-[28rem]' src="https://i.ibb.co/hF8WqjJ/27577819-ravi24-may-8.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h2 className='text-white font-bold text-4xl'>Blood Donation Managment</h2>
                                            <h2 className='text-3xl mt-3'>Technologies i have used</h2>
                                            <div>
                                                <h2 className='text-2xl mt-3'>Fontend TechStacks</h2>
                                                <div className="badge badge-accent badge-outline">React</div>
                                                <div className="badge badge-accent badge-outline">Firebase</div>
                                                <div className="badge badge-accent badge-outline">Material UI</div>
                                                <div className="badge badge-accent badge-outline">Tailwind Css</div>
                                                <div className="badge badge-accent badge-outline">DaisyUI</div>
                                            </div>
                                            <div>
                                                <h2 className='text-2xl mt-3'>Backend TechStacks</h2>
                                                <div className="badge badge-accent badge-outline">Express.js</div>
                                                <div className="badge badge-accent badge-outline">Node.js</div>
                                            </div>
                                            <div>
                                                <h2 className='text-2xl mt-3'>Database</h2>
                                                <div className="badge badge-accent badge-outline">MongoDB</div>
                                            </div>
                                            <div>
                                                <p className='md:w-[80%] lg:w-[80%] mt-4'>
                                                    Blood Donation Management' is a mern based project.
                                                    Here user can post a blood donation request and get response.
                                                    And personalized dashboard for 'Admin and Donor' looking for job.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='lg:flex md:flex text-white font-serif w-full gap-10'>
                                        <div>
                                            <img className='w-[96rem] h-[28rem]' src="https://i.ibb.co/vvF87X5/TESTFASHIONScreenshot-2023-12-11-161942.png" alt="" />
                                        </div>
                                        <div>
                                            <h2 className='text-white font-bold text-4xl'>Fashion Info</h2>
                                            <h2 className='text-3xl mt-3'>Technologies i have used</h2>
                                            <div>
                                                <h2 className='text-2xl mt-3'>Fontend TechStacks</h2>
                                                <div className="badge badge-accent badge-outline">React</div>
                                                <div className="badge badge-accent badge-outline">Firebase</div>
                                                <div className="badge badge-accent badge-outline">Tailwind Css</div>
                                                <div className="badge badge-accent badge-outline">DaisyUI</div>
                                            </div>
                                            <div>
                                                <h2 className='text-2xl mt-3'>Backend TechStacks</h2>
                                                <div className="badge badge-accent badge-outline">Express.js</div>
                                                <div className="badge badge-accent badge-outline">Node.js</div>
                                            </div>
                                            <div>
                                                <h2 className='text-2xl mt-3'>Database</h2>
                                                <div className="badge badge-accent badge-outline">MongoDB</div>
                                            </div>
                                            <div>
                                                <p className='md:w-[80%] lg:w-[80%] mt-4'>
                                                    'I utilized a modern stack combining Tailwind CSS for responsive styling,
                                                    DaisyUI for enhanced UI components, React for dynamic front-end functionality,
                                                    and Firebase Authentication for secure user authentication.
                                                    This tech stack allowed me to create a visually appealing and user-friendly portfolio,
                                                    showcasing my skills and
                                                    projects with seamless authentication powered by Firebase.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>

                    <div className='text-center w-[85%] m-auto mt-10'>
                        <h2 className='text-3xl'>Contact Me</h2>
                        <form className='' ref={form} onSubmit={sendEmail}>
                            <input className="mt-4 input input-bordered w-full max-w-xs" type="text" placeholder='Name' name="user_name" />
                            <input className="mt-4 ml-2 input input-bordered w-full max-w-xs" type="email" placeholder='Email' name="user_email" />
                            <div>
                                <textarea className="textarea textarea-bordered md:w-[30rem] lg:w-[30rem] mt-4" name='message' placeholder="Message"></textarea>

                            </div>
                            <div>
                                <input className='btn btn-md btn-outline btn-success' type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Content;
