var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = args.context;
    page.bindingContext = null;
    page.bindingContext = viewModel;
}
exports.navigatingTo = navigatingTo;
function saveButtonTap(args) {
    viewModel.save();
}
exports.saveButtonTap = saveButtonTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdC1wcm9maWxlLnRzIl0sIm5hbWVzIjpbIm5hdmlnYXRpbmdUbyIsInNhdmVCdXR0b25UYXAiXSwibWFwcGluZ3MiOiJBQUlBLElBQUksU0FBMEQsQ0FBQztBQUMvRCxzQkFBNkIsSUFBOEI7SUFDdkRBLElBQUlBLElBQUlBLEdBQW9CQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUN4Q0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDekJBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBO0lBQzNCQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxTQUFTQSxDQUFDQTtBQUNwQ0EsQ0FBQ0E7QUFMZSxvQkFBWSxlQUszQixDQUFBO0FBRUQsdUJBQThCLElBQUk7SUFDOUJDLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO0FBQ3JCQSxDQUFDQTtBQUZlLHFCQUFhLGdCQUU1QixDQUFBIn0=