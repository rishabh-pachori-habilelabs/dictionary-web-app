import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class Constants {
    public readonly API_ENDPOINT: string = 'https://api.dictionaryapi.dev/api';
    public readonly API_ACTION: string = 'v2/entries/en'
}