interface ConvertKit { refresh: () => void; } declare global { interface Window { convertkit?: ConvertKit; } }
