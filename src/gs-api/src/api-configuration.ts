/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://localhost:8098';
  // rootUrl: string = '${SERVER_API_URL}';

}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
