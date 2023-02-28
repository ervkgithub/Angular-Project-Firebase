import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  ngOnInit() {
    if (!localStorage.getItem('refresh')) { 
      localStorage.setItem('refresh', 'no reload'); 
      setTimeout(function(){;
      location.reload(); 
    },2000)
    } else {
      localStorage.removeItem('refresh') 
    }
  }
}
