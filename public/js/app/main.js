import Human from './models/human';
import Humans from './models/humans';

class Application {
    constructor(human, humans) {
        $('h1').html('E6 Rocks!');

        var job = new Human({id: 1, firstName:'Bob', lastName:'Morane'});
        var rob = new Human({id: 3, firstName:'rob', lastName:'cast'});

        var humans = new Humans();

        humans.add(job);
        humans.add(rob);

        $('ul').html(humans.models.reduce(function(previous, current) {
            return previous + `
            <li>+${current.id} ${current.firstName} ${current.lastName}+</li>
            `;
        }, ""));
    }
}

$(() => {
    new Application();
})
