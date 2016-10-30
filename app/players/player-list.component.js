System.register(['angular2/core', './player.service', './player-filter.pipe'], function(exports_1) {
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
    var core_1, player_service_1, player_filter_pipe_1;
    var PlayerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (player_filter_pipe_1_1) {
                player_filter_pipe_1 = player_filter_pipe_1_1;
            }],
        execute: function() {
            PlayerListComponent = (function () {
                function PlayerListComponent(playerService) {
                    this.playerService = playerService;
                    this.pageTitle = 'Player List';
                    this.players = this.playerService.getPlayers();
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.nameSearch = "";
                }
                PlayerListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                PlayerListComponent.prototype.getPlayers = function () {
                    var _this = this;
                    this.playerService.getPlayers()
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
                        pipes: [player_filter_pipe_1.playerFilterPipe],
                        providers: [player_service_1.PlayerService]
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService])
                ], PlayerListComponent);
                return PlayerListComponent;
            })();
            exports_1("PlayerListComponent", PlayerListComponent);
        }
    }
});
//# sourceMappingURL=player-list.component.js.map