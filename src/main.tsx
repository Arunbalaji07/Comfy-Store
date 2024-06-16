import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Toaster } from '@/components/ui/toaster'

import { Provider } from 'react-redux'
import { store } from './store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>,
)
