import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {UserDto} from "../../../../../gs-api/src/models/user-dto";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {UserCreateComponent} from "../user-create/user-create.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent  implements  OnInit{
  users$: Observable<UserDto[] | []> = new Observable<UserDto[]|[]>();
  destroy$ = new Subject();
  errorMsg = '';

  constructor(
    private userService: UserService,
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private router: Router
  ) {}

  searchForm = this.fb.group({
    nom: [],
    phone: [],
    email: [],
    type: [],
    login: [],
    order: [],
    type_order: ['id'],
    resultMax: [50],
  });

  ngOnInit(): void {
    this.load();
  }
  load(): void {
    this.users$ = this.findAll();
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }


  openModalUser(): void {
    const modalRef = this.ngbModal.open(UserCreateComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-user' === res) {
        this.load();
      }
    })
  }
  findAll(): Observable<UserDto[] | []> {
    return  this.userService.findAll({
      name: this.searchForm.get('name')?.value ?? undefined,
      phone: this.searchForm.get('phone')?.value ?? undefined,
      email: this.searchForm.get('email')?.value ?? undefined,
      login: this.searchForm.get('login')?.value ?? undefined,
      // active: this.searchForm.get('active')?.value ?? false,
      order: this.searchForm.get('order')?.value ?? false,
      orderType: this.searchForm.value.type_order ?? 'id',
      limit: this.searchForm.get('resultMax')?.value ?? 10
    });
  }
  handleUpdate(event: any): void {
    if(event == 'success') {
      this.load();
    } else {
      this.errorMsg = event;
    }
  }

  handleSearch(event: any): void {
    this.searchForm = event;
    this.load();
  }
//-
}
