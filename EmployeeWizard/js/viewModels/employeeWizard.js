define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmodule-element-utils', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtrain', 'ojs/ojrouter', 'ojs/ojmodule', 'ojs/ojmenu'], function (oj, ko, $) {

    var base = document.baseURI;
    oj.Router.defaults['baseUrl'] = base;

    // Change the default location for the viewModel and view files
    oj.ModuleBinding.defaults.modelPath = 'viewModels/ojRouter-wizard/';
    oj.ModuleBinding.defaults.viewPath = 'text!views/ojRouter-wizard/';

    // Retrieve the router static instance and configure the states
    var router = oj.Router.rootInstance;

    router.configure({
        'personnelDetails': // Router state Id
                {
                    label: 'Personnel Details', // label for the train stop
                    value: 'personnelDetails', // module name
                    isDefault: true
                },
        'employmentDetails': {
            label: 'Employment Details', // label for the train stop
            value: 'employmentDetails'// module name
        },
        'review': {
            label: 'Summary', // label for the train stop
            value: 'review'// module name
        }
    });

    var viewModel = function () {
        var self = this;
        this.wizardTitle = "Employee Wizard";

        this.router = router;
        this.stepArray = ko.observableArray(this.router.states);
        this.currentStepValue = ko.observable(this.router.stateId());
        // Initialize the train direction
        this.router.trainStepDirection = 'next';

        this.moduleConfig = ko.pureComputed(function () {
            return viewModel.router.moduleConfig;
        },
                this);

        this.handleBindingsApplied = function (info) {
            // Keep a reference of the train
            self.train = info.element.querySelector('#trainId');

            // handle manual selection of steps
            self.train.onOjBeforeSelect = function (event) {
                if (event.detail.originalEvent && event.detail.toStep) {
                    // router takes care of changing the selection
                    event.preventDefault();

                    var steps = self.router.states;
                    for (var i = 0; i < steps.length; i++) {
                        switch (steps[i].id) {
                            // If first one found is the from, going forward
                            case event.detail.fromStep.id:
                                self.router.trainStepDirection = 'next';
                                i = steps.length;
                                break;

                                // If first one found is the to, going backward
                            case event.detail.toStep.id:
                                self.router.trainStepDirection = 'previous';
                                i = steps.length;
                                break;
                        }
                    }

                    // Transition the router to the new state
                    self.router.go(event.detail.toStep.id,
                            {
                                historyUpdate: 'skip'
                            });

                }
            };
        };

        this.dispose = function (info) {
            delete self.train;
            self.router.dispose();
        };

        this.nextStep = function () {
            var stepId = self.train.getNextSelectableStep();

            var steps = this.router.states;
            // indicate that user requested next step
            self.router.trainStepDirection = 'next';
            if (stepId !== steps[0].id) {
                document.getElementById("prevBtn").disabled = false;
            }
            if (stepId === steps[steps.length - 1].id) {
                document.getElementById("finishBtn").disabled = false;
            }

            self.router.go(stepId,
                    {
                        historyUpdate: 'skip'
                    });

        };

        this.previousStep = function () {
            var stepId = self.train.getPreviousSelectableStep();

            // indicate that user requested previous step
            self.router.trainStepDirection = 'previous';
            self.router.go(stepId,
                    {
                        historyUpdate: 'skip'
                    });
        };

        this.finish = function () {
            self.navigateBack();
        };

        this.cancel = function () {
            // self.router.data = null;
            self.navigateBack();
        };

        this.navigateBack = function () {
            window.history.back();
        };
    }
    $(document).ready(function () {
        oj.Router.sync().then(function () {
            ko.applyBindings(viewModel, document.getElementById('wizard'));
        });
    });
});