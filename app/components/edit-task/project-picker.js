var listPickerViewModelModule = require("../list-picker/list-picker-view-model");
var navigationModule = require("../../utils/navigation");
var viewsModule = require("../../utils/views");
var serviceModule = require("../../utils/service");
function projectPickerTap(args) {
    var view = args.view;
    var viewModel = view.bindingContext;
    navigationModule.navigate({
        moduleName: viewsModule.Views.listPicker,
        context: new listPickerViewModelModule.ListPickerViewModel(function () { return serviceModule.service.getProjects(); }, viewModel.project, function (selectedItem) {
            viewModel.project = selectedItem;
        })
    });
}
exports.projectPickerTap = projectPickerTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1waWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZWN0LXBpY2tlci50cyJdLCJuYW1lcyI6WyJwcm9qZWN0UGlja2VyVGFwIl0sIm1hcHBpbmdzIjoiQUFLQSxJQUFPLHlCQUF5QixXQUFXLHVDQUF1QyxDQUFDLENBQUM7QUFFcEYsSUFBTyxnQkFBZ0IsV0FBVyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzVELElBQU8sV0FBVyxXQUFXLG1CQUFtQixDQUFDLENBQUM7QUFDbEQsSUFBTyxhQUFhLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUV0RCwwQkFBaUMsSUFBcUM7SUFDbEVBLElBQUlBLElBQUlBLEdBQW9CQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUN0Q0EsSUFBSUEsU0FBU0EsR0FBOENBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBO0lBQy9FQSxnQkFBZ0JBLENBQUNBLFFBQVFBLENBQUNBO1FBQ3RCQSxVQUFVQSxFQUFFQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQTtRQUN4Q0EsT0FBT0EsRUFBRUEsSUFBSUEseUJBQXlCQSxDQUFDQSxtQkFBbUJBLENBQUNBLGNBQVFBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLFNBQVNBLENBQUNBLE9BQU9BLEVBQUNBLFVBQUNBLFlBQWlCQTtZQUNsSkEsU0FBU0EsQ0FBQ0EsT0FBT0EsR0FBR0EsWUFBWUEsQ0FBQ0E7UUFDckNBLENBQUNBLENBQUNBO0tBQ0xBLENBQUNBLENBQUNBO0FBQ1BBLENBQUNBO0FBVGUsd0JBQWdCLG1CQVMvQixDQUFBIn0=