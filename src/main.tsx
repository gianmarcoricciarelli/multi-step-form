import App from './App.tsx';
import { SubscriptionContextProvider } from './components/SubscriptionForm/SubscriptionForm.context.tsx';
import './i18n/i18n.ts';
import './index.css';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <SubscriptionContextProvider>
        <App />
    </SubscriptionContextProvider>,
);
