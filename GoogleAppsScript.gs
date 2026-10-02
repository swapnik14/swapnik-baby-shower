const SHEET_ID = '1oNC5Omh7zQXz_znj_kMztUEoNh53TAJQJzLEVCFh7qE';
const SHEET_NAME = 'Responses';

function doGet() {
  return ContentService.createTextOutput('SwapNik RSVP endpoint is running.');
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp','Type','Name','Attendance','Guests','Team Vote','Baby Name']);
      sheet.setFrozenRows(1);
    }

    const p = e && e.parameter ? e.parameter : {};
    sheet.appendRow([
      new Date(),
      p.type || '',
      p.name || '',
      p.attendance || '',
      p.guests || '',
      p.vote || '',
      p.baby_name || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
