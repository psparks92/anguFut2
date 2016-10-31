System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var playerFilterPipe, KeysPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            playerFilterPipe = (function () {
                function playerFilterPipe() {
                }
                playerFilterPipe.prototype.transform = function (value, args) {
                    var filter = args[0] ? args[0].toLocaleLowerCase() : null;
                    return filter ? value.filter(function (player) {
                        return player.firstName.toLocaleLowerCase().indexOf(filter) != -1
                            || player.lastName.toLocaleLowerCase().indexOf(filter) != -1;
                    }) : value;
                };
                playerFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'playerFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], playerFilterPipe);
                return playerFilterPipe;
            }());
            exports_1("playerFilterPipe", playerFilterPipe);
            KeysPipe = (function () {
                function KeysPipe() {
                }
                KeysPipe.prototype.transform = function (value, args) {
                    var keys = Object.keys(value), data = [];
                    keys.forEach(function (key) {
                        data.push(value[key]);
                    });
                    return data;
                };
                KeysPipe = __decorate([
                    core_1.Pipe({ name: 'keys' }), 
                    __metadata('design:paramtypes', [])
                ], KeysPipe);
                return KeysPipe;
            }());
            exports_1("KeysPipe", KeysPipe);
        }
    }
});
//# sourceMappingURL=player-filter.pipe.js.map