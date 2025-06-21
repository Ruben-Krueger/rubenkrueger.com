declare global {
  interface Window {
    gtag?: (
      event: 'event',
      eventName: string,
      eventParams: { [key: string]: string | number | boolean }
    ) => void;
  }
}

export function reportWebVitals({
  id,
  name,
  value,
}: {
  id: string;
  name: string;
  value: number;
}) {
  if (!window.gtag) return;

  window.gtag('event', name, {
    event_category: 'web-vitals',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate
  });
}
