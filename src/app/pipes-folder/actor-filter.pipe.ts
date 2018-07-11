import { Pipe, PipeTransform } from '@angular/core';
import { Actor } from '../faces-of-benicio/benicio-data';

@Pipe({
  name: 'actorFilter'
})
export class ActorFilterPipe implements PipeTransform {

  transform(value: Array<Actor>, searchTerm: string): Array<Actor> {
    if (!value) {
      // return an empty array if no array provided
      return [];
    }

    if (!searchTerm) {
      // return the whole array if no search term was provided
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const results: Array<Actor> = [];

    value.forEach((oneActor) => {
      const lowerName = oneActor.actorName.toLowerCase();

      if (lowerName.includes(searchTerm)) {
        results.push(oneActor);
      }
    });

    return results;
  }
}
