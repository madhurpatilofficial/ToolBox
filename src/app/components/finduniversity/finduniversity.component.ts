// finduniversity.component.ts
import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../../services/university.service';
import { University } from '../../constants/university.model';

@Component({
  selector: 'app-finduniversity',
  templateUrl: './finduniversity.component.html',
  styleUrls: ['./finduniversity.component.css'],
})
export class FinduniversityComponent implements OnInit {
  universities: University[] = [];
  selectedUniversity: University | null = null;
  selectedUniversityName = '';
  filteredUniversities: University[] = [];

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.universityService.getUniversities().subscribe(
      (universities) => {
        this.universities = [
          ...universities,
          {
            name: 'Dhole Patil College of Engineering, Pune',
            country: 'India',
            web_pages: ['http://dpcoepune.edu.in'],
            description: 'Engineering College in Pune',
          },
        ];
      },
      (error) => {
        console.error('Error fetching universities:', error);
      }
    );
  }

  showAll: boolean = false;

  showAllUniversities(): void {
    this.showAll = !this.showAll;
  }

  onSearchChange(searchTerm: string): void {
    this.filteredUniversities = this.universities.filter((u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  onUniversitySelected(universityName: string): void {
    this.selectedUniversity = this.universities.find((u) => u.name === universityName) || null;
    this.selectedUniversityName = ''; // Clear the search input
    this.filteredUniversities = []; // Clear the filtered list
  }
}
