import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../components/login/login/login.module';
import { MainpageModule } from '../components/mainpage/mainpage/mainpage.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UtilsModule } from './utils/utils.module';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { PedidosModule } from '../components/pedidos/pedidos/pedidos.module';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';


const dbConfig: DBConfig  = {
  name: 'GerenciaFoodDB',
  version: 1,
  objectStoresMeta: [{
    store: 'usuario',
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'accessToken', keypath: 'accessToken', options: { unique: false } },
      { name: 'expiresIn', keypath: 'expiresIn', options: { unique: false } },
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'email', keypath: 'email', options: { unique: false } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'idAdesao', keypath: 'idAdesao', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    LoginModule,
    PedidosModule,
    MainpageModule,
    HttpClientModule,
    UtilsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
