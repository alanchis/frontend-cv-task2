import './App.css';
import { Address } from './components/Address';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hobbies } from './components/Hobbies';
import { Image } from './components/Image';
import { Name } from './components/Name';
import { Skills } from './components/Skills';
import { Summary } from './components/Summary';
import { useFetchBackend } from './hooks/useFetchBackend';



function App() {

  return (
    <>
    <div className="App">
      <h1 >CV</h1>    
      <Image/>
    
      <div className='flex-container'>
          <div><Name props = {useFetchBackend()} /></div>
          <div><Address /></div>
      </div>
      {/* <Name props = {useFetchBackend()} /> */}
      {/* <Names props = {useFetchBackend()}  /> */}

    <Summary />
    <Skills/>

    <Education/>
    <Experience/>

    <Hobbies/>

    </div>

    </>
  );
}

export default App;
