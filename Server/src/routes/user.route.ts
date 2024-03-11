
import {Router} from 'express'

const router : Router = Router();



router.route('/foo').get(async (req,res)=>{
    res.send("foo")
})


export default router