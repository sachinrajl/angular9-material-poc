import { NgModule } from '@angular/core';



// import { MatToolbarModule, MatCardModule, MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatExpansionModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatCheckboxModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatExpansionModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatCheckboxModule
    ]
})
export class MaterialModule { }

