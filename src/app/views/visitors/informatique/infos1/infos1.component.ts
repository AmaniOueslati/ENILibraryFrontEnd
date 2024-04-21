import { Component } from '@angular/core';
import { Infos1ServiceService } from 'src/app/services/infos1-service.service';
import { HttpResponse , HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-infos1',
  templateUrl: './infos1.component.html',
  styleUrls: ['./infos1.component.css']
})
export class Infos1Component {
  numsem : number= 7 ;
  idsc:number=1; 

  matieres: any[] = [];

  constructor(private dataService: Infos1ServiceService) { }

  ngOnInit(): void {
    this.getAllSubjects();
  }

  getAllSubjects() {
    this.dataService.getAllSubjectsInfos1(this.numsem,this.idsc).subscribe(
      (data: any) => {
        this.matieres = data;
        console.log(data); 
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



  downloadFile(fileId: number): void {
    this.dataService.downloadFile(fileId).subscribe({
      next: (response: HttpResponse<Blob>) => {
        const fileName = "downloaded_file";
  
        if (response.body) {
          const contentType = response.headers.get("Content-Type") || undefined;
          const blob = new Blob([response.body], { type: contentType });
  
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = fileName;
  
          link.click();
  
          window.URL.revokeObjectURL(link.href);
          link.remove();
        } else {
          console.error("Error: No response body received");
        }
      },
      error: (error: HttpErrorResponse) => {
       
        console.error("File download failed:", error);
        if (error.error instanceof Blob && error.error.type === "application/json") {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            const errorMessage = JSON.parse(event.target.result);
            console.error("Server error message:", errorMessage);
          };
          reader.readAsText(error.error);
        }
      },
    });
  }
  
  

  
  
  }
  
  

