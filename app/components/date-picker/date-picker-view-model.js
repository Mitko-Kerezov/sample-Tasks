var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var navigationModule = require("../../utils/navigation");
var DatePickerViewModel = (function (_super) {
    __extends(DatePickerViewModel, _super);
    function DatePickerViewModel(selectedDate, selectedCallback) {
        _super.call(this);
        this.day = selectedDate.getDate();
        this.month = selectedDate.getMonth() + 1;
        this.year = selectedDate.getFullYear();
        this._selectedCallback = selectedCallback;
    }
    Object.defineProperty(DatePickerViewModel.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (value) {
            if (this._day !== value) {
                this._day = value;
                this.notifyPropertyChange("day", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerViewModel.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            if (this._month !== value) {
                this._month = value;
                this.notifyPropertyChange("month", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerViewModel.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            if (this._year !== value) {
                this._year = value;
                this.notifyPropertyChange("year", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DatePickerViewModel.prototype.done = function () {
        this._selectedCallback(this.day, this.month - 1, this.year);
        navigationModule.goBack();
    };
    return DatePickerViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.DatePickerViewModel = DatePickerViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiRGF0ZVBpY2tlclZpZXdNb2RlbCIsIkRhdGVQaWNrZXJWaWV3TW9kZWwuY29uc3RydWN0b3IiLCJEYXRlUGlja2VyVmlld01vZGVsLmRheSIsIkRhdGVQaWNrZXJWaWV3TW9kZWwubW9udGgiLCJEYXRlUGlja2VyVmlld01vZGVsLnllYXIiLCJEYXRlUGlja2VyVmlld01vZGVsLmRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTyxtQkFBbUIsV0FBVywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sZ0JBQWdCLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUU1RDtJQUF5Q0EsdUNBQWlDQTtJQU10RUEsNkJBQVlBLFlBQWtCQSxFQUFFQSxnQkFBb0VBO1FBQ2hHQyxpQkFBT0EsQ0FBQ0E7UUFFUkEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFDbENBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxZQUFZQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUV2Q0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxnQkFBZ0JBLENBQUNBO0lBQzlDQSxDQUFDQTtJQUVERCxzQkFBSUEsb0NBQUdBO2FBQVBBO1lBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQ3JCQSxDQUFDQTthQUVERixVQUFRQSxLQUFhQTtZQUNqQkUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBS0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDbEJBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDNUNBLENBQUNBO1FBQ0xBLENBQUNBOzs7T0FQQUY7SUFTREEsc0JBQUlBLHNDQUFLQTthQUFUQTtZQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUN2QkEsQ0FBQ0E7YUFFREgsVUFBVUEsS0FBYUE7WUFDbkJHLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3BCQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLE9BQU9BLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQzlDQSxDQUFDQTtRQUNMQSxDQUFDQTs7O09BUEFIO0lBU0RBLHNCQUFJQSxxQ0FBSUE7YUFBUkE7WUFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDdEJBLENBQUNBO2FBRURKLFVBQVNBLEtBQWFBO1lBQ2xCSSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxLQUFLQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdkJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUNuQkEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxNQUFNQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUM3Q0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7OztPQVBBSjtJQVNEQSxrQ0FBSUEsR0FBSkE7UUFDSUssSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM1REEsZ0JBQWdCQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFDTEwsMEJBQUNBO0FBQURBLENBQUNBLEFBckRELEVBQXlDLG1CQUFtQixDQUFDLGFBQWEsRUFxRHpFO0FBckRZLDJCQUFtQixzQkFxRC9CLENBQUEifQ==