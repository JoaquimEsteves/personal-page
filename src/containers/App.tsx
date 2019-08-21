import React, { lazy, Suspense } from 'react';
import { exampleWork } from './work_experience/worktList';
import Footer from '../components/footer/footer';
import ErrorBoundary from '../components/error_boundaries/error-boundaries';
import Header from '../components/header/header';
import { exampleSkills, About } from './about/about';
import Contact from './contact/contact';

const lineicons_cdn = "https://cdn.lineicons.com/1.0.1/LineIcons.min.css";

const WorkList = lazy(() => import('./work_experience/worktList'));

function new_cdn_load(src: string) {
  return new Promise(function(resolve, reject){
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
