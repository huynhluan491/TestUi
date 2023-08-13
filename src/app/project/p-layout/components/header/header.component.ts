import { Component, OnInit } from '@angular/core';
import { navItem, navItems } from 'src/app/project/p-common/constant/navigation.constant';
import { LayoutService } from '../../shared/services/layout-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  navItems: navItem[] = navItems;
  isLayoutDefault: boolean = true;

  constructor(private layoutService: LayoutService, private router: Router) {}

  ngOnInit(): void {
    this.isLayoutDefault = this.layoutService.isDefaultLayout;
  }

  onLoginNavigate(): void {
    this.layoutService.isDefaultLayout = false;
    this.router.navigate(['/login']);
  }

}
