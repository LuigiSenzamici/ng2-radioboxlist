# Radio Box List
Angular 2 radiobox list component
## Getting Started
```bash
npm install ng2-radioboxlist --save
```
## Checking before using
this component assume that run under Angular2 application, so has this implicit dependency:
```javascript
    "@angular/common": "^4.4.0-RC.0",
    "@angular/core": "4.4.0-RC.0",
    "rxjs": "5.4.3"
```
## Simple Use
import
```javascript
//app.module.ts file
....
import { RadioBoxList } from 'ng2-radioboxlist/radioboxlist.js';
@NgModule({
  declarations: [
    AppComponent,
    RadioBoxList
  ],
  ....

//app.component.ts file
 export class AppComponent {
  title = 'app';
  listItemToPass:any[] = [
    {id:1, color:"white"}, 
    {id:2, color:"red"}, 
    {id:3, color:"blue"},
    {id:4, color:"green"}
  ];
  checkboxStyles:string[] = ["container:greenClass, shadow", "title:whiteClass"];
  itemSelectedManager(event){
    console.log("selected item -> ", event);
  }
}

```
insert selector
```html
<!-- app.component.html file -->
<checkbox-list 
               [title]="'choose a color'"
               [list]="listItemToPass" 
               [id] ="'id'"
               [value] = "'color'"
               [styles] = "checkboxStyles"
               (selected) = "itemSelectedManager($event)"
               ></checkbox-list>
```
## Styling
you can style by applying class to container, title, input and label passing a string or an array of string to [styles] input property.
String format is: "<container|title|input|label>:<classname1>, <classname2>, ..., <classnameN>"
Array format simply is an array of these strings.
in code sample 'checkboxStyles' is so declared:
```javascript
    checkboxStyles:string[] = ["container:greenClass, shadow", "title:whiteClass"];
```

## Screenshots
### example of how it is rendered
![Executing](http://LuigiSenzamici.com/Content/Images/Common/radioboxlist/radioboxlist-scr.PNG)

### example of reading listSelected property
![data reading](http://LuigiSenzamici.com/Content/Images/Common/radioboxlist/radioboxlist-result.PNG)

## Theming
it's also possible set a theme [dark or light] using input property theme:
```html
<!-- app.component.html file -->
<checkbox-list 
               [title]="'choose a color'"
               [list]="listItemToPass" 
               [id] ="'id'"
               [value] = "'color'"
               [theme] = "'dark'" 
               (listSelected) = "itemSelectedManager($event)"
               ></checkbox-list>
```
For using css file theme you have to set styles property in .angular-cli.json like so:
```javascript
      "styles": [
        "styles.css",
        "../node_modules/ng2-radioboxlist/theme/radioboxlist.dark.css",
        "../node_modules/ng2-radioboxlist/theme/radioboxlist.light.css"
      ],
```
[IMPORTANT] if you are under ng serve command you have to stop and repeat command (.angular-cli.json isn't watch by angular compiler)

### Dark Theme screeshoot
![Dark Theme screeshoot](http://LuigiSenzamici.com/Content/Images/Common/radioboxlist/checkboxlist-dark-theme.PNG)

### Light Theme screenshoot
![Light Theme screenshoot](http://LuigiSenzamici.com/Content/Images/Common/radioboxlist/checkboxlist-light-theme.PNG)

## Built With
Typescript

Stylus
## Author

[Luigi Senzamici](http://luigisenzamici.com)
### luigisenzamici@gmail.com

## License

This project is licensed under the MIT License 



