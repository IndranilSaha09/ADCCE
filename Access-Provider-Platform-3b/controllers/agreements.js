var express = require('express');
var router = express.Router();

var Agreements = require('../models/Agreements');
var Agreement_Bids = require('../models/AgreementBidding');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;

 const addagreement =  (req, res) => {
    var document = {
        id : req.body.id,
        title : req.body.title,
        position : req.body.position,
        providerName : req.body.providerName,
        providerEmail : req.body.providerEmail,
        skill : req.body.skill,
        salary : req.body.salary,
        description : req.body.description,
        cycle : req.body.cycle,
        materialGroup : req.body.materialGroup,
        teamMember : req.body.teamMember,
        technologyLevel : req.body.technologyLevel,
        role : req.body.role,
        jobStartDate : req.body.jobStartDate,
        jobEndDate : req.body.jobEndDate,
        startContractDate : req.body.startContractDate,
        review : req.body.review,
        comment : req.body.comment,
        endContractDate : req.body.endContractDate,
        createdAt : req.body.createdAt,
        updatedAt : req.body.updatedAt,
        status : "pending", 
      };
      const id =req.session.passport.user;
      console.log(id);
      try{
        const id =req.session.passport.user;


        User.Provider_A.findById(id)
        .exec((err, data) => {
        if (data) 
        {
            var user = new Agreements.Provider_A_Agreements(document); 
            console.log(user);
            user.save(function(error){
              if(error){ 
                throw error;
              }
              res.json({message : "Data saved successfully.", status : "success"});
           }); 
        }
    })

    User.Provider_B.findById(id)
    .exec((err, data) => {
      if (data) 
      {
          var user = new Agreements.Provider_B_Agreements(document); 
          user.save(function(error){
            if(error){ 
              throw error;
            }
            res.json({message : "Data saved successfully.", status : "success"});
         }); 
      }
  })

  User.Provider_C.findById(id)
    .exec((err, data) => {
        if (data) 
        {
            var user = new Agreements.Provider_C_Agreements(document); 
            user.save(function(error){
              if(error){ 
                throw error;
              }
              res.json({message : "Data saved successfully.", status : "success"});
           }); 
        }
    })
    User.Provider_D.findById(id)
      .exec((err, data) => {
        if (data) 
        {
            var user = new Agreements.Provider_D_Agreements(document); 
            user.save(function(error){
              if(error){ 
                throw error;
              }
              res.json({message : "Data saved successfully.", status : "success"});
           }); 
        }
    })
      }
      catch(error){
        console.log(error.message);
      }  
};

const saveagreements =  (agrements,req,res) => {

          const id =req.session.passport.user;
          try{
            const id =req.session.passport.user;
    
    
            User.Provider_A.findById(id)
            .exec((err, data) => {
            if (data) 
            {
                agrements.forEach(function (agreement) {   
                    var document = {
                        id : agreement.id,
                        title : agreement.title,
                        position : agreement.position,
                        providerName : agreement.providerName,
                        providerEmail : agreement.providerEmail,
                        skill : agreement.skill,
                        salary : agreement.salary,
                        description : agreement.description,
                        cycle : agreement.cycle,
                        materialGroup : agreement.materialGroup,
                        teamMember : agreement.teamMember,
                        technologyLevel : agreement.technologyLevel,
                        role : agreement.role,
                        jobStartDate : agreement.jobStartDate,
                        jobEndDate : agreement.jobEndDate,
                        startContractDate : agreement.startContractDate,
                        review : agreement.review,
                        comment : agreement.comment,
                        endContractDate : agreement.endContractDate,
                        createdAt : agreement.createdAt,
                        updatedAt : agreement.updatedAt,
                        status : "pending",
                        
                      };

                      Agreements.Provider_A_Agreements.findOne({"id":agreement.id})
                      .exec((err, data) => {
                      if (!data || data.length==0)
                      {
                      var user = new Agreements.Provider_A_Agreements(document); 
                      console.log("saving user in A");
                      console.log(user);
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); }
                    
                    })
                     
                 })
               
            }
        })

        User.Provider_B.findById(id)
        .exec((err, data) => {
          if (data) 
          {
              agrements.forEach(function (agreement) {   
                  var document = {
                      id : agreement.id,
                      title : agreement.title,
                      position : agreement.position,
                      providerName : agreement.providerName,
                      providerEmail : agreement.providerEmail,
                      skill : agreement.skill,
                      salary : agreement.salary,
                      description : agreement.description,
                      cycle : agreement.cycle,
                      materialGroup : agreement.materialGroup,
                      teamMember : agreement.teamMember,
                      technologyLevel : agreement.technologyLevel,
                      role : agreement.role,
                      jobStartDate : agreement.jobStartDate,
                      jobEndDate : agreement.jobEndDate,
                      startContractDate : agreement.startContractDate,
                      review : agreement.review,
                      comment : agreement.comment,
                      endContractDate : agreement.endContractDate,
                      createdAt : agreement.createdAt,
                      updatedAt : agreement.updatedAt,
                      status : "pending",
                    };

                    Agreements.Provider_B_Agreements.findOne({"id":agreement.id})
                    .exec((err, data) => {
                    if (!data || data.length==0)
                    {
                    var user = new Agreements.Provider_B_Agreements(document); 
                    console.log("saving user in B");
                    console.log(user);
                    user.save(function(error){
                      if(error){ 
                        throw error;
                      }
                   }); }
                  
                  })
                   
               })
          }
      })

      User.Provider_C.findById(id)
        .exec((err, data) => {
            if (data) 
            {
                agrements.forEach(function (agreement) {   
                    var document = {
                        id : agreement.id,
                        title : agreement.title,
                        position : agreement.position,
                        providerName : agreement.providerName,
                        providerEmail : agreement.providerEmail,
                        skill : agreement.skill,
                        salary : agreement.salary,
                        description : agreement.description,
                        cycle : agreement.cycle,
                        materialGroup : agreement.materialGroup,
                        teamMember : agreement.teamMember,
                        technologyLevel : agreement.technologyLevel,
                        role : agreement.role,
                        jobStartDate : agreement.jobStartDate,
                        jobEndDate : agreement.jobEndDate,
                        startContractDate : agreement.startContractDate,
                        review : agreement.review,
                        comment : agreement.comment,
                        endContractDate : agreement.endContractDate,
                        createdAt : agreement.createdAt,
                        updatedAt : agreement.updatedAt,
                        status : "pending",
                      };

                      Agreements.Provider_C_Agreements.findOne({"id":agreement.id})
                      .exec((err, data) => {
                      if (!data || data.length==0)
                      {
                      var user = new Agreements.Provider_C_Agreements(document); 
                      console.log("saving user in C");
                      console.log(user);
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); }
                    
                    })
                     
                 })
            }
        })

        User.Provider_D.findById(id)
          .exec((err, data) => {
            if (data) 
            {

                agrements.forEach(function (agreement) {   
                    var document = {
                        id : agreement.id,
                        title : agreement.title,
                        position : agreement.position,
                        providerName : agreement.providerName,
                        providerEmail : agreement.providerEmail,
                        skill : agreement.skill,
                        salary : agreement.salary,
                        description : agreement.description,
                        cycle : agreement.cycle,
                        materialGroup : agreement.materialGroup,
                        teamMember : agreement.teamMember,
                        technologyLevel : agreement.technologyLevel,
                        role : agreement.role,
                        jobStartDate : agreement.jobStartDate,
                        jobEndDate : agreement.jobEndDate,
                        startContractDate : agreement.startContractDate,
                        review : agreement.review,
                        comment : agreement.comment,
                        endContractDate : agreement.endContractDate,
                        createdAt : agreement.createdAt,
                        updatedAt : agreement.updatedAt,
                        status : "pending",
                      };

                      Agreements.Provider_D_Agreements.findOne({"id":agreement.id})
                      .exec((err, data) => {
                      if (!data || data.length==0)
                      {
                      var user = new Agreements.Provider_D_Agreements(document); 
                      console.log("saving user in D");
                      console.log(user);
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); }
                    
                    })  
                 })
              }
        })

          }
          catch(error){
            console.log(error.message);
          }  
};

const biddingdata =  (agrements,req,res) => {
   
      console.log("bidding test");
      const id =req.session.passport.user;
      try{
        const id =req.session.passport.user;


        User.Provider_A.findById(id)
        .exec((err, data) => {
        if (data) 
        {

          agrements.forEach(function (agreement) {   
            var document = {
                id :  agreement.id,
                title :  agreement.title,
                position :  agreement.position,
                skill : agreement.skill,
                salary : agreement.salary,
                cycle : agreement.cycle,
                jobStartDate : agreement.jobStartDate,
                jobEndDate : agreement.jobEndDate,
                technologyLevel : agreement.technologyLevel,
                role : agreement.role,
                status : agreement.status,
              };

              Agreements.Provider_A_Agreements.findOne({"id":agreement.id,"status": "accepted"})
              .exec((err, data) => {

              if (data)
              {

                Agreement_Bids.Provider_A_Agreement_Bids.findOne({"id":agreement.id})
                  .exec((err, data) => {
                console.log("testing bidding-3:",data);

                  if (!data || data.length==0)
                  {
                    var user = new Agreement_Bids.Provider_A_Agreement_Bids(document); 
                    console.log("saving user in A");
                    user.save(function(error){
                      if(error){ 
                        throw error;
                      }
                   }); 
                 
                  }
                
                })
              }
            
            })
             
         })
           
        }
    })

    User.Provider_B.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        agrements.forEach(function (agreement) {   
          var document = {
              id :  agreement.id,
              title :  agreement.title,
              position :  agreement.position,
              skill : agreement.skill,
              salary : agreement.salary,
              cycle : agreement.cycle,
              jobStartDate : agreement.jobStartDate,
              jobEndDate : agreement.jobEndDate,
              technologyLevel : agreement.technologyLevel,
              role : agreement.role,
              status : agreement.status,
            };

            Agreements.Provider_B_Agreements.findOne({"id":agreement.id,"status": "accepted"})
            .exec((err, data) => {

            if (data)
            {

              Agreement_Bids.Provider_B_Agreement_Bids.findOne({"id":agreement.id})
                .exec((err, data) => {
              console.log("testing bidding-3:",data);
              
          
                if (!data || data.length==0)
                {
                  var user = new Agreement_Bids.Provider_B_Agreement_Bids(document); 
                  console.log("saving user in B");
                  user.save(function(error){
                    if(error){ 
                      throw error;
                    }
                 }); 
               
                }
              
              })
            }
          
          })
           
       })
      }
  })

  User.Provider_C.findById(id)
  .exec((err, data) => {
      if (data) 
      {
        agrements.forEach(function (agreement) {   
          var document = {
              id :  agreement.id,
              title :  agreement.title,
              position :  agreement.position,
              skill : agreement.skill,
              salary : agreement.salary,
              cycle : agreement.cycle,
              jobStartDate : agreement.jobStartDate,
              jobEndDate : agreement.jobEndDate,
              technologyLevel : agreement.technologyLevel,
              role : agreement.role,
              status : agreement.status,
            };

            Agreements.Provider_C_Agreements.findOne({"id":agreement.id,"status": "accepted"})
            .exec((err, data) => {

            if (data)
            {

              Agreement_Bids.Provider_C_Agreement_Bids.findOne({"id":agreement.id})
                .exec((err, data) => {
              console.log("testing bidding-3:",data);

                if (!data || data.length==0)
                {
                  var user = new Agreement_Bids.Provider_C_Agreement_Bids(document); 
                  console.log("saving user in C");
                  user.save(function(error){
                    if(error){ 
                      throw error;
                    }
                 }); 
               
                }
              
              })
            }
          
          })
           
       })
      }
  })

  User.Provider_D.findById(id)
  .exec((err, data) => {
    if (data) 
    {
        agrements.forEach(function (agreement) {   
            var document = {
            id :  agreement.id,
            title :  agreement.title,
            position :  agreement.position,
            skill : agreement.skill,
            salary : agreement.salary,
            cycle : agreement.cycle,
            jobStartDate : agreement.jobStartDate,
            jobEndDate : agreement.jobEndDate,
            technologyLevel : agreement.technologyLevel,
            role : agreement.role,
            status : agreement.status,
              };

              Agreements.Provider_D_Agreements.findOne({"id":agreement.id,"status": "accepted"})
              .exec((err, data) => {

              if (data)
              {

                Agreement_Bids.Provider_D_Agreement_Bids.findOne({"id":agreement.id})
                  .exec((err, data) => {
                console.log("testing bidding-3:",data);

                  if (!data || data.length==0)
                  {
                    var user = new Agreement_Bids.Provider_D_Agreement_Bids(document); 
                    console.log("saving user in D");
                    user.save(function(error){
                      if(error){ 
                        throw error;
                      }
                   }); 
                 
                  }
                
                })
              }
            
            })
             
         })

    }
})
      }
      catch(error){
        console.log(error.message);
      }
};


const updateagreement=  (req, res) => {

        var document = {
            status: req.body.status,
          };
          const id =req.session.passport.user;
          console.log(id);
          try{
            const id =req.session.passport.user;
    
    
            User.Provider_A.findById(id)
            .exec((err, data) => {
            if (data) 
            {
                console.log("i am in employee provider A");
                Agreements.Provider_A_Agreements.findOne({id:req.body.id})
                .exec((err, data) => {
                    if(data)
                { 
                    if (data.status == req.body.status)
                    {
                        res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                    }
                     else
                    {
                        Agreements.Provider_A_Agreements.findOneAndUpdate({"id":req.body.id}, 
                            {
                               $set : document
                            },
                            {new: true},
                            (err, user) => {
                              if (err) throw err;
                                 console.log("i am in employee provider A completed");
                              res.json({message : "Data saved successfully.", status : "success"});
                               });
                    }
                }
                })
            }
        })
          }
          catch(error){
            console.log(error.message);
          }
    
    
          User.Provider_B.findById(id)
          .exec((err, data) => {
            if (data) 
            {
                console.log("i am in employee provider B");
                Agreements.Provider_B_Agreements.findOne({id:req.body.id})
                .exec((err, data) => {
                    if(data)
                {

                    if (data.status == req.body.status)
                    {
                        res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                    }
                    else
                    {
                        Agreements.Provider_B_Agreements.findOneAndUpdate({"id":req.body.id}, 
                            {
                               $set : document
                            },
                            {new: true},
                            (err, user) => {
                              if (err) throw err;
                                 console.log("i am in employee provider B completed");
                              res.json({message : "Data saved successfully.", status : "success"});
                               }
                            );
                    }
                }
                })
            }
        })
    
        User.Provider_C.findById(id)
        .exec((err, data) => {
            if (data) 
            {
                console.log("i am in employee provider C");
                Agreements.Provider_C_Agreements.findOne({id:req.body.id})
                .exec((err, data) => {
                    if(data)
                {

                    if (data.status == req.body.status)
                    {
                        res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                    }
                    else
                    {
                        Agreements.Provider_C_Agreements.findOneAndUpdate({"id":req.body.id}, 
                            {
                               $set : document
                            },
                            {new: true},
                            (err, user) => {
                              if (err) throw err; 
                                 console.log("i am in employee provider C completed");
                              res.json({message : "Data saved successfully.", status : "success"});
                               }
                            );
                    }
                }
                })
            }
        })
    
        User.Provider_D.findById(id)
          .exec((err, data) => {
            if (data) 
            {
                console.log("i am in employee provider D");
                Agreements.Provider_D_Agreements.findOne({id:req.body.id})
                .exec((err, data) => {
                    if(data)
                {

                    if (data.status ==req.body.status)
                    {
                        res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                    }
                    else
                    {
                        Agreements.Provider_D_Agreements.findOneAndUpdate({"id":req.body.id}, 
                            {
                               $set : document
                            },
                            {new: true},
                            (err, user) => {
                              if (err) throw err;
                                 console.log("i am in employee provider D completed");
                              res.json({message : "Data saved successfully.", status : "success"});
                               }
                            );
                    }
                }

                })

            }
        })    
};

const updatebid=  (req, res) => {

    var document = {
      id:req.body.id,
      title:req.body.title,
      position:req.body.position,
      skill:req.body.skill,
      salary:req.body.salary,
      cycle:req.body.cycle,
      jobStartDate: req.body.jobStartDate,
      jobEndDate: req.body.jobEndDate,
      technologyLevel: req.body.technologyLevel,
      role: req.body.role,
      status: req.body.status,
      };
      const id =req.session.passport.user;
      console.log(id);
      try{
        const id =req.session.passport.user;

        User.Provider_A.findById(id)
        .exec((err, data) => {
        if (data) 
        {
          console.log("i am in employee provider A");
          Agreement_Bids.Provider_A_Agreement_Bids.findOne({"id":req.body.id}
              )
          .exec((err, data) => {
              if(data)
          {

              if (data.status == req.body.status)
              {
                  res.json({message : "Bidding process is already completed.", status : "error"});
              }
              else
              {
                  Agreement_Bids.Provider_A_Agreement_Bids.findOneAndUpdate({"id":req.body.id}, 
                      {
                         $set : document
                      },
                      {new: true},
                      (err, user) => {
                        if (err) throw err;
                           console.log("i am in employee provider A completed");
                        res.json({message : "Data saved successfully.", status : "success"});
                         }
                      );
              }
          }
          })
        }
    })

    User.Provider_B.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        console.log("i am in employee provider B");
        Agreement_Bids.Provider_B_Agreement_Bids.findOne({"id":req.body.id}
            )
        .exec((err, data) => {
            if(data)
        {

            if (data.status ==req.body.status)
            {
                res.json({message : "Bidding process is already completed.", status : "error"});
            }
            else
            {
                Agreement_Bids.Provider_B_Agreement_Bids.findOneAndUpdate({"id":req.body.id}, 
                    {
                       $set : document
                    },
                    {new: true},
                    (err, user) => {
                      if (err) throw err;
                         console.log("i am in employee provider B completed");
                      res.json({message : "Data saved successfully.", status : "success"});
                       }
                    );
            }
        }
        })
      }
  })

  User.Provider_C.findById(id)
    .exec((err, data) => {
        if (data) 
        {
          console.log("i am in employee provider C");
          Agreement_Bids.Provider_C_Agreement_Bids.findOne({"positionid":req.body.positionid}
              )
          .exec((err, data) => {
              if(data)
          {

              if (data.status ==req.body.status)
              {
                  res.json({message : "Bidding process is already completed.", status : "error"});
              }
              else
              {
                  Agreement_Bids.Provider_C_Agreement_Bids.findOneAndUpdate({"id":req.body.id}, 
                      {
                         $set : document
                      },
                      {new: true},
                      (err, user) => {
                        if (err) throw err;
                           console.log("i am in employee provider C completed");
                        res.json({message : "Data saved successfully.", status : "success"});
                         }
                      );
              }
          }
          })
        }
    })

    User.Provider_D.findById(id)
    .exec((err, data) => {
      if (data) 
      {
          console.log("i am in employee provider D");
          Agreement_Bids.Provider_D_Agreement_Bids.findOne({"id":req.body.id}
              )
          .exec((err, data) => {
              if(data)
          {

              if (data.status ==req.body.status)
              {
                  res.json({message : "Bidding process is already completed.", status : "error"});
              }
              else
              {
                  Agreement_Bids.Provider_D_Agreement_Bids.findOneAndUpdate({"id":req.body.id}, 
                      {
                         $set : document
                      },
                      {new: true},
                      (err, user) => {
                        if (err) throw err;
                           // Some handle 
                           console.log("i am in employee provider D completed");
                        res.json({message : "Data saved successfully.", status : "success"});
                         }
                      );
              }
          }
          })

      }
  })

      }
      catch(error){
        console.log(error.message);
      }
};

const getagreement=  (req, res) => {

      const id =req.session.passport.user;
      console.log(id);
      try{
        const id =req.session.passport.user;


        User.Provider_A.findById(id)
        .exec((err, data) => {
        if (data) 
        {
            console.log("i am in employee provider A");
            Agreements.Provider_A_Agreements.find()
                .exec((err, data) => {
                if (data) 
                {
                    res.render('Masteragreement', {
                        title: 'Masteragreements','users' : data
                      })
                }
                })
        }
    })

    User.Provider_B.findById(id)
    .exec((err, data) => {
      if (data) 
      {
          console.log("i am in employee provider B");
          Agreements.Provider_B_Agreements.find()
              .exec((err, data) => {
              if (data) 
              {
                  res.render('Masteragreement', {
                      title: 'Masteragreements','users' : data
                    })
              }
              })
      }
  })

  User.Provider_C.findById(id)
    .exec((err, data) => {
        if (data) 
        {
            console.log("i am in employee provider C");
            Agreements.Provider_C_Agreements.find()
                .exec((err, data) => {
                if (data) 
                {
                    res.render('Masteragreement', {
                        title: 'Masteragreements','users' : data
                      })
                }
                })
        }
    })

    User.Provider_D.findById(id)
    .exec((err, data) => {
      if (data) 
      {
          console.log("i am in employee provider D");
          Agreements.Provider_D_Agreements.find()
              .exec((err, data) => {
              if (data) 
              {
                  res.render('Masteragreement', {
                      title: 'Masteragreements','users' : data
                    })
              }
              })
      }
  })
      }
      catch(error){
        console.log(error.message);
      }
};

const getagreementbids=  (req, res) => {

    const id =req.session.passport.user;
    console.log(id);
    try{
      const id =req.session.passport.user;

      User.Provider_A.findById(id)
      .exec((err, data) => {
      if (data) 
      {
          console.log("i am in employee provider A");
          Agreement_Bids.Provider_A_Agreement_Bids.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('Masteragreementbidding', {
                    title: 'MasteragreementDetails','users' : data
                  })
              }
              })
      }
  })

  User.Provider_B.findById(id)
    .exec((err, data) => {
      if (data) 
      {
          console.log("i am in employee provider B");
          Agreement_Bids.Provider_B_Agreement_Bids.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('Masteragreementbidding', {
                    title: 'MasteragreementDetails','users' : data
                  })
              }
              })
      }
  })

  User.Provider_C.findById(id)
  .exec((err, data) => {
      if (data) 
      {
          console.log("i am in employee provider C");
          Agreement_Bids.Provider_C_Agreement_Bids.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('Masteragreementbidding', {
                    title: 'MasteragreementDetails','users' : data
                  })
              }
              })
      }
  })

  User.Provider_D.findById(id)
  .exec((err, data) => {
    if (data) 
    {
        console.log("i am in employee provider D");
        Agreement_Bids.Provider_D_Agreement_Bids.find()
            .exec((err, data) => {
            if (data) 
            {
                res.render('Masteragreementbidding', {
                  title: 'MasteragreementDetails','users' : data
                })
            }
            })
    }
})
    }
    catch(error){
      console.log(error.message);
    }
};

const getagreementbidsforoffer=  (req, res) => {

    var querydata = req.query;
    if (querydata.provider == "A")
    {
        Agreement_Bids.Provider_A_Agreement_Bids.find({status: 'bidded'})
        .exec((err, data) => {
        if (data) 
        {
          res.send(data);
        }
        else
        {
            res.json({message : "No Bidded Offers.", status : "failure"});
        }
        })
    }

    else if (querydata.provider == "B")
    {
        Agreement_Bids.Provider_B_Agreement_Bids.find({status: 'bidded'})
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Bidded Offers.", status : "failure"});

            }
            })
    }
    else if (querydata.provider == "C")
    {
        Agreement_Bids.Provider_C_Agreement_Bids.find({status: 'bidded'})
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Bidded Offers.", status : "failure"});

            }
            })
    }
    else if (querydata.provider == "D")

    {
        Agreement_Bids.Provider_D_Agreement_Bids.find({status: 'bidded'})
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Bidded Offers.", status : "failure"});

            }
            })
    }

};
module.exports = {addagreement,saveagreements,updateagreement,biddingdata,getagreement,getagreementbids,updatebid,getagreementbidsforoffer};