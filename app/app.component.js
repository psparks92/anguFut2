System.register(['angular2/core', './players/player-list.component', './players/player-detail.component', 'angular2/http', 'angular2/router', './home/welcome.component', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, player_list_component_1, player_detail_component_1, http_1, router_1, welcome_component_1;
    var AppComponent;
    return {
        setters:[
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
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Peter\'s FUT DB';
                }
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
                        { path: '/player/:id', name: 'ProductDetail', component: player_detail_component_1.PlayerDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map