import { Form } from './components/Form/Form';
import { Input } from './components/Input/Input';
import { Label } from './components/Label/Label';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles['app-container']}>
            <Label size="big" color="marine-blue">
                This is a string
            </Label>
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
                <Input
                    id="phoneNumber"
                    type="tel"
                    placeHolder="e.g. +1 234 567 890"
                    labelText="Phone"
                />
            </Form>
        </div>
    );
}

export default App;
