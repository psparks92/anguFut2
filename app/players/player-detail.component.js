System.register(['angular2/core', 'angular2/router', './player.service'], function(exports_1) {
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
    var core_1, router_1, player_service_1;
    var PlayerDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            }],
        execute: function() {
            PlayerDetailComponent = (function () {
                function PlayerDetailComponent(_routeParams, _router, playerService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.playerService = playerService;
                    this.pageTitle = 'Player Detail';
                    this.player = this.playerService.getPlayer(this.id);
                    this.d = "fdsa";
                    var id = +this._routeParams.get('id');
                    this.id = +this._routeParams.get('id');
                    this.pageTitle += ": " + id;
                }
                PlayerDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Players']);
                };
                PlayerDetailComponent.prototype.getPlayer = function () {
                    var _this = this;
                    this.playerService.getPlayer(this.id)
                        .subscribe(function (player) { return _this.player = player; }, //Bind to view
                    function (//Bind to view
                        err) {
                        // Log errors if any
                        console.log(err);
                    });
                    ;
                };
                PlayerDetailComponent.prototype.ngOnInit = function () {
                    this.getPlayer();
                };
                PlayerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-player',
                        templateUrl: 'app/players/player-detail.component.html',
                        providers: [player_service_1.PlayerService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, player_service_1.PlayerService])
                ], PlayerDetailComponent);
                return PlayerDetailComponent;
            })();
            exports_1("PlayerDetailComponent", PlayerDetailComponent);
        }
    }
});
//# sourceMappingURL=player-detail.component.js.map