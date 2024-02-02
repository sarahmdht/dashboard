import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.uploadFiles(files);
  }

  onFileDropped(event: any) {
    const files: FileList = event.dataTransfer.files;
    this.uploadFiles(files);
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  uploadFiles(files: FileList) {
    // Implement file upload logic here
    console.log(files);
  }

  openFolderDialog() {
    const fileInput = document.querySelector('input[type=file]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }
}
