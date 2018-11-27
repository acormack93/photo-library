import { Component, OnInit } from '@angular/core';
import { PhotoServiceService, PhotoItem } from 'src/app/photo-service.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterPhotos'})
export class FilterPhotosPipe implements PipeTransform {
  transform(value: PhotoItem[], searchString: string): PhotoItem[] {
    if (searchString) {
      return value.filter( photo => photo.title.includes(searchString));
    } else {
    return value;
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'photo-lib';
  photos$: Observable<PhotoItem[]>;
  pageNumber$: BehaviorSubject<number> = new BehaviorSubject(1);
  pageSize$: BehaviorSubject<number> = new BehaviorSubject(10);
  clientSearch: string;

  constructor(
    private photoService: PhotoServiceService
  ) {}

  ngOnInit() {
    const combined = combineLatest(this.pageNumber$, this.pageSize$);
    const subscribe = combined.subscribe(
      ([pageNumber, pageSize]) => {
        this.photos$ = this.photoService.queryApi(pageNumber, pageSize);
      }
    );
  }

  changePageNumber(delta: number) {
    this.pageNumber$.next(
      ((this.pageNumber$.getValue() + delta) < 1) ? 1 : this.pageNumber$.getValue() + delta
    );
  }
  changePageSize(size: number) {
    this.pageSize$.next(size);
  }

  clearInput(): void {
    this.clientSearch = '';
  }
  openFullPhoto(url: string): void {
    window.open(url, '_blank');
  }
}
