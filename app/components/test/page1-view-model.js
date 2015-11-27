var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observableModule = require("data/observable");
var resourcesModule = require("../../resources");
var Page1ViewModel = (function (_super) {
    __extends(Page1ViewModel, _super);
    function Page1ViewModel() {
        _super.call(this);
        this.item = { Title: "Alabala" };
    }
    Object.defineProperty(Page1ViewModel.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (value) {
            if (this._item !== value) {
                this._item = value;
                this.notifyPropertyChange("item", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page1ViewModel.prototype, "resources", {
        get: function () {
            return resourcesModule.resources;
        },
        enumerable: true,
        configurable: true
    });
    return Page1ViewModel;
})(observableModule.Observable);
exports.Page1ViewModel = Page1ViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UxLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiUGFnZTFWaWV3TW9kZWwiLCJQYWdlMVZpZXdNb2RlbC5jb25zdHJ1Y3RvciIsIlBhZ2UxVmlld01vZGVsLml0ZW0iLCJQYWdlMVZpZXdNb2RlbC5yZXNvdXJjZXMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTyxnQkFBZ0IsV0FBVyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXJELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRWpEO0lBQW9DQSxrQ0FBMkJBO0lBRzNEQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7UUFFUkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsS0FBS0EsRUFBRUEsU0FBU0EsRUFBRUEsQ0FBQ0E7SUFDckNBLENBQUNBO0lBRURELHNCQUFJQSxnQ0FBSUE7YUFBUkE7WUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDdEJBLENBQUNBO2FBRURGLFVBQVNBLEtBQVVBO1lBQ2ZFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEtBQUtBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUN2QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLE1BQU1BLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQzdDQSxDQUFDQTtRQUNMQSxDQUFDQTs7O09BUEFGO0lBU0RBLHNCQUFJQSxxQ0FBU0E7YUFBYkE7WUFDSUcsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7UUFDckNBLENBQUNBOzs7T0FBQUg7SUFDTEEscUJBQUNBO0FBQURBLENBQUNBLEFBdkJELEVBQW9DLGdCQUFnQixDQUFDLFVBQVUsRUF1QjlEO0FBdkJZLHNCQUFjLGlCQXVCMUIsQ0FBQSJ9