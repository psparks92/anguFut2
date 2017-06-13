System.register(["angular2/core", "./players/player-list.component", "./players/player-detail.component", "angular2/http", "angular2/router", "./home/welcome.component", "rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, player_list_component_1, player_detail_component_1, http_1, router_1, welcome_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_list_component_1_1) {
                player_list_component_1 = player_list_component_1_1;
            },
            function (player_detail_component_1_1) {
                player_detail_component_1 = player_detail_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Peter\'s FUT DB';
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'pm-app',
                    template: "\n    <div>\n        <nav class='navbar navbar-default'>\n\t   <div class='container-fluid'>\n\t\t<a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n\t\t    <li><a [routerLink]=\"['Welcome']\" >Home</a></li>\n\t\t    <li><a [routerLink]=\"['Players']\">Player List</a></li>\n\t\t</ul>\n\t    </div>\n\t</nav>\n\t<div class='container'>\n\t    <router-outlet></router-outlet>\n        </div>\n    <div>\n\t",
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                }),
                router_1.RouteConfig([
                    { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                    { path: '/players', name: 'Players', component: player_list_component_1.PlayerListComponent },
                    { path: '/player/:id', name: 'PlayerDetail', component: player_detail_component_1.PlayerDetailComponent }
                ])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map