function fetchAndUploadData() {
  const sheetsConfig = [
    {
      sheetName: "Projects",
      dataUrl: "https://example.com/projects.json", // Replace with actual URL
      columns: ["id", "title", "description", "category", "technologies", "date", "client", "results"]
    },
    {
      sheetName: "Blogs",
      dataUrl: "https://example.com/blogs.json", // Replace with actual URL
      columns: ["id", "title", "excerpt", "author", "date", "tags"]
    },
    {
      sheetName: "Testimonials",
      dataUrl: "https://example.com/testimonials.json", // Replace with actual URL
      columns: ["id", "name", "role", "content", "rating", "project", "source"]
    }
  ];

  sheetsConfig.forEach(config => {
    const sheet = getOrCreateSheet(config.sheetName);
    const data = fetchData(config.dataUrl);
    if (data) {
      clearSheet(sheet);
      uploadDataToSheet(sheet, data, config.columns);
    }
  });
}

function fetchData(url) {
  try {
    const response = UrlFetchApp.fetch(url);
    return JSON.parse(response.getContentText());
  } catch (error) {
    Logger.log(`Error fetching data from ${url}: ${error}`);
    return null;
  }
}

function getOrCreateSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  return sheet;
}

function clearSheet(sheet) {
  sheet.clear();
}

function uploadDataToSheet(sheet, data, columns) {
  const headerRow = columns.map(column => column.charAt(0).toUpperCase() + column.slice(1));
  sheet.appendRow(headerRow);

  data.forEach(item => {
    const row = columns.map(column => {
      if (Array.isArray(item[column])) {
        return item[column].join(", ");
      }
      return item[column] || "";
    });
    sheet.appendRow(row);
  });
}