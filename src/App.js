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


        <div className="container">
          <div className="row">
            <div className="col-sm-9"> <Name props={backInfo} /> <Address props={backInfo} /></div>
            <div className="col-sm-3"><Image /></div>

          </div>
        </div>

        <br />

        <div className="container">
          <div className="row">
            <div className="col-sm-12"> <Summary props={backInfo} /></div>
          </div>
        </div>

        <br />



        <div className="container">
          <div className="row">
            <div className="col-sm-6"><Education props={backInfo} /> <Skills props={backInfo} /></div>
            <div className="col-sm-6"><Experience props={backInfo} /></div>
            <hr />
          </div>
        </div>



        <div className="container">
          <div className="row">

            <div className="col-sm-6"><Hobbies props={backInfo} /></div>
            <hr />
          </div>
        </div>

        {/* <Image />
        <Name props={backInfo} />
        <Address props={backInfo} />
        <Summary props={backInfo} />
        <Skills props={backInfo} />
        <Education props={backInfo} />
        <Experience props={backInfo} />
        <Hobbies props={backInfo} /> */}
      </div>
    </>
  );
}

export default App;
