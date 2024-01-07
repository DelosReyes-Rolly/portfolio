import React from 'react';
import sms from'../assets/images/sms.png';
import laravelreact from'../assets/images/laravelreact.png';

const Projects = () => {
    return (
        <React.Fragment><br/>
            <section>
                <div className="container py-4">
                    <p className='title'>Projects</p>
                    <article class="postcard dark blue right-to-left">
                        <a class="postcard__img_link" href="https://shsboard.puptcapstone.net/">
                            <img class="postcard__img" src={sms} alt="Image Title" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title blue fade-in-text"><a href="https://shsboard.puptcapstone.net/">SVNHS - SHS SMS</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Capstone Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">Developed a comprehensive school management system for Signal Village National High School - Senior High as a part of our capstone project.</div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Laravel</li>
                                <li class="tag__item play blue"><i class="fas fa-clock mr-2"></i>HTML</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>CSS</li>
                                <li class="tag__item play blue"><i class="fas fa-clock mr-2"></i>Javascript</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>MySQL</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Bootstrap</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard dark yellow left-to-right">
                        <a class="postcard__img_link" href="https://github.com/DelosReyes-Rolly/LaravelReact.git">
                            <img class="postcard__img" src={laravelreact} alt="Image Title" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title yellow fade-in-text"><a href="https://github.com/DelosReyes-Rolly/LaravelReact.git">Laravel + React Login App</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Simple Project</div>
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt fade-in-text">Developed during the learning phase of React, incorporating Laravel as the backend technology. </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>Laravel</li>
                                <li class="tag__item play yellow"><i class="fas fa-clock mr-2"></i>HTML</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>CSS</li>
                                <li class="tag__item play yellow"><i class="fas fa-clock mr-2"></i>Javascript</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>MySQL</li>
                                <li class="tag__item play yellow"><i class="fas fa-tag mr-2"></i>React</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Bootstrap</li>
                                <li class="tag__item play blue"><i class="fas fa-tag mr-2"></i>Vite</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects