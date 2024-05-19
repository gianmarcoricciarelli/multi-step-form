import App from './App.tsx';
import { FormDataContextProvider } from './contexts/FormDataContext.tsx';
import { FormStepsValidatorsContextProvider } from './contexts/FormStepsValidatorsContext.tsx';
import { SubscriptionContextProvider } from './contexts/SubscriptionForm.context.tsx';
import './i18n/i18n.ts';
import './index.css';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <SubscriptionContextProvider>
        <FormStepsValidatorsContextProvider>
            <FormDataContextProvider>
                <App />
            </FormDataContextProvider>
        </FormStepsValidatorsContextProvider>
    </SubscriptionContextProvider>,
);
