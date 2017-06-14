System.register(["angular2/core", "angular2/router", "./player.service", "./player-filter.pipe"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, player_service_1, player_filter_pipe_1, PlayerCardComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (player_filter_pipe_1_1) {
                player_filter_pipe_1 = player_filter_pipe_1_1;
            }
        ],
        execute: function () {
            PlayerCardComponent = (function () {
                function PlayerCardComponent(_routeParams, _router, _playerService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._playerService = _playerService;
                    this.player = this._playerService.getPlayer(this.id);
                    var id = +this._routeParams.get('id');
                    this.id = +this._routeParams.get('id');
                }
                PlayerCardComponent.prototype.onBack = function () {
                    this._router.navigate(['Players']);
                };
                PlayerCardComponent.prototype.getPlayer = function () {
                    var _this = this;
                    this._playerService.getPlayer(this.id)
                        .subscribe(function (player) { return _this.player = player; }, //Bind to view
                    function (//Bind to view
                        err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                PlayerCardComponent.prototype.ngOnInit = function () {
                    this.getPlayer();
                };
                PlayerCardComponent = __decorate([
                    core_1.Component({
                        selector: 'card-component',
                        templateUrl: 'app/players/player-card.component.html',
                        providers: [player_service_1.PlayerService],
                        pipes: [player_filter_pipe_1.KeysPipe, player_filter_pipe_1.AttributesPipe]
                    }),
                    __metadata("design:paramtypes", [router_1.RouteParams,
                        router_1.Router,
                        player_service_1.PlayerService])
                ], PlayerCardComponent);
                return PlayerCardComponent;
            }());
            exports_1("PlayerCardComponent", PlayerCardComponent);
        }
    };
});
//# sourceMappingURL=player-card.component.js.map