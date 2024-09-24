  'use client';
  import './globals.css';
  import './Projects.css';
  import './ContactMe.css';
  import { Button, Col, Row } from 'reactstrap';
  import { triangleSymbolPointingLeft, triangleSymbolPointingRight } from './components/triangles';
  import Typewriter from 'typewriter-effect';
  import { Link, animateScroll as scroll } from 'react-scroll';
  import { useState } from 'react';
  import cleezyImage from './components/images/cleezy.jpg';
  import { createUrl } from './cleezy';

  export default function Home() {
    const [selectedProject, setSelectedProject] = useState('Cleezy');
    const [url, setUrl] = useState('');
    const [alias, setAlias] = useState();
    const [cleezyError, setCleezyError] = useState();
    const [generatedUrl, setGeneratedUrl] = useState('');

    async function handleSelect(project) {
      setSelectedProject(project);
    }

    async function handleCreateUrl() {
      const response = await createUrl(url, alias);
      console.log("sending request to server action with", url, alias);
      if (response) {
        console.log("no error");
        setCleezyError(false);
        setUrl('');
        setAlias('');
        document.getElementById('url-box').value = '';
        document.getElementById('alias-box').value = '';
        return true;
      } else {
        console.log("had error in server action");
        setCleezyError(true);
        return false;
      }
    }

    function renderCard() {
      switch(selectedProject) {
        case 'Cleezy':
          return (
            <div className='project-card'>
              <div className='project-card-image-container'>
                <img src={cleezyImage} alt='cleezy-screenshot' style={{ maxWidth: '100%', maxHeight: '100%', padding: '10px' }}></img>
              </div>
              <div className='project-card-description'>
                Cleezy was a URL shortening service I made for the Software and Computer Engineering Society's club page.
                I used Python's FastAPI library, SQLite for the database, and Docker to containerize the code. I also added
                custom Prometheus metrics for tracking creation time, redirect response time, and error counter. SCE uses 
                this shortener for links such as the Discord invite. Check it out at <a href='https://sce.sjsu.edu/s/discord'>sce.sjsu.edu/s/discord</a>!
              </div>
              <div>
                <p>Try it here</p>
                <input
                  type='text'
                  placeholder='URL'
                  id='url-box'
                  onChange={e => setUrl(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Alias'
                  id='alias-box'
                  onChange={e => setAlias(e.target.value)}
                />
                <Button
                  className='bg-gray-500'
                  disabled={!url}
                  onClick={() => handleCreateUrl()}
                >
                    Submit
                </Button>
                {generatedUrl && (
                  <p>{ generatedUrl }</p>
                )}
              </div>
            </div>
          );
        case 'JotBot':
          return (
            <div className='project-card'>
              <div className='project-card-description'>
                JotBot is an AI-powered note taking app prototype. It allows the user to write down and save 1000-character notes, with AI integrated into the main note feature.
                For example, the user can ask ChatGPT a question in one field, and the answer will show up in the note itself, allowing for easy
                formatting of the answer.
              </div>
            </div>
          );
        case 'Raspberry Pi Speakers':
          return (
            <div className='project-card'>
              <div className='project-card-description'>
                This was a project I contributed to in the SCE club room for playing music on speakers through a Raspberry Pi. This was done
                by connecting the Pi to the room's server and opening an SSH Tunnel to forward a port on the server to the port on the Pi hosting
                the music playing API. I also wrote a Bash script to read command line arguments that started or stopped both the tunnel and API. 
              </div>
            </div>
          );
        case 'Groundhog':
          return (
            <div className='project-card'>
              <div className='project-card-description'>
                Groundhog was a project I worked on for our CalHacks 10 submission, which ended up winning the "Best Use of Together AI" prize.
                This AI storytelling applet was built using a brand new fullstack framework in Python, so we had to learn the layout and work out
                any issues along the way. I worked on the backend, using the Together AI API to maintain the user's context and progress the story,
                as well as generate an image that goes with the story.
              </div>
            </div>
          );
        case '':
          return (
            <div className='project-card'>
              Please select a project...
            </div>
          )
        default:
          return <div />;
      }
    }

    return (
      <div className='bg-sand'>

        {/* Landing Page */}
        <div className='flex font-VT323 w-full h-screen justify-center' id='landing-page'>
          <div className='font-VT323 ml-auto mr-auto items-center text-5xl pt-2 text-black'>
            <Typewriter className='title' options={{
              strings: [`Initializing Portfolio...`],
              autoStart: true,
              loop: true,
              pauseFor: 9999999,
              delay: 30,
              deleteSpeed: 1
            }}/>
          </div>
          <div className='flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center text-5xl'>
            <Row className='flex align-top hover:bg-gray-300 group h-16 min-w-60'>
              <div className='hidden group-hover:block pt-6'>
                {triangleSymbolPointingRight()}
              </div>
              <div className='p-3 ml-1 scale-95 group-hover:scale-100 transition duration-50 ease-in-out'>
                <Link
                  activeClass="active"
                  to="overview-page"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                > Overview
                </Link>
              </div>
            </Row>
            <Row className='flex align-top hover:bg-gray-300 group h-16 min-w-60'>
              <div className='hidden group-hover:block pt-6'>
                {triangleSymbolPointingRight()}
              </div>
                <div className='p-3 ml-1 scale-95 group-hover:scale-100 transition duration-50 ease-in-out'>
                <Link
                  activeClass="active"
                  to="projects-page"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                > Projects
                </Link>
              </div>
            </Row>
            <Row className='flex align-top hover:bg-gray-300 group h-16 min-w-60'>
              <div className='hidden group-hover:block pt-6'>
                {triangleSymbolPointingRight()}
              </div>
              <div className='p-3 ml-1 scale-95 group-hover:scale-100 transition duration-50 ease-in-out'>
                <Link
                  activeClass="active"
                  to="contact-me"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                > Contact Me
                </Link>
              </div>
            </Row>
          </div>
        </div>

        {/* Overview Page */}
        <div className='flex flex-col font-VT323 w-full h-screen items-center text-black' id='overview-page'>
            <div className='font-VT323 ml-auto mr-auto items-center text-5xl pt-2'>
                <Typewriter className='title' options={{
                    strings: [`About Me`],
                    autoStart: true,
                    loop: true,
                    pauseFor: 10000,
                    delay: 30,
                    deleteSpeed: 35
                }}/>
            </div>
            <div className='flex flex-row items-center w-1/2 ml-auto mr-auto text-3xl mt-36'>
              <p>&nbsp;&nbsp;Hello, my name is Pablo and I'm a third year Computer Science major at San Jose State University. I'm the current president of SJSU's <a href='https://sce.sjsu.edu'>Software and Computer Engineering Society</a>.
                I like experimenting with new tech stacks, going to hackathons, and currently working with . <br /><br />
                &nbsp;&nbsp;This past summer, I was a software engineer intern at NVIDIA working on the DriveOS Build & Release team.
              </p>
            </div>
        </div>

        {/* Projects Page */}
        <div className='flex flex-col font-VT323 w-full h-screen items-center text-black' id='projects-page'>
          <div className='font-VT323 ml-auto mr-auto items-center text-5xl pt-2'>
              <Typewriter className='title' options={{
                  strings: [`Projects`],
                  autoStart: true,
                  loop: true,
                  pauseFor: 10000,
                  delay: 30,
                  deleteSpeed: 35
              }}/>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col relative top-1/2 text-5xl left-16 w-72'>
              {[
                'Cleezy',
                'JotBot',
                'Raspberry Pi Speakers',
                'Groundhog'
              ].map((element, index) => {
                return (
                  <div key={index} className='flex flex-row group hover:bg-gray-300 justify-between mb-5' onClick={() => handleSelect(element)}>
                    <div className=''>
                      { element }
                    </div>
                    <div className='hidden relative group-hover:block mt-auto mb-auto mr-1'>
                      {triangleSymbolPointingLeft()}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='project-card-container min-w-64' id='project-card-container'>
              <div className='win-bar'>
                <div className='win-close-button' onClick={() => setSelectedProject('')}></div>
                <div className='win-full-button'></div>
                <div className='win-min-button'></div>
                <div className='win-upd-button'></div>
                <div className='win-text overflow-hidden'>127.0.0.1:8080/{selectedProject}</div>
              </div>
                {renderCard()}
            </div>
          </div>
        </div>

        {/* Contact Page */}
        <div className='flex flex-col font-VT323 w-full h-screen items-center' id='contact-me'> 
            <div className='font-VT323 ml-auto mr-auto items-center text-5xl pt-2 text-black'>
                <Typewriter className='title' options={{
                    strings: [`Contact Me`],
                    autoStart: true,
                    loop: true,
                    pauseFor: 10000,
                    delay: 30,
                    deleteSpeed: 35
                }}/>
            </div>
            <div className='flex flex-col h-4/5 justify-center'>
              <div className='flex flex-row justify-between'>
                <a href='mailto:pablonavab@gmail.com'>&nbsp;
                  <button className='gmail social-button'></button>
                </a>
                <a href='https://www.github.com/pnavab' target='blank'>&nbsp;
                  <button className='github social-button'></button>
                </a>
                <a className='group' href='https://www.linkedin.com/in/pablonavabarrera' target='blank'>&nbsp;
                  <button className='linkedin social-button'></button>
                  {/* <button className="bg-center bg-cover bg-fixed bg-no-repeat w-16 h-16 float-left ml-5 mr-5 border-none transition duration-200 ease-in-out hover:scale-115 -mt-4"></button> */}
                </a>
              </div>
            </div>
        </div>

      </div>
    )
  }
