declare module "path" {
  export function normalize (p: string): string;
  export function join (...paths: any[]): string;
}

declare module "axios";