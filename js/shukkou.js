// alert(12);
const request = require('request');
const options = {
    'method': 'POST',
    'url': 'https://api.pdf.co/v1/pdf/convert/to/text',
    'headers': {
        'x-api-key': 'YOUR_API_KEY'
    },
    formData: {
        'url': 'https://bytescout-com.s3-us-west-2.amazonaws.com/files/demo-files/cloud-api/pdf-to-text/sample.pdf'
    }
};
request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
});