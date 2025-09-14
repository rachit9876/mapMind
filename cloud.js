// Configuration
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwI3XoXBSasj0hVK-pYJSerj7dqbjoCcyZ2KaRIURPf-GP_tCVJHIzusVFFDI_oRiS7/exec';
const SPREADSHEET_ID = '17CSh6hKo5lGr-kKKUdZRoVddmtuCejQaLiIVag5gojI';
const SHEET_NAME = 'Sheet1';
const CELL_RANGE = 'A1';

// Save text to Google Sheets with username
function saveTextToSheet(username, text) {
    const rowNum = Math.abs(hashCode(username)) % 1000 + 2; // Start from row 2
    
    fetch(WEB_APP_URL, {
        method: 'POST',
        body: JSON.stringify({
            spreadsheetId: SPREADSHEET_ID,
            sheetName: SHEET_NAME,
            cellRange: `A${rowNum}`,
            value: username
        }),
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        }
    })
    .then(() => {
        return fetch(WEB_APP_URL, {
            method: 'POST',
            body: JSON.stringify({
                spreadsheetId: SPREADSHEET_ID,
                sheetName: SHEET_NAME,
                cellRange: `B${rowNum}`,
                value: text
            }),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            }
        });
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Successfully saved to cloud!');
            console.log('Successfully saved to Google Sheets');
        } else {
            alert('Save failed: ' + data.message);
            console.error('Save Error:', data.message);
        }
    })
    .catch(error => {
        alert('Error saving to cloud');
        console.error('Error saving text', error);
    });
}

// Load text from Google Sheets by username
function loadTextFromSheet(username, callback) {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}&range=A:B`;
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const jsonStart = data.indexOf('{');
            const jsonEnd = data.lastIndexOf('}');
            const jsonString = data.substring(jsonStart, jsonEnd + 1);
            const jsonData = JSON.parse(jsonString);
            
            if (jsonData.table && jsonData.table.rows) {
                // Find the row with matching username
                for (const row of jsonData.table.rows) {
                    if (row.c && row.c[0] && row.c[0].v === username && row.c[1] && row.c[1].v) {
                        const loadedText = row.c[1].v;
                        console.log('Loaded text for user:', username);
                        callback(loadedText);
                        return;
                    }
                }
                console.log('No data found for username:', username);
                callback(null);
            } else {
                console.log('No data in sheet');
                callback(null);
            }
        })
        .catch(error => {
            console.error('Error loading text', error);
            callback(null);
        });
}

// Hash function to convert username to row number
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
}