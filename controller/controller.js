
import USERMODEL_ACCOUNT from "../model/users.js"

class MyController {

  static Create = async (req, res) => {

    const { name, location, phone, email } = req.body
    //   (!(name && location && phone && email))  ?
    //   res.send('Please fill all')
    
    // :
    const if_user_exist = await USERMODEL_ACCOUNT.findOne(
      {
        email: email
      }
    )
    console.log(if_user_exist)
    if (if_user_exist) {
      res.send('Email IS ALREADY TAKEN')
    }

    else {
      const insert = new USERMODEL_ACCOUNT(
        {
          name, location, phone, email
        }
      )
      const a = await insert.save()

      if (a) {
        res.send('ACCOUNT CREATED PLEASE LOGIN')
      }
      else {
        res.send("Some issue RE-TRY")
      }
    }

    //   res.send('ACCOUNT CREATED PLEASE LOGIN')
    // }
    // else {
    //   res.send("Some issue RE-TRY
  }
  static Login = async (req, res) => {
    try {

      console.log(req.body.user)
      const user = req.body.user
      // if(!(user)) ? res.send('Email is not given!') :
      const check_user_exist = await USERMODEL_ACCOUNT.findOne({ email: user })
      if (check_user_exist) {
        res.status(200).send('Login Successful')
      }
      else {
        res.status(400).send('Login detail not matched')
      }
    } catch (error) {

    }
  }

}

export default MyController