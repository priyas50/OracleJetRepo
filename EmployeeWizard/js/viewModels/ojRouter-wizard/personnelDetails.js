define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojlabel', 'ojs/ojmodule', 'ojs/ojrouter'], function (oj, ko, $) {
    function PersonalDetails(moduleParams) {
        this.nameValue = ko.observable();
        this.phoneValue = ko.observable();
        moduleParams.name = this.nameValue;
        moduleParams.mobile = this.phoneValue;

    }
    return PersonalDetails;

});