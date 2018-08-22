import { Injectable } from '@angular/core'; 
 
 @Injectable() 
 export class appService {  
    getServiceData(): string { 
       return "Service Output"; 
    } 
 }