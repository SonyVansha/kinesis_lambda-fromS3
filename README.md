# Kinesis Data stream use lambda to get data S3

### Lambda Setup

| Name | Code Source | Environmet | Trigger | Description |
|--|--|--|--|--|
| **lambda-producers** | [code producer] | NameKinesisStream | S3 | - |
| **lambda-customer1** | [code customer1] | - | Kinesis | - |
| **lambda-customer2 **| [code customer2] | - | Kinesis | - |

### View results in `CloudWatch`


<!-- Link -->

[code producer]: </lambda/producer.js>
[code customer1]: </lambda/customer1.js>
[code customer2]: </lambda/customer2.js>
