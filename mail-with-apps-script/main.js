function sendEmailsToStudents() {
  // Spreadsheet and Sheet details
  const sheetId = "SHEET ID";
  const sheetName = "rzn";

  // Google Doc containing the email body
  const docId = "DOC ID";

  try {
    // Open the spreadsheet and get the data
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    const data = sheet.getDataRange().getValues(); // Get all data in the sheet
    const emailColumn = data.map(row => row[#]).slice(1); // Get emails from column 1, skipping header

    // Fetch the email body from the Google Doc
    const emailBody = DocumentApp.openById(docId).getBody().getText();

    // Loop through the emails and send with a delay
    emailColumn.forEach((email, index) => {
      if (email) { // Check if email is not empty
        GmailApp.sendEmail(email, "Logo Design Workshop 3", emailBody, {
          name: "Rizwaan Shaikh", // Custom sender name
        });
        Logger.log(`Email sent to: ${email}`);
        
        // Add delay after each email except the last one
        if (index < emailColumn.length - 1) {
          Utilities.sleep(30000); // 30 seconds delay
        }
      }
    });

    // Log success
    Logger.log(`Emails successfully sent to ${emailColumn.length} students.`);
  } catch (error) {
    Logger.log(`Error: ${error.message}`);
  }
}
