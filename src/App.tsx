import styles from './App.module.scss';
import { Form } from './components/Form/Form';
import { Input } from './components/Input/Input';
import { Label } from './components/Label/Label';
import { SubscriptionForm } from './components/SubscriptionForm/SubscriptionForm';

function App() {
    return (
        <div className={styles['app-container']}>
            <SubscriptionForm>
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
            </SubscriptionForm>
        </div>
    );
}

export default App;
