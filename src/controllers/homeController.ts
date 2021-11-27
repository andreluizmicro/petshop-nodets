import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.render('pages/index', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}

export const getDogs = (req: Request, res: Response) => {
    res.render('pages/index', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export const getCats = (req: Request, res: Response) => {
    res.render('pages/index', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}

export const getFishes = (req: Request, res: Response) => {
    res.render('pages/index', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
}
