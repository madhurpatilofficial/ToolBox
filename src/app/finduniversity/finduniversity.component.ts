import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { University } from '../university.model';

@Component({
  selector: 'app-finduniversity',
  templateUrl: './finduniversity.component.html',
  styleUrls: ['./finduniversity.component.css'],
})
export class FinduniversityComponent implements OnInit {
  universities: University[] = [];
  selectedUniversity: University | null = null;

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.universityService.getUniversities().subscribe(
      (universities) => {
        this.universities = universities;
      },
      (error) => {
        console.error('Error fetching universities:', error);
      }
    );
  }

  onUniversitySelected(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const universityName = target.value;
    this.selectedUniversity = this.universities.find(u => u.name === universityName) || null;
  }
}
