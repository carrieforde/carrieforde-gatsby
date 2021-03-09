export interface Location {
  hash?: string;
  host: string;
  hostname: string;
  href: string;
  key: string;
  origin: string;
  pathname: string;
  port: string;
  protocol: 'http:' | 'https:';
  search?: string;
  state?: any;
}
