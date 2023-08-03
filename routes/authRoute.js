const express = required('express')
const

//router object

const router = express.Router()

//routing
//Register || Method post

router.post('/register', registerController)
export default router