import { Injectable } from '@angular/core';
import * as fileSaver from 'file-saver';
import * as xlsx from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = 'xlsx'; 

@Injectable({
    providedIn: 'root'
})
export class CreateCSV {
    public downloadCSV(jsonArray,sheetName){
        const worksheet: xlsx.WorkSheet = xlsx.utils.json_to_sheet(jsonArray);
        const workbook: xlsx.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
        const excelBuffer: any = xlsx.write(workbook, {bookType: 'xlsx', type: 'array'});
        return this.saveAsExcelFile(excelBuffer, sheetName);
    }

    private  saveAsExcelFile(buffer: any, filename: String){
        const data: Blob = new Blob([buffer],{type: EXCEL_TYPE});
        fileSaver.saveAs(data, filename + '-' + new Date().getTime() + EXCEL_EXTENSION);
    }
}
