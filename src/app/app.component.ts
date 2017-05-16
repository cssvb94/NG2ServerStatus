import {Component, OnInit} from '@angular/core';

// import 'bootstrap/dist/css/bootstrap.css';
// import "font-awesome/less/font-awesome.less"
import "font-awesome/css/font-awesome.css"
import '../css/main.css';

// import '../css/bootstrap/less/bootstrap.less';
// import '../css/theme/bootswatch.less';
// import '../css/theme/variables.less';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
