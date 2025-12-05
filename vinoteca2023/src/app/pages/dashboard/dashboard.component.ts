import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../../shared/nav/nav.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, NavComponent]
})
export class DashboardComponent {
    userLoginOn:boolean=false;

}
