import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes.jsx';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// style
import '@/assets/css/line-awesome.min.css'
import '@/assets/css/fontAwesomePro.css'
import '@/assets/css/animate.css'
import '@/assets/css/slick.css'
import '@/assets/css/backToTop.css'
import '@/assets/scss/style.scss';
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ScrollToTop from "@/lib/ScrollToTop.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop/>
            <AppRoutes/>
        </BrowserRouter>
    </StrictMode>,
)
