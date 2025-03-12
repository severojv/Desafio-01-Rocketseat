import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header.tsx';
import { NewTask } from './components/NewTask.tsx';
import { InfoTask } from './components/InfoTask.tsx';
function App() {

  return (
    <div>

      <div>
        <Header />
      </div>
      <div className={styles.alienItens}>

        <NewTask />
      </div>


    </div>
  )
}

export default App
