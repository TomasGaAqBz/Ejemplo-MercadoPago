import { Router } from "express";   

const router = Router();


router.get('/createOrder', (req,res) => res.send('createOrder'))

router.get('/success', (req,res) => res.send('Success'))

router.get('/webhook', (req,res) => res.send('WebHook'))


export default router