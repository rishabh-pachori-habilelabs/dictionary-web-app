import { Injectable } from '@angular/core';
import { QueryStringParameters } from '../classes/query-string-parameters';
import { UrlBuilder } from '../classes/url-builder';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor(
    private constants: Constants
  ) { }

  public getDataBySearch = (search: string): string => this.createUrlWithPathVariable(this.constants.API_ACTION, [search]);
  
  public getDataBySearch2(search: string): string {
    return this.createUrlWithQueryParameters(this.constants.API_ACTION, (qs: QueryStringParameters) => qs.push('search', search));
  }

  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(action: string, queryStringHandler?: (queryStringParameters: QueryStringParameters) => void): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(this.constants.API_ENDPOINT, action);

    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }


  // URL WITH PATH VARIABLES
  private createUrlWithPathVariable(action: string, pathVariable: any[] = []): string {
    
    let encodePathVariableUrl: string = '';

    for(const paths of pathVariable) {
      if(paths !== null) {
        encodePathVariableUrl += `/${encodeURIComponent(paths.toString())}`
      }
    }

    const urlBuilder: UrlBuilder = new UrlBuilder(this.constants.API_ENDPOINT, `${action}${encodePathVariableUrl}`);
    return urlBuilder.toString();
  }
}
