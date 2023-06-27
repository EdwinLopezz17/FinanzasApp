import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IProperty} from "../../models/IProperty";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PropertiesService} from "../../services/properties.service";

@Component({
  selector: 'app-listar-propiedades',
  templateUrl: './listar-propiedades.component.html',
  styleUrls: ['./listar-propiedades.component.css']
})
export class ListarPropiedadesComponent  implements OnInit{

  displayedColumns: string[] = ['imagen', 'lugar', 'precio'];
  dataSource!: MatTableDataSource<IProperty>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _propService:PropertiesService) {


  }

  ngOnInit(): void {
    this._propService.getAllPosts().subscribe({
      next:(val:any)=>{
        this.dataSource = val;

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
