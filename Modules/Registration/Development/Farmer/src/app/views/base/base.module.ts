// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CardsComponent } from './cards.component';



import { MemberRequestsComponent } from '../../components/member-requests/member-requests.component';
// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';
import { GroupLandComponent } from '../../components/group-land/group-land.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';

//Custom
import { FertilizersComponent } from '../../components/fertilizers/fertilizers.component';
import { MachineriesComponent } from '../../components/machineries/machineries.component';
import { MarketingComponent } from '../../components/marketing/marketing.component';
import { StorageComponent } from '../../components/storage/storage.component';
import { LoansComponent } from '../../components/loans/loans.component';
import { InsuranceComponent } from '../../insurance/insurance.component';
import { CropInsuranceComponent } from '../../components/crop-insurance/crop-insurance.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
 //   AgmCoreModule,
  AgmCoreModule.forRoot({
   apiKey: 'AIzaSyCAw1DjaQgTvGh_QNhjMrMrIxDnuVf-BZg',
   libraries: ['drawing']
 }),
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    CardsComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    GroupLandComponent,
    MemberRequestsComponent,
    FertilizersComponent,
    MachineriesComponent,
    MarketingComponent,
    StorageComponent,
    LoansComponent,
    InsuranceComponent,
    CropInsuranceComponent,
  ]
})
export class BaseModule { }
