const mongoose = require('mongoose');
const marked = require('marked')
const slugify = require('slugify')




const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    markdown: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    slug:{
        type: String,
        required: true,
        uniqe: true
    },

})

articleSchema.pre('validate', function(next){
    if(this.id){
        this.slug = slugify(this.id, {lower: true, strict: true})
    }

    next()
})

module.exports = mongoose.model('Article', articleSchema)