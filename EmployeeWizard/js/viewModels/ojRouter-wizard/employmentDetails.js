define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojlabel', 'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojselectcombobox'], function (oj, ko, $) {
    function EmploymentDetails(moduleParams)
    {
        this.companyValue = ko.observable();
        this.desgValue = ko.observable();
        moduleParams.company = this.companyValue;
        moduleParams.designation = this.desgValue;
    }
    return EmploymentDetails;
});