import { Controller, Get, Query } from '@nestjs/common';
import { Course } from './models/Course';
import { Response } from './models/Response';

const PAGE_SIZE = 5;

@Controller('/courses')
export class CourseController {
  allCourses: Course[];

  constructor() {
    this.allCourses = [
      new Course(1, 'Title 1', 1673465257758),
      new Course(2, 'Title 2', 1673465257758),
      new Course(3, 'Title 3', 1673465285925),
      new Course(4, 'Title 4', 1673465285925),
      new Course(5, 'Title 5', 1673465285925),
      new Course(6, 'Title 6', 1673465285925),
      new Course(7, 'Title 7', 1673468695234),
      new Course(8, 'Title 8', 1673468695234),
      new Course(9, 'Title 9', 1673468695234),
      new Course(10, 'Title 10', 1673468695234),
      new Course(11, 'Title 11', 1673468709636),
      new Course(12, 'Title 12', 1673468709636),
    ];
  }

  @Get()
  getCourses(
    @Query('lastUpdated') lastUpdated: number,
    @Query('pageNumber') pageNumber = 1,
  ): Response {
    console.log('Request made');
    const filteredItems = lastUpdated
      ? this.allCourses.filter((item) => item.lastUpdated >= lastUpdated)
      : this.allCourses;
    const paginatedResults = filteredItems.slice(
      (pageNumber - 1) * PAGE_SIZE,
      pageNumber * PAGE_SIZE,
    );
    const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);
    const nextPageUrl =
      pageNumber < totalPages
        ? `http://localhost:3000/courses?lastUpdated=${lastUpdated}&pageNumber=${++pageNumber}`
        : null;
    return new Response(paginatedResults, nextPageUrl);
  }
}
