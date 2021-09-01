const {User}= require('../../../models');
const randString = require('../../../config/randString');
const jwt = require("jsonwebtoken");
const logger = require("../../../logger");
const bcrypt = require("bcrypt");
const transporter = require("../../../config/nodemailer");


module.exports.registerUser = async (req,res,next) => {
    try
    {
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({
                message:'User already exists',
                success:false
            });
        }

        let confirmationCode = await randString();
        await transporter.sendMail({
            from: process.env.email,
            to: req.body.email,
            subject: "Please confirm your Email",
            html: `<h1>Email Confirmation</h1>
                      <h2>Hello ${req.body.name}</h2>
                      <br>
                      <h3>We welcome you as a part of our <b>FlameSpark</b> family.</h3>
                      <p>Kindly click on the link below to confirm your e-mail address.</p>
                      <a href='${process.env.siteURI}/api/v1/user/confirmEmail/${confirmationCode}'><h3> Click here</h3></a>
                      <p style = "color : rbg(150, 148, 137)">Please do not reply to this e-mail. This address is automated and cannot help with questions or requests.</p>
                      <h4>If you have questions please write to abcd@FlameSpark.com. You may also call us at <a href="tel:7510545225">7510545225</a></h4>
                      </div>`,
        });

        let hash = await bcrypt.hash(req.body.password, 10);

        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            randString:confirmationCode
        });

        let token = jwt.sign(
            {
                data: user.email,
            },
            process.env.JWTsecret,
            { expiresIn: "1h" }
        );

        await user.save();

        res.status(200).json({
            message: "Please verify your email to login",
            data: {
                user: user,
                token: token,
            },
            success: true,
        });
    }
    catch(err){
        res.status(500).json({
            message: "something went wrong",
            success: false,
        });
    }
};

module.exports.confirmEmail =async (req,res)=>{
    const secret = req.params.secret
    const user = await User.findOne({ randString: secret })
    try {
      if (user) {
        user.isVerified = true;
        user.randString = null;
        await user.save();
        let token = jwt.sign(
          {
              data: user,
          },
          process.env.JWTsecret,
          { expiresIn: "1h" }
      );
       
       return res.status(200).json({
           message:"Email verified.Welcome to FlameSpark",
           data:{
               user:user,
               token:token,
               success:true
           }
       })
  
      }else{
          return res.status(400).json({
              message:"Bad request",
              success:false
          })
      }
    }
    catch (err) {
      res.status(500).json({
          message: "something went wrong",
          success: false,
      });
    }
  }