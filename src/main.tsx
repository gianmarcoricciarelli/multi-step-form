import App from './App.tsx';
import { FormDataContextProvider } from './contexts/FormDataContext.tsx';
import { FormStaticDataContextProvider } from './contexts/FormStaticDataContext.tsx';
import { FormStepsValidatorsContextProvider } from './contexts/FormStepsValidatorsContext.tsx';
import { SubscriptionContextProvider } from './contexts/SubscriptionFormContext.tsx';
import './i18n/i18n.ts';
import './index.css';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <FormStaticDataContextProvider>
        <SubscriptionContextProvider>
            <FormStepsValidatorsContextProvider>
                <FormDataContextProvider>
                    <App />
                </FormDataContextProvider>
            </FormStepsValidatorsContextProvider>
        </SubscriptionContextProvider>
    </FormStaticDataContextProvider>,
);
