var express = require('express');
var router = express.Router();

var OfferEmployee = require('../models/Offer');
var Employee = require('../models/Employee');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;

const getroffers=  (req, res) => {

    var querydata =req.query;
    if (querydata.provider == "A")

    {
        OfferEmployee.Provider_A_offer.find()
        .exec((err, data) => {
        if (data) 
        {
          res.send(data);
        }
        else
        {
            res.json({message : "No Offers currently", status : "failure"});

        }
        })
    }
    else if (querydata.provider == "B")

    {
        OfferEmployee.Provider_B_offer.find()
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Offers currently", status : "failure"});

            }
            })
    }
    else if (querydata.provider == "C")

    {
        OfferEmployee.Provider_C_offer.find()
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Offers currently", status : "failure"});

            }
            })
    }
    else if (querydata.provider == "D")

    {
        OfferEmployee.Provider_D_offer.find()
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Offers currently", status : "failure"});

            }
            })
    }

};



const addoffer =  (req, res) => {

  const Document_A = new OfferEmployee.Provider_A_offer();
  const Document_B = new OfferEmployee.Provider_B_offer();
  const Document_C = new OfferEmployee.Provider_C_offer();
  const Document_D = new OfferEmployee.Provider_D_offer();

  var document_employee = {
    status:"Offered",
    };
  console.log("i am in employee");

    try{
        const id =req.session.passport.user;
        console.log(id);

        User.Provider_A.findById(id)
        .exec((err, data) => {
        console.log(data);
        if (data) 
        {
          Employee.Provider_A_employee.findOne({"employee_name": req.body.employee_name}) .exec((err, data) => {
          if (data)
          {
            console.log("found employee in ", data);
            Employee.Provider_A_employee.findByIdAndUpdate(data._id, 
              {
                 $set : document_employee
              },
              {new: true},
              (err, user) => {
                if (err) {
                  throw err;
                }
                 });
              console.log(req.body);          
              Employee.Provider_A_employee.findById(data._id)
              .exec((err, data) => {
                if (data) 
                {
                  Document_A.servicerequest_id = req.body.servicerequest_id;
                  Document_A.agreement_title_id = req.body.agreement_title_id;
                  Document_A.agreement_title = req.body.agreement_title;
                  Document_A.project_information = req.body.project_information;
                  Document_A.employee_name = req.body.employee_name;
                  Document_A.provider_name = req.body.provider_name;
                  Document_A.contactperson =  req.body.contactperson; 
                  Document_A.externalperson =  req.body.externalperson; 
                  Document_A.rate = req.body.rate; 
                  Document_A.dateuntil = req.body.dateuntil;
                  Document_A.notes = req.body.notes; 
                  Document_A.document = req.body.document;
                  Document_A.status = req.body.status;
  
                    console.log("i am in employee provider A file upload");
                    console.log("i am in employee provider A");
                    console.log("document A is ",Document_A);

                   Document_A.save(function(error){
                      if(error){ 
                        throw error;
                      }
                      return
                      res.json({message : "Data saved successfully.", status : "success"});
                  }); 
  
                }
               })
          }});
      }
  })

  User.Provider_B.findById(id)
      .exec((err, data) => {
        console.log(data);
      if (data) 
      {
        Employee.Provider_B_employee.findOne({"employee_name": req.body.employee_name}) .exec((err, data) => {
          if (data)
          {
            console.log("found employee in ", data);
            Employee.Provider_B_employee.findByIdAndUpdate(data._id, 
              {
                 $set : document_employee
              },
              {new: true},
              (err, user) => {
                if (err) {
                  throw err;
                }
                 });
              console.log(req.body);          
              Employee.Provider_B_employee.findById(data._id)
              .exec((err, data) => {
                if (data) 
                {
                  Document_B.servicerequest_id = req.body.servicerequest_id;
                  Document_B.agreement_title_id = req.body.agreement_title_id;
                  Document_B.agreement_title = req.body.agreement_title;
                  Document_B.project_information = req.body.project_information;
                  Document_B.employee_name = req.body.employee_name;
                  Document_B.provider_name = req.body.provider_name;
                  Document_B.contactperson =  req.body.contactperson; 
                  Document_B.externalperson =  req.body.externalperson; 
                  Document_B.rate = req.body.rate; 
                  Document_B.dateuntil = req.body.dateuntil;
                  Document_B.notes = req.body.notes; 
                  Document_B.document = req.body.document;
                  Document_B.status = req.body.status;
  
                    console.log("i am in employee provider B file upload");
                    console.log("i am in employee provider B");
                    console.log("document B is ",Document_B);

                   Document_B.save(function(error){
                      if(error){ 
                        throw error;
                      }
                      return
                      res.json({message : "Data saved successfully.", status : "success"});
                  }); 
  
                }
               })
          }});
      }
  })

  User.Provider_C.findById(id)
      .exec((err, data) => {
        console.log(data);
      if (data) 
      {
        Employee.Provider_C_employee.findOne({"employee_name": req.body.employee_name}) .exec((err, data) => {
          if (data)
          {
            console.log("found employee in ", data);
            Employee.Provider_C_employee.findByIdAndUpdate(data._id, 
              {
                 $set : document_employee
              },
              {new: true},
              (err, user) => {
                if (err) {
                  throw err;
                }
                 });
              console.log(req.body);          
              Employee.Provider_C_employee.findById(data._id)
              .exec((err, data) => {
                if (data) 
                {
                  Document_C.servicerequest_id = req.body.servicerequest_id;
                  Document_C.agreement_title_id = req.body.agreement_title_id;
                  Document_C.agreement_title = req.body.agreement_title;
                  Document_C.project_information = req.body.project_information;
                  Document_C.employee_name = req.body.employee_name;
                  Document_C.provider_name = req.body.provider_name;
                  Document_C.contactperson =  req.body.contactperson; 
                  Document_C.externalperson =  req.body.externalperson; 
                  Document_C.rate = req.body.rate; 
                  Document_C.dateuntil = req.body.dateuntil;
                  Document_C.notes = req.body.notes; 
                  Document_C.document = req.body.document;
                  Document_C.status = req.body.status;
  
                    console.log("i am in employee provider C file upload");
                    console.log("i am in employee provider C");
                    console.log("document C is ",Document_C);

                   Document_C.save(function(error){
                      if(error){ 
                        throw error;
                      }
                      return
                      res.json({message : "Data saved successfully.", status : "success"});
                  }); 
  
                }
               })
          }});
      }
  })

  User.Provider_D.findById(id)
  .exec((err, data) => {
    console.log(data);
  if (data) 
  {
    Employee.Provider_D_employee.findOne({"employee_name": req.body.employee_name}) .exec((err, data) => {
      if (data)
      {
        console.log("found employee in ", data);
        Employee.Provider_D_employee.findByIdAndUpdate(data._id, 
          {
             $set : document_employee
          },
          {new: true},
          (err, user) => {
            if (err) {
              throw err;
            }
             });
          console.log(req.body);          
          Employee.Provider_D_employee.findById(data._id)
          .exec((err, data) => {
            if (data) 
            {
              Document_D.servicerequest_id = req.body.servicerequest_id;
              Document_D.agreement_title_id = req.body.agreement_title_id;
              Document_D.agreement_title = req.body.agreement_title;
              Document_D.project_information = req.body.project_information;
              Document_D.employee_name = req.body.employee_name;
              Document_D.provider_name = req.body.provider_name;
              Document_D.contactperson =  req.body.contactperson; 
              Document_D.externalperson =  req.body.externalperson; 
              Document_D.rate = req.body.rate; 
              Document_D.dateuntil = req.body.dateuntil;
              Document_D.notes = req.body.notes; 
              Document_D.document = req.body.document;
              Document_D.status = req.body.status;

                console.log("i am in employee provider D file upload");
                console.log("i am in employee provider D");
                console.log("document D is ",Document_D);

               Document_D.save(function(error){
                  if(error){ 
                    throw error;
                  }
                  return
                  res.json({message : "Data saved successfully.", status : "success"});
              }); 

            }
           })
      }});
  }
})
    }
    catch(error){
      console.log(error.message);
    }

  
};
module.exports = {addoffer,getroffers};