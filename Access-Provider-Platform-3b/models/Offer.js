var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchemas = new Schema({
   /* employeeid: { type: String,  required: [true, 'Employee name must be provided'] },
    positionid: { type: String,  required: [true, 'Provider email must be provided'] },
    agreementsid: { type: String,  required: [true, 'Provider id must be provided'] },
    agreementName: { type: String,  required: [true, ' Agreement Name must be provided'] },
    employee_name: { type: String,  required: [true, 'Provider id must be provided'] },
    provider_name: { type: String,  required: [true, 'Provider id must be provided'] },
    contactperson: { type: String,  required: [true, 'Provider id must be provided'] },
    externalperson: { type: String,  required: [true, 'Provider id must be provided'] },
    rate: { type: String,  required: [true, 'Provider id must be provided'] },
    notes: { type: String,  required: [true, 'Provider id must be provided'] },
    dateuntil: { type: String,  required: [true, 'Provider id must be provided'] },
    document: { data: Buffer, contentType: String},
    status: { type: String }, */
    servicerequest_id:{type: String},
    agreement_title_id:{type: String},
    agreement_title: { type: String },
    project_information: { type: String},
    employee_name: { type: String },
    provider_name: { type: String},
    contactperson: { type: String },
    externalperson: { type: String },
    rate: { type: String},
    dateuntil: { type: String },
    notes: { type: String },
    document: { type: String},
    status: { type: String},
});

const provider_a = mongoose.connection.useDb('provider-a');
const provider_b = mongoose.connection.useDb('provider-b');
const provider_c = mongoose.connection.useDb('provider-c');
const provider_d = mongoose.connection.useDb('provider-d');

const Provider_A_offer = provider_a.model('offer', userSchemas);
const Provider_B_offer = provider_b.model('offer', userSchemas);
const Provider_C_offer = provider_c.model('offer', userSchemas);
const Provider_D_offer = provider_d.model('offer', userSchemas);

module.exports = {Provider_A_offer,Provider_B_offer,Provider_C_offer,Provider_D_offer};