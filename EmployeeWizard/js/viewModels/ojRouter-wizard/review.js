define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojlabel', 'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojselectcombobox'], function (oj, ko, $) {
    function Review(moduleParams)
    {
        this.name = moduleParams.name;
        this.mobile = moduleParams.mobile;
        this.company = moduleParams.company;
        this.designation = moduleParams.designation;
    }

    return Review;
});