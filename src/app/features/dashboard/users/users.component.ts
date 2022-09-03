import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from '../../../core/services/users.service';
import { User } from '../../../core/models/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['image', 'name', 'email', 'role', 'google', 'actions'];
  dataSource!: MatTableDataSource<User>;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public users :User [] = [];

  constructor(
    private userService: UsersService
  ) {
    // Assign the data to the data source for the table to render
    this.loadUsers();
    
    
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
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

  loadUsers(){
    this.loading = true
    this.userService.getUsers()
      .subscribe( (res: any) => {
        this.users = res;
        this.dataSource = new MatTableDataSource(this.users);
        this.loading = false;
      })
  }

  editUser( user: User) {
    console.log(user)
  }

  destroyUser( id: string){
    console.log(id);
  }

}

