import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) { return null; }

    const words = value.split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = words[i].toLocaleLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }

    return words.join(' ');
  }

  private toTitleCase(words: string): string {
    return words.substr(0, 1).toLocaleUpperCase() + words.substr(1).toLocaleLowerCase();
  }

  private isPreposition(words: string): boolean {
    const prepositions = [
      'the',
      'of'
    ];

    return prepositions.includes(words.toLocaleLowerCase());
  }

}
