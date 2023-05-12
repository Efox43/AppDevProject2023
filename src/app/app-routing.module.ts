import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'table',
    loadChildren: () => import('./Pages/table/table.module').then( m => m.TablePageModule)
  },
  {
    path: 'player-stats',
    loadChildren: () => import('./Pages/player-stats/player-stats.module').then( m => m.PlayerStatsPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./Pages/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'account-details',
    loadChildren: () => import('./Pages/account-details/account-details.module').then( m => m.AccountDetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
