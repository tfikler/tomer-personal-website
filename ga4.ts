import ReactGA from 'react-ga4';

const initGA = (): void => {
    ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID); // Replace with your Measurement ID
};

const logPageView = (): void => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

const logEvent = (category: string = '', action: string = ''): void => {
    if (category && action) {
        ReactGA.event({ category, action });
    }
};

export { initGA, logPageView, logEvent };