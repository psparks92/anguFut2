System.register(["angular2/core", "./player.service", "./player-filter.pipe"], function (exports_1, context_1) {
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
    var core_1, player_service_1, player_filter_pipe_1, PlayerListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (player_filter_pipe_1_1) {
                player_filter_pipe_1 = player_filter_pipe_1_1;
            }
        ],
        execute: function () {
            PlayerListComponent = (function () {
                function PlayerListComponent(playerService) {
                    this.playerService = playerService;
                    this.pageTitle = 'Player List';
                    this.players = this.playerService.getSmallPlayers();
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.nameSearch = "";
                    this.clubSearch = "";
                    this.clubName = "";
                    this.nationSearch = "";
                    this.nationName = "";
                    this.leagueSearch = "";
                    this.leagueName = "";
                }
                PlayerListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                PlayerListComponent.prototype.getPlayers = function () {
                    var _this = this;
                    this.playerService.getSmallPlayers()
                        .subscribe(function (players) { return _this.players = players; }, //Bind to view
                    function (//Bind to view
                        err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                PlayerListComponent.prototype.ngOnInit = function () {
                    this.getPlayers();
                };
                PlayerListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-players',
                        templateUrl: 'app/players/player-list.component.html',
                        styleUrls: ['app/players/player-list.component.css'],
                        pipes: [player_filter_pipe_1.playerFilterPipe, player_filter_pipe_1.clubPlayerFilterPipe, player_filter_pipe_1.leaguePlayerFilterPipe, player_filter_pipe_1.nationPlayerFilterPipe],
                        providers: [player_service_1.PlayerService]
                    }),
                    __metadata("design:paramtypes", [player_service_1.PlayerService])
                ], PlayerListComponent);
                return PlayerListComponent;
            }());
            exports_1("PlayerListComponent", PlayerListComponent);
        }
    };
});
//# sourceMappingURL=player-list.component.js.map