var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchemas = new Schema({
    id: { type: String,  required: [true, 'ID must be provided'] },
    title: { type: String,  required: [true, 'title name must be provided'] },
    position: { type: String,  required: [true, ' position must be provided'] },
    skill: { type: String,  required: [true, ' skill Name must be provided'] },
    salary: { type: String},
    cycle: { type: String,  required: [true, 'cycle must be provided'] },
    jobStartDate: { type: String},
    jobEndDate: { type: String, },
    technologyLevel: { type: String },
    role: { type: String},
    status: { type: String},
});

const provider_a = mongoose.connection.useDb('provider-a');
const provider_b = mongoose.connection.useDb('provider-b');
const provider_c = mongoose.connection.useDb('provider-c');
const provider_d = mongoose.connection.useDb('provider-d');

const Provider_A_Agreement_Bids = provider_a.model('Bids', userSchemas);
const Provider_B_Agreement_Bids = provider_b.model('Bids', userSchemas);
const Provider_C_Agreement_Bids = provider_c.model('Bids', userSchemas);
const Provider_D_Agreement_Bids = provider_d.model('Bids', userSchemas);

module.exports = {Provider_A_Agreement_Bids,Provider_B_Agreement_Bids,Provider_C_Agreement_Bids,Provider_D_Agreement_Bids};