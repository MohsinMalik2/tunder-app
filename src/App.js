import './App.css';
import ActionButtons from './components/ActionButtons';
import Header from './components/Header';
import TunderCards from './components/TunderCards';
function App() {
  return (
    <div className="app">
     {/* header */}
     <Header />
     {/* tunderCard */}
     <TunderCards/>
     {/* ActionButtons */}
     <ActionButtons/>
     {/* footer */}
    </div>
  );
}

export default App;
