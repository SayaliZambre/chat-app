// const User = require("../model/userModel");
// const brcypt = require("bcrypt");



// module.exports.login= async(req, res, next) => {
//   try{
//    const { username,password} = req.body;
//    const user = await User.findOne({username});
//    if(!user)
//    return res.json({ msg: "Incorrect username or password", status: false});
//    const isPasswordValid = await brcypt.compare(password, user.password); 
//    if(!isPasswordValid)
//    return res.json({msg: "Incorrect username or password",status:false});
//    delete user.password;
//    return res.json({
//        status: true,user});
// }catch (ex){
//    next(ex);
//     }
//  };
// module.exports.setAvatar = async (req,res,next) => {
// try{
//   const userId = req.parent.id;
//   const avatarImage = req.body.image;
//   const userData = await User.finallyAndUpdate(userId,{
//     isAvatarImageSet: true,
//     avatarImage,

//   });
// return res.json({
//   isSet: userData.isAvatarImageSet,
//   image: userData.avatarImage,
// });
// }catch(ex){
//   next(ex);
// }
// };
// module.exports.getAllUsers = async(req,res,next) => {
// try{
//    const user =awai User.find({_id: { $ne: req.parents.id}
//    }).select([
//     "email",
//     "username",
//     "avtarImage",
//     "_id",
//    ]);
//    return res.json(users)

// }catch(ex){
//   next()
// }

// }

