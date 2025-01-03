/**
 * extends keyword is used to extend the properties of an interface.
 */

interface GameProps {
  readonly id: string;
  name: string;
  description: string;
  platform: string[];
}

const left4Dead: GameProps = {
  id: '1',
  name: 'Left 4 Dead',
  description: 'Survival game',
  platform: ['Windows', 'Xbox']
}

console.log(left4Dead); // { id: '1', name: 'Left 4 Dead', description: 'Survival game', platform: [ 'Windows', 'Xbox' ] }

interface DLC extends GameProps {
  newMaps: string[];
}

const left4DeadDLC: DLC = {
  id: '2',
  name: 'Left 4 Dead 2',
  description: 'Survival game',
  platform: ['Windows', 'Xbox'],
  newMaps: ['new map1', 'new map2']
}
