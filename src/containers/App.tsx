import React, { lazy, Suspense } from 'react';
import { exampleWork } from './work_experience/worktList';
import Footer from '../components/footer/footer';
import ErrorBoundary from '../components/error_boundaries/error-boundaries';
import Header from '../components/header/header';
import { exampleSkills, About } from './about/about';
import Contact from './contact/contact';


const WorkList = lazy(() => import('./work_experience/worktList'));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <Header />
          <About skills={exampleSkills.skills} />
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
              <WorkList works={exampleWork.works} />
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
