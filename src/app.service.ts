import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @Cron('*/10 * * * * *')
  runEvery10Seconds() {
    // console.log('Every 10 seconds');
    var date = new Date()

    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    console.log(hour, minutes, seconds)
    if (hour == 12 && minutes == 0 && seconds == 0) {
      console.log('Yes call api')
      console.log(hour, minutes, seconds)
    }
  }
}
