import { environment } from '@app/environment';

export const EndpointsConstants: Record<string, string> = {
  CATS_IMAGES: `${environment.apiUrl}/images/search?api_key=${environment.apiKey}`,
  CATS_BREEDS: `${environment.apiUrl}/breeds`
}
