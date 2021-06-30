import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchForm = this.formBuilder.group({
    search: this.route.snapshot.params.title,
  });

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let header = <HTMLElement>document.getElementById("header");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  constructor(public route: ActivatedRoute, public router: Router, public formBuilder: FormBuilder) {
    
  }

  search() {
    this.router.navigate(['/'], { queryParams: { title: this.searchForm.value.search } });
  }


};

