module.exports=function(app){
    var authList=require('./controller')

    app
    .route("/create")
    .get(authList.getUsers)
    .post(authList.createUsers);
    app.route("/delete").post(authList.deleteUsers)
    app.route("/update").post(authList.updateUsers)
    app.route("/getuser").post(authList.getUser)
    app.route("/getuser/:name").get(authList.getUser1)
    // app
    // .route("/delete/:name")
    // .delete(authList.deleteUsers)

}