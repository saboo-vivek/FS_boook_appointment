const user = require("./customer_model");

exports.getAllEntries=(req, res)=> {
   user.findAll().then((data) => {
       res.status(200).send(data)
   })
}
exports.getUserForm = (req, res) => {
   
   // user
   //    .findByPk()
   //    .then((data) => {
   //       res.status(200).send(data);
   //    })
   //    .catch((err) => {
   //       console.log("error in getUserForm");
   //       res.status(500).send(err);
   //    });
   user.findByPk(req.params.email).then(data => {
      res.send(data);
  }).catch(error => {
      res.status(500).send(error);
  })
};

exports.postAddUser = async (req, res) => {
   try {
      const { name, email, phone, datetime } = req.body;
      const obj = {
         name: name,
         email: email,
         datetime: datetime,
         phone: phone,
      };
      user
         .create(obj)
         .then((data) => {
            res.status(200).send(data);
         })
         .catch((err) => res.status(500).send(err));

      console.log("postAddUser");
   } catch (err) {
      console.log("Errorf while adding the details of a new User", err);
      res.send("Duplicate Entry");
   }
};

exports.deleteUser = async (req,res) => {
    user.destroy({ where: { email: req.params.email } }).then(() => {
        res.send("Data deleted successfully")
    }).catch(error => {
        res.status(500).send(error);
    })
}

exports.editUser = async (req, res) => {
   // const email=req.body.params;
   const person=await user.findByPk(req.params.email);
   console.log(person.dataValues)
   // res.json(person.dataValues)
      
   user
      .update(person, {
         where: { email: req.params.email },
      })
      .then(() => {
         res.send("updated data successfully");
      })
      .catch((error) => {
         res.status(500).send(error);
      });
};
