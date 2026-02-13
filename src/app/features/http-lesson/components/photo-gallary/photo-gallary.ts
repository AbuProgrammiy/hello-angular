import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Image } from 'primeng/image';
import { Tooltip } from "primeng/tooltip";
import { forkJoin } from 'rxjs';
import { CatImageModel } from './models/cat-image.model';
import { CatService } from './services/cat.service';

@Component({
  selector: 'app-photo-gallary',
  imports: [Tooltip, Image],
  templateUrl: './photo-gallary.html',
  styleUrl: './photo-gallary.scss',
})
export class PhotoGallary implements OnInit {
  private readonly catService = inject(CatService);
  private readonly destroyRef = inject(DestroyRef);
  protected cats = signal<CatImageModel[]>([]);

  ngOnInit() {
    const requests = Array.from({ length: 10 }, () => this.catService.getCat());

    forkJoin(requests)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(cats => this.cats.set(cats));
  }
}
