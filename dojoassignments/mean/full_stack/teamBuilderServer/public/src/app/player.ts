export class Player {
    constructor(
        public name: String = '',
        public position: String = '',
        public games: Object = {game1: 'undecided', game2: 'undecided', game3: 'undecided'}
    ){}
}
