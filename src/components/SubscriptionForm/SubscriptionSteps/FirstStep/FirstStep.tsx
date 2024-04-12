import { InputType } from '../../../../types/enums';
import { Form } from './Form/Form';
import { Input } from './Input/Input';
import { FC } from 'react';

export const FirstStep: FC = () => {
    return (
        <>
            <Form>
                <Input
                    id="name"
                    type={InputType.Text}
                    isRequired
                    placeHolder="e.g. Stephen King"
                    labelText="Name"
                />
                <Input
                    id="emailAddress"
                    type={InputType.Email}
                    isRequired
                    placeHolder="e.g. stephenking@lorem.com"
                    labelText="Email Address"
                />
                <Input
                    id="phoneNumber"
                    type={InputType.Telephone}
                    isRequired
                    placeHolder="e.g. +1 234 567 890"
                    labelText="Phone Number"
                />
            </Form>
        </>
    );
};
