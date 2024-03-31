import styles from './App.module.scss';
import { SubscriptionForm } from './components/SubscriptionForm/SubscriptionForm';

function App() {
    return (
        <div className={styles['app-container']}>
            <SubscriptionForm />
        </div>
    );
}

export default App;
