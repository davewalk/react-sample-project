#!/bin/bash
aws s3 sync build/ s3://$S3_BUCKET --acl public-read
