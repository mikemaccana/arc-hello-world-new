# Test 'the bucket you are attempting to access must be addressed using the specified endpoint' error

Run `npx arc deploy`

```
$ arc npx deploy
 Region ~ us-west-2
 Profile ~ default
 cwd ~ C:\Users\mikem\Code\arc-hello-world-new
Sorry, arc npx command not found!
Profile ~ default
 Version ~ Architect 6.0.13
cwd ~ C:\Users\mikem\Code\arc-hello-world-new

○ Deploy Initializing deployment
| Stack ... HelloWorldStaging
 | Bucket .. secret-deploy-bucket-dont-tell
√ Deploy Generated CloudFormation deployment
Uploading to 3c973b3e9ea3ff2001875c9f6cdaf377.template
4540 / 4540.0
(100.00%)
An error occurred (ValidationError) when calling the CreateChangeSet operation: S3 error: The bucket you are attempting to access must be addressed using the specified endpoint. Please send all future requests to this endpoint.
 For more information check http://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html
 deploy failed!

```

