const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const s3 = new AWS.S3();
const kinesis = new AWS.Kinesis();

exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const BucketName = event.Records[0].s3.bucket.name;
    const KeyName = event.Records[0].s3.object.key;
    const params = {
        Bucket: BucketName,
        Key: KeyName
    }
    await s3.getObject(params).promise().then(async (data) => {
        const dataString = data.Body.toString();
        const payload = {
            data: dataString
        }
        await sendToKinesis(payload, keyName);
    }, error => {
        console.error(error);
    })
}

async function sendToKinesis(payload, partitionKey) {
    const params = {
        Data: JSON.stringify(payload),
        PartitionKey: partitionKey,
        StreamName: process.env.NameKinesisStream // Replace name Kinesis
    }

    await kinesis.putRecord(params).promise().then(Response => {
        console.log(Response);
    }, error => {
        console.error(error);
    })
}
