$(document).ready(function(){
    // Initialize datepicker
    $('#fromDate').datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true
    });
    
    $('#toDate').datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true
    });
  });