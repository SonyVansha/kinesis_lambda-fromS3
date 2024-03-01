exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    for (const record of event.Records) {
        const data = JSON.parse(Buffer.from(record.kinesis.data, 'base64'));
        // send email client
        console.log('Customer #1',data);
    }
}