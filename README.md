!["Image description"](https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4085927%2Fcover_image%2Fretina_500x200%2Fcover-headless-browser-puppeteer-tutorial-8ab869e6cbc8b19867d544908f87bf08.png)

## Dynamic Performance Report Generator

**Generate visually appealing and informative PDF reports showcasing performance metrics, complete with customizable charts and QR codes.**

This Node.js application leverages Puppeteer to render HTML templates dynamically based on user-provided data.

### Key Features

* **Dynamic Data Injection:** Seamlessly integrate user-supplied information (location, revenue, occupancy, nightly rates, etc.) into report elements.
* **Customizable Charts:** Generate bar charts reflecting performance trends, allowing for data-driven insights.
* **QR Code Integration:** Quickly embed QR codes linking to relevant resources within the report.
* **Flexible PDF Generation:** Generate A4-sized PDFs with clean layouts and customizable background options.
* **Error Handling:** Robust error handling ensures graceful degradation and user-friendly error messages in case of issues.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/dynamic-performance-report-generator.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Create an HTML template named `pdf.html` within your project directory. Structure the HTML to accommodate dynamic data and chart elements.
2. Start the server:

   ```bash
   node index.js
   ```

   (or `npm start` if using a package manager script)

3. Send a POST request to `http://localhost:9000/puppeteer/pdf` with the following JSON data in the request body:

   ```json
   {
     "resultLocation": "Your Location",
     "revenue": {
       "min": 1000,
       "max": 5000
     },
     "occupancy": {
       "min": 70,
       "max": 90
     },
     "nightly": {
       "min": 150,
       "max": 200
     },
     "monthsRevenue": [ // Array of monthly revenue values
       1200,
       1400,
       // ...
     ],
     "resultId": "unique_report_id", // (Optional) Used for PDF filename
     "reportURL": "https://your-report-url.com" // (Optional) Link embedded in QR code
   }
   ```

The server will generate a PDF named `chart-<resultId>.pdf` (or `chart.pdf` if `resultId` is not provided) and send it as a response.

### Customization

* Modify the `pdf.html` template to tailor the report's visual style and content.
* Adjust the data structure in the request body to match your specific performance metrics.



