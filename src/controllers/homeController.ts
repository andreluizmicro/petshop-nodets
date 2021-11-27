import { Request, Response } from 'express';

import { createMenuObject } from '../helpers/createMenuObject';

export const index = (req: Request, res: Response) => {
    res.render('pages/index', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}

export const getDogs = (req: Request, res: Response) => {
    res.render('pages/index', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export const getCats = (req: Request, res: Response) => {
    res.render('pages/index', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}

export const getFishes = (req: Request, res: Response) => {
    res.render('pages/index', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
}
