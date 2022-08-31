import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from '../../../core/services/users.service';
import { User } from '../../../core/models/user.model';

export interface UserData {
  avatar: string;
  name: string;
  email: string;
  role: string;
  auth: string;
  actions: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['avatar', 'name', 'email', 'role', 'auth', 'actions'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public users :User [] = [];

  constructor(
    private userService: UsersService
  ) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.loadUsers();
    this.dataSource = new MatTableDataSource(this.users);
    
  }
  ngOnInit(): void {
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
    this.userService.getUsers()
      .subscribe( (res: any) => {
        this.users = res;
        console.log(this.users)
      })
  }

}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
  const email = 
    NAMES[Math.round(Math.random() * (NAMES.length -1 ))] +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '@correo.com'
  return {
    avatar: '',
    name,
    email,
    role :'USER_ROLE',
    auth: 'EMAIL',
    actions: 'EDIT',
  };
}