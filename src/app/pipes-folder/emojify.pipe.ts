import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      // return empty string if there is no input
      return "";
    }

    return value
      .replace(/tacos?/ig, "🌮")
      .replace(/burgers?/ig, "🍔")
      .replace(/frites?/ig, "🍟");
  }
  // tacos? means the "s" is optional
  // (i)gnore case (make it work with "taco" or "TaCo")
  // (g)lobal match (replace ALL the "taco" words, not just the first one)
}
