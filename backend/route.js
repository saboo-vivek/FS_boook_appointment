const express = require("express");

const userController = require("./controller");

const router = express.Router();

router.get('/get',userController.getAllEntries)
router.get("/get/:email", userController.getUserForm);
router.post("/post", userController.postAddUser);
router.delete("/del/:email", userController.deleteUser);
router.put("/edit/:email", userController.editUser);



module.exports = router;

// Data.forEach((obj) => {
//         
//         let ul = `<li class="list-group-item" id="${obj.email}" ">
//            ${tit}
//            <button type="submit" class="btn btn-danger btn-sm float-right delete"
//            onclick="delFun('${obj}')">
//               Delete
//            </button>
//            <button type="submit" class="btn btn-success btn-sm float-right delete mr-2" onclick="editFun('${obj}')">
//               Edit
//            </button>
//         </li>`;

//         items.innerHTML += ul;
//      }