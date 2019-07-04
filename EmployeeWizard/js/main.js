requirejs.undef('employeeWizard'); 

requirejs.config({
  // Path mappings for the logical module names
  paths: {
      'knockout' : '../../jet/libs/knockout/knockout-3.4.2', 
      'jquery' : '../../jet/libs/jquery/jquery-3.3.1.min', 
      'jqueryui-amd' : '../../jet/libs/jquery/jqueryui-amd-1.12.1.min', 
      'promise' : '../../jet/libs/es6-promise/es6-promise.min', 
      'hammerjs' : '../../jet/libs/hammer/hammer-2.0.8.min', 
      'ojdnd' : '../../jet/libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
      'customElements': '../../jet/libs/webcomponents/custom-elements.min',
      'ojs' : '../../jet/libs/oj/v6.0.0/min', 
      'ojL10n' : '../../jet/libs/oj/v6.0.0/ojL10n', 
      'ojtranslations' : '../../jet/libs/oj/v6.0.0/resources', 
      'signals' : '../../jet/libs/js-signals/signals.min', 
      'text' : '../../jet/libs/require/text',
      'touchr': '../../jet/libs/touchr/touchr',
      'employeeWizard' : 'viewModels/employeeWizard'
  }
});


require(['ojs/ojcore', 'knockout', 'jquery','employeeWizard'], // add additional JET component modules as needed
  function(oj, ko, $, employeeWizard) // this callback gets executed when all required modules are loaded
  {
    
  }
);  

