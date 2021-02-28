interface GtmProps {
  event: string;
  label: string;
  category?: string;
}

export function gtm(props: GtmProps): void {
  if (window.dataLayer) {
    window.dataLayer.push(props);
  }
}
