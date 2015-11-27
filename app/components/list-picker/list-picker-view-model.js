var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observableModule = require("data/observable");
var viewModelBaseModule = require("../common/view-model-base");
var navigationModule = require("../../utils/navigation");
var ListPickerViewModel = (function (_super) {
    __extends(ListPickerViewModel, _super);
    function ListPickerViewModel(getItemsFunction, selectedItem, selectedCallback) {
        var _this = this;
        _super.call(this);
        this._selectedCallback = selectedCallback;
        this.items = [];
        if (!this.beginLoading())
            return;
        getItemsFunction().then(function (items) {
            var listItems = new Array();
            for (var i = 0; i < items.length; i++) {
                var listItem = new ListItem(items[i]);
                if (selectedItem && items[i].Id === selectedItem.Id) {
                    _this.selectItem(listItem);
                }
                listItems.push(listItem);
            }
            _this.items = listItems;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    }
    Object.defineProperty(ListPickerViewModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            if (this._items !== value) {
                this._items = value;
                this.notifyPropertyChange("items", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ListPickerViewModel.prototype.selectItem = function (item) {
        if (this._selectedItem) {
            this._selectedItem.isSelected = false;
        }
        this._selectedItem = item;
        if (this._selectedItem) {
            this._selectedItem.isSelected = true;
        }
    };
    ListPickerViewModel.prototype.done = function () {
        this._selectedCallback(this._selectedItem.data);
        navigationModule.goBack();
    };
    return ListPickerViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.ListPickerViewModel = ListPickerViewModel;
var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem(data) {
        _super.call(this);
        this.data = data;
        this.isSelected = false;
    }
    Object.defineProperty(ListItem.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            if (this._isSelected !== value) {
                this._isSelected = value;
                this.notifyPropertyChange("isSelected", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            if (this._data !== value) {
                this._data = value;
                this.notifyPropertyChange("data", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return ListItem;
})(observableModule.Observable);
exports.ListItem = ListItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1waWNrZXItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtcGlja2VyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiTGlzdFBpY2tlclZpZXdNb2RlbCIsIkxpc3RQaWNrZXJWaWV3TW9kZWwuY29uc3RydWN0b3IiLCJMaXN0UGlja2VyVmlld01vZGVsLml0ZW1zIiwiTGlzdFBpY2tlclZpZXdNb2RlbC5zZWxlY3RJdGVtIiwiTGlzdFBpY2tlclZpZXdNb2RlbC5kb25lIiwiTGlzdEl0ZW0iLCJMaXN0SXRlbS5jb25zdHJ1Y3RvciIsIkxpc3RJdGVtLmlzU2VsZWN0ZWQiLCJMaXN0SXRlbS5kYXRhIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU8sZ0JBQWdCLFdBQVcsaUJBQWlCLENBQUMsQ0FBQztBQUVyRCxJQUFPLG1CQUFtQixXQUFXLDJCQUEyQixDQUFDLENBQUM7QUFDbEUsSUFBTyxnQkFBZ0IsV0FBVyx3QkFBd0IsQ0FBQyxDQUFDO0FBRzVEO0lBQXlDQSx1Q0FBaUNBO0lBS3RFQSw2QkFBWUEsZ0JBQXNDQSxFQUFFQSxZQUFpQkEsRUFBRUEsZ0JBQTZDQTtRQUx4SEMsaUJBMERDQTtRQXBET0EsaUJBQU9BLENBQUNBO1FBR1JBLElBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsZ0JBQWdCQSxDQUFDQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFFaEJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO1lBQUFBLE1BQU1BLENBQUNBO1FBQ2hDQSxnQkFBZ0JBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEtBQUtBO1lBQzFCQSxJQUFJQSxTQUFTQSxHQUFHQSxJQUFJQSxLQUFLQSxFQUFZQSxDQUFDQTtZQUN0Q0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQ3BDQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdENBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLFlBQVlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO29CQUNsREEsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzlCQSxDQUFDQTtnQkFFREEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLENBQUNBO1lBRURBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBO1lBQ3ZCQSxLQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtRQUN0QkEsQ0FBQ0EsRUFBQ0EsVUFBQ0EsS0FBS0E7WUFDQUEsS0FBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7UUFDdEJBLENBQUNBLENBQUNBLENBQUNBO0lBRVhBLENBQUNBO0lBRURELHNCQUFJQSxzQ0FBS0E7YUFBVEE7WUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDdkJBLENBQUNBO2FBRURGLFVBQVVBLEtBQWlCQTtZQUN2QkUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDcEJBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsT0FBT0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLENBQUNBO1FBQ0xBLENBQUNBOzs7T0FQQUY7SUFTREEsd0NBQVVBLEdBQVZBLFVBQVdBLElBQWNBO1FBQ3JCRyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDMUNBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBO1FBQzFCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDekNBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURILGtDQUFJQSxHQUFKQTtRQUNJSSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hEQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUNMSiwwQkFBQ0E7QUFBREEsQ0FBQ0EsQUExREQsRUFBeUMsbUJBQW1CLENBQUMsYUFBYSxFQTBEekU7QUExRFksMkJBQW1CLHNCQTBEL0IsQ0FBQTtBQUVEO0lBQThCSyw0QkFBMkJBO0lBSXJEQSxrQkFBWUEsSUFBU0E7UUFDakJDLGlCQUFPQSxDQUFDQTtRQUVSQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBRURELHNCQUFJQSxnQ0FBVUE7YUFBZEE7WUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7UUFDNUJBLENBQUNBO2FBRURGLFVBQWVBLEtBQWNBO1lBQ3pCRSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxLQUFLQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDN0JBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN6QkEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxZQUFZQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNuREEsQ0FBQ0E7UUFDTEEsQ0FBQ0E7OztPQVBBRjtJQVNEQSxzQkFBSUEsMEJBQUlBO2FBQVJBO1lBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1FBQ3RCQSxDQUFDQTthQUVESCxVQUFTQSxLQUFjQTtZQUNuQkcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsS0FBS0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDbkJBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDN0NBLENBQUNBO1FBQ0xBLENBQUNBOzs7T0FQQUg7SUFRTEEsZUFBQ0E7QUFBREEsQ0FBQ0EsQUFoQ0QsRUFBOEIsZ0JBQWdCLENBQUMsVUFBVSxFQWdDeEQ7QUFoQ1ksZ0JBQVEsV0FnQ3BCLENBQUEifQ==