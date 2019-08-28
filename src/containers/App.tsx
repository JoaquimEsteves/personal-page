import React, { lazy, Suspense } from 'react';
import { exampleWork } from './work_experience/worktList';
import Footer from '../components/footer/footer';
import ErrorBoundary from '../components/error_boundaries/error-boundaries';
import Header from '../components/header/header';
import { exampleSkills, About } from './about/about';
import Contact from './contact/contact';
import Particles, { IParticlesParams } from "react-particles-js";


const lineicons_cdn = "https://cdn.lineicons.com/1.0.1/LineIcons.min.css";

const WorkList = lazy(() => import('./work_experience/worktList'));

function new_cdn_load(src: string) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = src;
    link.addEventListener('load', function () {
      resolve();
    });
    link.addEventListener('error', function (e) {
      reject(e);
    });
    document.head.appendChild(link);
  })
};


const pretty_particles: IParticlesParams = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "img/github.svg",
        "width": 1000,
        "height": 1000
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

class App extends React.Component {
  componentDidMount() {
    // Promise Interface and componentDidMount ensure load only once.
    new_cdn_load(lineicons_cdn);
  }

  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <Header />
          <Particles className="pretty_particles" params={pretty_particles} />
          <About skills={exampleSkills.skills} />
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
              <WorkList {...exampleWork} />
            </Suspense>
          </ErrorBoundary>
          <Contact />
          <Footer />
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
