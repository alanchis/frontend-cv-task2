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

  const backInfo = useFetchBackend()


  return (
    backInfo && 
    <>
      <div className="App">
        <h1 >CV</h1>    
        <Image/>
        <Name props = {backInfo} />
        <Address props = {backInfo} />
        <Summary props = {backInfo} />
        <Skills props = {backInfo} />
        <Education props = {backInfo} />
        <Experience props = {backInfo} />
        <Hobbies props = {backInfo} />
      </div>
    </>
  );
}

export default App;
