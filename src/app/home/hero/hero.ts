import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  countries = 0;
  institutions = 0;
  activeUsers = 0;

  private readonly targetCountries = 100;
  private readonly targetInstitutions = 500;
  private readonly targetActiveUsers = 50000;

  get activeUsersText() {
    if (this.activeUsers >= 1000) {
      return `${Math.round(this.activeUsers / 1000)}K`;
    }
    return `${this.activeUsers}`;
  }

  ngOnInit() {
    this.animateCounters();
  }

  private animateCounters() {
    const duration = 1600;
    const startTime = performance.now();

    const animationFrame = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      this.countries = Math.floor(this.targetCountries * progress);
      this.institutions = Math.floor(this.targetInstitutions * progress);
      this.activeUsers = Math.floor(this.targetActiveUsers * progress);

      if (progress < 1) {
        requestAnimationFrame(animationFrame);
      } else {
        this.countries = this.targetCountries;
        this.institutions = this.targetInstitutions;
        this.activeUsers = this.targetActiveUsers;
      }
    };

    requestAnimationFrame(animationFrame);
  }
}
