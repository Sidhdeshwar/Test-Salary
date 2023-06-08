import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoClass } from '../task';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor(public router: Router)
  {

  }

  next(form:any)
  {
      let a = new InfoClass(form.value.fullName,form.value.basicSalary,form.value.address)
     localStorage.setItem('salary', JSON.stringify(a)) ;
    this.router.navigateByUrl('/salary');
  }
}

