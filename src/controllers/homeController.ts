import { Request, Response } from 'express';

import { Pet } from '../models/Pet'
import { createMenuObject } from '../helpers/createMenuObject';

export const index = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/index', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const getDogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/index', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const getCats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/index', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const getFishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/index', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}
