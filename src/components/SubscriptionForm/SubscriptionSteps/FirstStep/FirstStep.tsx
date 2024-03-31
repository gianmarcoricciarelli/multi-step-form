import { Form } from '../../../Form/Form';
import { Input } from '../../../Input/Input';
import { Label } from '../../../Label/Label';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const FirstStep: FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <div>
                <Label size="big" color="marine-blue" fontStyle="bold">
                    {t('FIRST_STEP.TITLE')}
                </Label>
                <Label color="cool_gray">{t('FIRST_STEP.SUBTITLE')}</Label>
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
        </>
    );
};
