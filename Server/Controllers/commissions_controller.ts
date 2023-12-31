const commissions = require("express").Router()
import Commission from '../Models/commission'
const commissionSeedData = require('../Seeders/commission_data')
import { Request, Response } from 'express';

//FIND ALL COMMISSIONS
commissions.get('/', async (req: Request, res: Response) => {
    try{
        const foundCommissions = await Commission.find()
        res.json(foundCommissions)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//SEED DATA
//will be removed for final implementation
commissions.get('/seed', async (req: Request, res: Response) => {
    try {
        await Commission.insertMany(commissionSeedData)
        res.status(201).json({ message: 'Seeded data successfully' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'request failed' })
    }
})

//FIND SPECIFIC COMMISSIONS
commissions.get('/:id', async (req: Request, res: Response) => {
    try {
        const foundCommissions = await Commission.findById(req.params.id)
        res.status(200).json(foundCommissions)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE COMMISSIONS
commissions.post('/', async (req: Request, res: Response) => {
    try {
        const newCommission = await Commission.create(req.body)
        res.status(201).json({
            message: 'Successfully insert a new commissions',
            data: newCommission
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE COMMISSIONS INFORMATION
commissions.put('/:id', async (req: Request, res: Response) => {
    try {
        const updatedCommission = await Commission.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json({ 
            message: 'Successfully updated commissions',
            data: updatedCommission
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE A COMMISSION
commissions.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedCommission = await Commission.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Successfully deleted commission(s)`,
            data: deletedCommission
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
export default commissions;