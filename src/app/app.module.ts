import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PrincipalComponent } from './pages/principal/principal.component';
import {CarouselModule} from 'primeng/carousel';
import { VentaProductoComponent } from './pages/venta-producto/venta-producto.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFireModule }  from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { RegistarproductoComponent } from './pages/registarproducto/registarproducto.component';
import { PersonaPerfilComponent } from './pages/persona-perfil/persona-perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PrincipalComponent,
    VentaProductoComponent,
    RegistarproductoComponent,
    PersonaPerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    AngularFireModule,
    CarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
