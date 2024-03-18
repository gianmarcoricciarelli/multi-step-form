import { Form } from './components/Form/Form';
import { Input } from './components/Input/Input';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles['app-container']}>
            <Form>
                <Input
                    id="name"
                    type="text"
                    placeHolder="e.g. Stephen King"
                    labelText="Name"
                />
                <Input
                    id="emailAddress"
                    type="email"
                    placeHolder="e.g. stephenking@lorem.com"
                    labelText="Email Address"
                />
            </Form>
        </div>
    );
}

export default App;
