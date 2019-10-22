import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { EditorComponent } from './editor/editor.component';
import { ProductosComponent } from './productos/productos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { QuillModule } from 'ngx-quill'

import { VgCoreModule} from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule} from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';







@NgModule({
  declarations: [CarouselComponent, VideoComponent, ProductosComponent, EditorComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    QuillModule,
    ReactiveFormsModule   
    
  ]
})
export class ComponentsModule { }
