import styles from './App.module.scss';
import { Input } from './components/Input/Input';

function App() {
    return (
        <div className={styles['app-container']}>
            <Input
                id="myInput"
                type="text"
                placeHolder="e.g. Stephen King"
                labelText="Label Text"
            />
        </div>
    );
}

export default App;
