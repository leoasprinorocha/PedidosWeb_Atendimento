import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';

@Injectable({
  providedIn: 'root',
})
export class S3UploadService {

  private s3 = new S3({
    accessKeyId: 'AKIASW4TRVUSQXOUG46F',
    secretAccessKey: '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'
  });

  uploadFile(file: File, bucketName: string, key: string): Promise<S3.ManagedUpload.SendData> {
    const params: S3.PutObjectRequest = {
      Bucket: bucketName,
      Key: key,
      Body: file,
      ACL: 'public-read', // Set the ACL as needed
    };

    return this.s3.upload(params).promise();
  }
}