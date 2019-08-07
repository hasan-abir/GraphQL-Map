const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

dotenv.config()

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, () => console.log(`MongoDB connected`))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))