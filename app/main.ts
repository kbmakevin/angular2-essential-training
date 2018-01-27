// can import all kind of things e.g. classes, functions, constants, variables, and even JSON file data
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule)