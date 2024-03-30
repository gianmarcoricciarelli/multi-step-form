import styles from './App.module.scss';
import { Form } from './components/Form/Form';
import { Input } from './components/Input/Input';
import { Label } from './components/Label/Label';
import { SubscriptionForm } from './components/SubscriptionForm/SubscriptionForm';

function App() {
    return (
        <div className={styles['app-container']}>
            <SubscriptionForm>
                <div>
                    <Label size="big" color="marine-blue" fontStyle="bold">
                        Personal info
                    </Label>
                    <Label color="cool_gray">
                        Please provide your name, email address and phone number
                    </Label>
                </div>
                <Form>
                    <Input
                        id="name"
                        type="text"
                        isRequired
                        placeHolder="e.g. Stephen King"
                        labelText="Name"
                    />
                    <Input
                        id="emailAddress"
                        type="email"
                        isRequired
                        placeHolder="e.g. stephenking@lorem.com"
                        labelText="Email Address"
                    />
                    <Input
                        id="phoneNumber"
                        type="tel"
                        isRequired
                        placeHolder="e.g. +1 234 567 890"
                        labelText="Phone Number"
                    />
                </Form>
            </SubscriptionForm>
        </div>
    );
}

export default App;
