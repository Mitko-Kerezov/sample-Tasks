var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var navigationModule = require("../../utils/navigation");
var TimePickerViewModel = (function (_super) {
    __extends(TimePickerViewModel, _super);
    function TimePickerViewModel(selectedDate, selectedCallback) {
        _super.call(this);
        this.hour = selectedDate.getHours();
        this.minute = selectedDate.getMinutes();
        this._selectedCallback = selectedCallback;
    }
    Object.defineProperty(TimePickerViewModel.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (value) {
            if (this._hour !== value) {
                this._hour = value;
                this.notifyPropertyChange("hour", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimePickerViewModel.prototype, "minute", {
        get: function () {
            return this._minute;
        },
        set: function (value) {
            if (this._minute !== value) {
                this._minute = value;
                this.notifyPropertyChange("minute", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    TimePickerViewModel.prototype.done = function () {
        this._selectedCallback(this.hour, this.minute);
        navigationModule.goBack();
    };
    return TimePickerViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.TimePickerViewModel = TimePickerViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiVGltZVBpY2tlclZpZXdNb2RlbCIsIlRpbWVQaWNrZXJWaWV3TW9kZWwuY29uc3RydWN0b3IiLCJUaW1lUGlja2VyVmlld01vZGVsLmhvdXIiLCJUaW1lUGlja2VyVmlld01vZGVsLm1pbnV0ZSIsIlRpbWVQaWNrZXJWaWV3TW9kZWwuZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFPLG1CQUFtQixXQUFXLDJCQUEyQixDQUFDLENBQUM7QUFDbEUsSUFBTyxnQkFBZ0IsV0FBVyx3QkFBd0IsQ0FBQyxDQUFDO0FBRTVEO0lBQXlDQSx1Q0FBaUNBO0lBS3RFQSw2QkFBWUEsWUFBa0JBLEVBQUVBLGdCQUF3REE7UUFDcEZDLGlCQUFPQSxDQUFDQTtRQUVSQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxZQUFZQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsWUFBWUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7UUFFeENBLElBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsZ0JBQWdCQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFFREQsc0JBQUlBLHFDQUFJQTthQUFSQTtZQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7YUFFREYsVUFBU0EsS0FBYUE7WUFDbEJFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEtBQUtBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUN2QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLE1BQU1BLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQzdDQSxDQUFDQTtRQUNMQSxDQUFDQTs7O09BUEFGO0lBU0RBLHNCQUFJQSx1Q0FBTUE7YUFBVkE7WUFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDeEJBLENBQUNBO2FBRURILFVBQVdBLEtBQWFBO1lBQ3BCRyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxLQUFLQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDekJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO2dCQUNyQkEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxRQUFRQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUMvQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7OztPQVBBSDtJQVNEQSxrQ0FBSUEsR0FBSkE7UUFDSUksSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMvQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFDTEosMEJBQUNBO0FBQURBLENBQUNBLEFBeENELEVBQXlDLG1CQUFtQixDQUFDLGFBQWEsRUF3Q3pFO0FBeENZLDJCQUFtQixzQkF3Qy9CLENBQUEifQ==