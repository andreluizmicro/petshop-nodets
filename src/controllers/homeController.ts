import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.send('home no Controller');
    // res.render('pages/page');
}

export const getDogs = (req: Request, res: Response) => {
    // res.render('pages/page');
}

export const getCats = (req: Request, res: Response) => {
    // res.render('pages/page');
}

export const getFishes = (req: Request, res: Response) => {
    // res.render('pages/page');
}
