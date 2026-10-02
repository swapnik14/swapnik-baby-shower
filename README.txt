SWAPNIK BABY SHOWER — GOOGLE SHEET SETUP
==========================================

The website is prepared to send:
1. RSVP responses
2. Team Boy / Team Girl votes
3. Baby name ideas

to your Google Sheet.

YOUR SHEET:
https://docs.google.com/spreadsheets/d/1oNC5Omh7zQXz_znj_kMztUEoNh53TAJQJzLEVCFh7qE/edit

STEP 1 — Open Apps Script
1. Open the Google Sheet.
2. Go to Extensions → Apps Script.
3. Delete any code in the editor.
4. Open the included file GoogleAppsScript.gs and copy all of its code into Apps Script.
5. Click Save.

STEP 2 — Deploy it
1. Click Deploy → New deployment.
2. Choose type: Web app.
3. Execute as: Me.
4. Who has access: Anyone.
5. Click Deploy.
6. Authorize the script when Google asks.
7. Copy the Web app URL ending in /exec.

STEP 3 — Put the URL into the website
Open index.html and find:

const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

Replace the text inside the quotes with your /exec URL.
Example:
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/XXXXXXXX/exec";

Save index.html and upload the complete folder/ZIP to Netlify again.

STEP 4 — Test
Submit:
- Team Boy or Team Girl
- A baby name
- An RSVP

A Responses tab will automatically be created in the Sheet with:
Timestamp | Type | Name | Attendance | Guests | Team Vote | Baby Name

IMPORTANT:
The Google Apps Script Web App must be deployed as "Anyone" so invitation visitors can submit without signing into Google.
Do not put your Google account password or private credentials into the website.
