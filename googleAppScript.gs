function onEdit(e) {
  var sh = SpreadsheetApp.getActiveSheet();
  var range = sh.getDataRange();
  var row = range.getLastRow();
  
  if (row != PropertiesService.getScriptProperties().getProperty('prevCount')) {
    PropertiesService.getScriptProperties().setProperty('prevCount', row);
    var message = ':sparkles: the current number of applications is ' + row + ' :sparkles:';
    
    var data = {
      'text' : message
    }
    var options = {
      'method' : 'post',
      'contentType': 'application/json',
      'payload' : JSON.stringify(data)
    }
    
    UrlFetchApp.fetch(WEBHOOK, options);
  }
}