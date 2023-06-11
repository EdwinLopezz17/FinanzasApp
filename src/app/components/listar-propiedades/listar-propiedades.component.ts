import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IPropiedades} from "../../models/IPropiedades";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PropiedadesService} from "../../services/propiedades.service";

@Component({
  selector: 'app-listar-propiedades',
  templateUrl: './listar-propiedades.component.html',
  styleUrls: ['./listar-propiedades.component.css']
})
export class ListarPropiedadesComponent  implements AfterViewInit{

  displayedColumns: string[] = ['imagen', 'lugar', 'precio'];
  dataSource: MatTableDataSource<IPropiedades>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private servProp:PropiedadesService) {
    this.dataSource = new MatTableDataSource(this.servProp.getAllPropiedades());
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
