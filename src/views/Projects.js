import React from 'react';
import sms from '../assets/images/sms.png';
import laravelreact from '../assets/images/laravelreact.png';
import ocsr from '../assets/images/ocsr.png';
import thymeleaf from '../assets/images/thymeleaf.png';
import music from '../assets/images/music.png';
import sw from '../assets/images/sw.png';
import stdl from '../assets/images/stdl.png';

const Projects = () => {
    return (
        <React.Fragment><br />
            <section>
                <div className="container py-4">
                    <p className='title'>Projects</p>
                    <article class="postcard dark green right-to-left">
                        <a class="postcard__img_link" href="https://github.com/DelosReyes-Rolly/shsboard/">
                            <img class="postcard__img" src={sms} alt="sms" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title green fade-in-text"><a href="https://github.com/DelosReyes-Rolly/shsboard/">SVNHS - SHS SMS</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Capstone Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">
                                Developed a comprehensive school management system for Signal Village National High School - Senior High as a part of our capstone project.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play green"><i class="fas fa-tag mr-2"></i>Laravel</li>
                                <li class="tag__item play green"><i class="fas fa-clock mr-2"></i>HTML</li>
                                <li class="tag__item play green"><i class="fas fa-tag mr-2"></i>CSS</li>
                                <li class="tag__item play green"><i class="fas fa-clock mr-2"></i>JavaScript</li>
                                <li class="tag__item play green"><i class="fas fa-tag mr-2"></i>MySQL</li>
                                <li class="tag__item play green"><i class="fas fa-tag mr-2"></i>Bootstrap</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard dark red left-to-right">
                        <a class="postcard__img_link" href="https://github.com/DelosReyes-Rolly/LaravelReact.git">
                            <img class="postcard__img" src={laravelreact} alt="laravelreact" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title red fade-in-text"><a href="https://github.com/DelosReyes-Rolly/LaravelReact.git">Laravel + React Login App</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Personal Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">
                                Developed during the learning phase of React, incorporating Laravel as the backend technology.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play red"><i class="fas fa-tag mr-2"></i>Laravel</li>
                                <li class="tag__item play red"><i class="fas fa-clock mr-2"></i>HTML</li>
                                <li class="tag__item play red"><i class="fas fa-tag mr-2"></i>CSS</li>
                                <li class="tag__item play red"><i class="fas fa-clock mr-2"></i>JavaScript</li>
                                <li class="tag__item play red"><i class="fas fa-tag mr-2"></i>MySQL</li>
                                <li class="tag__item play red"><i class="fas fa-tag mr-2"></i>React</li>
                                <li class="tag__item play red"><i class="fas fa-tag mr-2"></i>Bootstrap</li>
                                <li class="tag__item play red"><i class="fas fa-tag mr-2"></i>Vite</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard dark yellow right-to-left">
                        <a class="postcard__img_link" href="https://ocsr-webapp.000webhostapp.com/">
                            <img class="postcard__img" src={ocsr} alt="ocsr" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title yellow fade-in-text"><a href="https://ocsr-webapp.000webhostapp.com/">Online Course Subject Registration</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>School Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">
                                Developed a comprehensive online course subject registration system designed to streamline the management of
                                teachers, courses, subjects, semesters, and academic years. This system is aimed at optimizing scheduling and
                                workload distribution for teachers.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>Laravel</li>
                                <li class="tag__item play yellow"><i class="fas fa-clock mr-2"></i>HTML</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>CSS</li>
                                <li class="tag__item play yellow"><i class="fas fa-clock mr-2"></i>JavaScript</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>MySQL</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>Bootstrap</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>jQuery</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>PHP</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard dark blue left-to-right">
                        <a class="postcard__img_link" href="https://github.com/DelosReyes-Rolly/crudThymeleaf">
                            <img class="postcard__img" src={thymeleaf} alt="thymeleaf" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title blue fade-in-text"><a href="https://github.com/DelosReyes-Rolly/crudThymeleaf">Simple Spring Boot CRUD</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Personal Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">
                                Developed a CRUD (create, read, update, and delete) functionalities using spring boot and Thymeleaf. It contains
                                CRUD for students and teachers.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play blue"><i class="fas fa-clock mr-2"></i>HTML</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>CSS</li>
                                <li class="tag__item play blue"><i class="fas fa-clock mr-2"></i>Java</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>MySQL</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>SpringBoot</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Thymeleaf</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard dark blue right-to-left">
                        <a class="postcard__img_link" href="https://music-review-v1.onrender.com/">
                            <img class="postcard__img" src={music} alt="music" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title blue fade-in-text"><a href="https://music-review-v1.onrender.com/">Music Review App</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Personal Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">
                                Developed a MERN app that lists the albums, podcasts, and artists from Spotify API. The users can register and
                                review the albums or leave a comment on the review of other users.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play blue"><i class="fas fa-clock mr-2"></i>HTML</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>CSS</li>
                                <li class="tag__item play blue"><i class="fas fa-clock mr-2"></i>Mongo DB</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Express</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>React</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Node JS</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Spotify API</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Tailwind CSS</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard dark red left-to-right">
                        <a class="postcard__img_link" href="https://delosreyes-rolly.github.io/svelteweatherapp/">
                            <img class="postcard__img" src={sw} alt="sw" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title red fade-in-text"><a href="https://delosreyes-rolly.github.io/svelteweatherapp/">Svelte Weather App</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Personal Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">
                                Developed an online weather app using svelte that shows the current temperature, humidity and wind speed of
                                certain places. It also includes the forecast for the next days.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play red"><i class="fas fa-clock mr-2"></i>SvelteKit</li>
                                <li class="tag__item play red"><i class="fas fa-tag mr-2"></i>Svelte Material UI</li>
                                <li class="tag__item play red"><i class="fas fa-clock mr-2"></i>OpenWeatherMap API</li>
                                <li class="tag__item play red"><i class="fas fa-tag mr-2"></i>JavaScript</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard dark yellow right-to-left">
                        <a class="postcard__img_link" href="https://delosreyes-rolly.github.io/sveltetodo/">
                            <img class="postcard__img" src={stdl} alt="stdl" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title yellow fade-in-text"><a href="https://delosreyes-rolly.github.io/sveltetodo/">Svelte To Do List</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Personal Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">
                                Developed an online to do list that includes CRUD operations (create, read, update, and delete).
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play yellow"><i class="fas fa-clock mr-2"></i>SvelteKit</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>Tailwind CSS</li>
                                <li class="tag__item play yellow"><i class="fas fa-clock mr-2"></i>Flowbite Svelte</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>JavaScript</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects