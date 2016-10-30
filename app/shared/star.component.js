System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var StarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StarComponent = (function () {
                function StarComponent() {
                    this.notify = new core_1.EventEmitter();
                }
                StarComponent.prototype.ngOnChanges = function () {
                    this.starWidth = this.rating * 86 / 5;
                };
                StarComponent.prototype.OnClick = function () {
                    this.notify.emit('clicked!');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StarComponent.prototype, "rating");
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], StarComponent.prototype, "notify");
                StarComponent = __decorate([
                    core_1.Component({
                        selector: 'ai-star',
                        templateUrl: 'app/shared/star.component.html',
                        styleUrls: ['app/shared/star.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], StarComponent);
                return StarComponent;
            })();
            exports_1("StarComponent", StarComponent);
        }
    }
});
//# sourceMappingURL=star.component.js.map