import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackApiService {

  constructor(private httpClient: HttpClient) {
  }


  upload(files: File[]) {
    const formData = new FormData();
    // TODO: chain with HTML
    formData.append('userId', 'test');

    files.forEach(file => {
      formData.append('files', file, file.name);
    });

    return this.httpClient.post(environment.apiUrl + "picture", formData);
  }
}
