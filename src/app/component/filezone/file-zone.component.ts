import { Component } from '@angular/core';
import {NgxFileDropEntry} from "ngx-file-drop";
import {BackApiService} from "../../service/back-api.service";

@Component({
  selector: 'app-filezone',
  templateUrl: './file-zone.component.html',
  styleUrls: ['./file-zone.component.css']
})


export class FileZoneComponent {


  constructor(private backApiService: BackApiService) {
  }
  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
           // You could upload it like this:
           const formData = new FormData()
           formData.append('logo', file, relativePath)

           // Headers
           const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

           this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
           .subscribe(data => {
            // Sanitized logo returned from backend
          })
           **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  fileOver(event: any){
    console.log(event);
  }

  fileLeave(event: any){
    console.log(event);
  }

  openUploadPopup() {
  if (this.files && this.files.length > 0) {
    const filesToUpload: File[] = [];

    this.files.forEach(fileEntry => {
      // Vérifie si fileEntry est de type NgxFileDropEntry
      if (fileEntry.fileEntry.isFile) {
        const file = fileEntry.fileEntry as FileSystemFileEntry;
        file.file((realFile: File) => {
          // Ajoutez le fichier réel à la liste des fichiers à télécharger
          filesToUpload.push(realFile);

          // Vérifie si tous les fichiers ont été ajoutés à la liste
          if (filesToUpload.length === this.files.length) {
            // Appellez la méthode d'upload avec les fichiers
            this.backApiService.upload(filesToUpload).subscribe(
              response => {
                console.log('Upload successful', response);
                // Faites quelque chose avec la réponse du backend si nécessaire
              },
              error => {
                console.error('Error uploading files', error);
                // Faites quelque chose en cas d'erreur
              }
            );
          }
        });
      }
    });
  } else {
    console.log('Aucun fichier à télécharger.');
    // Affichez un message d'erreur ou effectuez une action en cas d'absence de fichiers à télécharger.
  }
}


}
