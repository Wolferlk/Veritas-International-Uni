// Replace with your Google Form ID
const FORM_ID = 'YOUR_FORM_ID';
// Replace with your Google Sheet ID where responses will be stored
const SHEET_ID = 'YOUR_SHEET_ID';

function doPost(e) {
  const action = e.parameter.action;
  
  if (action === 'check') {
    return checkSubmission(e);
  } else if (action === 'submit') {
    return submitForm(e);
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    success: false,
    error: 'Invalid action'
  })).setMimeType(ContentService.MimeType.JSON);
}

function checkSubmission(e) {
  const data = JSON.parse(e.postData.contents);
  const email = data.email;
  
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Check if email exists in the sheet
  const hasSubmitted = data.some(row => row.includes(email));
  
  return ContentService.createTextOutput(JSON.stringify({
    hasSubmitted: hasSubmitted
  })).setMimeType(ContentService.MimeType.JSON);
}

function submitForm(e) {
  const data = JSON.parse(e.postData.contents);
  const email = data.email;
  
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const form = FormApp.openById(FORM_ID);
  
  try {
    // Create form response
    const formResponse = form.createResponse();
    
    // Add responses for each form item
    const items = form.getItems();
    items.forEach(item => {
      const itemTitle = item.getTitle();
      if (data[itemTitle]) {
        formResponse.withItemResponse(item.createResponse(data[itemTitle]));
      }
    });
    
    // Submit the form response
    formResponse.submit();
    
    // Store in sheet for tracking
    sheet.appendRow([email, new Date(), JSON.stringify(data)]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
} 