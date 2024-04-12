import { InputType } from '../../../../types/enums';
import { Form } from './Form/Form';
import { Input } from './Input/Input';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const FirstStep: FC = () => {
    const { t } = useTranslation('input');

    return (
        <>
            <Form>
                <Input
                    id="name"
                    type={InputType.Text}
                    isRequired
                    placeHolder={t('NAME_PLACEHOLDER')}
                    labelText={t('NAME_TEXT')}
                />
                <Input
                    id="emailAddress"
                    type={InputType.Email}
                    isRequired
                    placeHolder={t('EMAIL_PLACEHOLDER')}
                    labelText={t('EMAIL_TEXT')}
                />
                <Input
                    id="phoneNumber"
                    type={InputType.Telephone}
                    isRequired
                    placeHolder={t('PHONE_PLACEHOLDER')}
                    labelText={t('PHONE_TEXT')}
                />
            </Form>
        </>
    );
};
