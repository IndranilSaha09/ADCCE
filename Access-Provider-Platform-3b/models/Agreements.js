var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchemas = new Schema({
   /* offerid: { type: String,  required: [true, 'ID name must be provided'] },
    name: { type: String,  required: [true, ' name must be provided'] },
    type: { type: String,  required: [true, 'type name must be provided'] },
    dailyrateindication: { type: String},
    status: { type: String,  required: [true, 'status must be provided'] },
    cycle: { type: String , required: [true, 'cycle  must be provided']},
    startTime: { type: String,  required: [true, 'start time must be provided'] },
    endTime: { type: String,  required: [true, 'endtime must be provided'] },
    location: { type: String,  required: [true, 'location must be provided'] },
    agreementstatus: { type: String,  required: [true, 'location must be provided'] }, */

    id: { type: String,  required: [true, 'id must be provided'] },
    title: { type: String,  required: [true, ' title must be provided'] },
    position: { type: String,  required: [true, ' position must be provided'] },
    providerName: { type: String,  required: [true, ' provider name must be provided'] },
    providerEmail: { type: String,  required: [true, ' provider email must be provided'] },
    skill: { type: String,  required: [true, ' skill must be provided'] },
    salary: { type: String,  required: [true, ' salary must be provided'] },
    description: { type: String,  required: [true, ' description must be provided'] },
    cycle: { type: String,  required: [true, ' cycle must be provided'] },
    materialGroup: { type: String,  required: [true, ' material group must be provided'] },
    teamMember: { type: String,  required: [true, ' team members must be provided'] },
    technologyLevel: { type: String,  required: [true, ' technology level must be provided'] },
    role: { type: String,  required: [true, ' role must be provided'] },
    jobStartDate: { type: String,  required: [true, ' job start date must be provided'] },
    jobEndDate: { type: String,  required: [true, ' job end date must be provided'] },
    startContractDate: { type: String,  required: [true, ' start Contract Date must be provided'] },
    review: { type: String},
    comment: { type: String },
    endContractDate: { type: String,  required: [true, ' end contract date must be provided'] },
    createdAt: { type: String,  required: [true, ' created at must be provided'] },
    updatedAt: { type: String,  required: [true, ' updated at be provided'] },
    status: { type: String},
});


const provider_a = mongoose.connection.useDb('provider-a');
const provider_b = mongoose.connection.useDb('provider-b');
const provider_c = mongoose.connection.useDb('provider-c');
const provider_d = mongoose.connection.useDb('provider-d');

const Provider_A_Agreements = provider_a.model('Agreements', userSchemas);
const Provider_B_Agreements = provider_b.model('Agreements', userSchemas);
const Provider_C_Agreements = provider_c.model('Agreements', userSchemas);
const Provider_D_Agreements = provider_d.model('Agreements', userSchemas);


module.exports = {Provider_A_Agreements,Provider_B_Agreements,Provider_C_Agreements,Provider_D_Agreements};