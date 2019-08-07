const FastFood = require('../models/FastFood')
const FoodBranch = require('../models/FoodBranch')
const _ = require('lodash')

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull} = require('graphql')

const FoodBranchType = new GraphQLObjectType({
    name: 'FoodBranch',
    fields: () => ({
        id: {type: GraphQLID},
        fastfood: {
            type: FastFoodType,
            resolve(parent, args){
                // return _.find(fastfoods, {id: parent.fastfood_id})
                return FastFood.findById(parent.fastfood_id)
            }
        },
        latitude: {type: GraphQLString},
        longitude: {type: GraphQLString},
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        number: {type: GraphQLString},
        monday: {type: GraphQLString},
        tuesday: {type: GraphQLString},
        wednesday: {type: GraphQLString},
        thursday: {type: GraphQLString},
        friday: {type: GraphQLString},
        saturday: {type: GraphQLString},
        sunday: {type: GraphQLString}
    })
})

const FastFoodType = new GraphQLObjectType({
    name: 'FastFood',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        logo: {type: GraphQLString},
        tagline: {type: GraphQLString},
        branches: {
            type: new GraphQLList(FoodBranchType),
            resolve(parent, args){
                // return _.filter(foodbranches, {fastfood_id: parent.id})
                return FoodBranch.find({ fastfood_id: parent.id })
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        foodbranch: {
            type: FoodBranchType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // return _.find(foodbranches, {id: args.id})
                return FoodBranch.findById(args.id)
            }
        },
        fastfood: {
            type: FastFoodType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // return _.find(fastfoods, {id: args.id})
                return FastFood.findById(args.id)
            }
        },
        foodbranches: {
            type: new GraphQLList(FoodBranchType),
            resolve(parent, args){
                // return foodbranches
                return FoodBranch.find()
            }
        },
        fastfoods: {
            type: new GraphQLList(FastFoodType),
            resolve(parent, args){
                // return fastfoods
                return FastFood.find()
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addFastFood: {
            type: FastFoodType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                logo: {type: new GraphQLNonNull(GraphQLString)},
                tagline: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                let fastfood = new FastFood({
                    name: args.name,
                    logo: args.logo,
                    tagline: args.tagline
                })

                return fastfood.save()
            }
        },
        addFoodBranch: {
            type: FoodBranchType,
            args: {
                fastfood_id: {type: new GraphQLNonNull(GraphQLID)},
                latitude: {type: new GraphQLNonNull(GraphQLString)},
                longitude: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)},           
                address: {type: new GraphQLNonNull(GraphQLString)}, 
                number: {type: new GraphQLNonNull(GraphQLString)}, 
                monday: {type: new GraphQLNonNull(GraphQLString)}, 
                tuesday: {type: new GraphQLNonNull(GraphQLString)}, 
                wednesday: {type: new GraphQLNonNull(GraphQLString)}, 
                thursday: {type: new GraphQLNonNull(GraphQLString)}, 
                friday: {type: new GraphQLNonNull(GraphQLString)}, 
                saturday: {type: new GraphQLNonNull(GraphQLString)}, 
                sunday: {type: new GraphQLNonNull(GraphQLString)} 
            },
            resolve(parent, args){
                let foodbranch = new FoodBranch({
                    fastfood_id: args.fastfood_id,
                    latitude: args.latitude,
                    longitude: args.longitude,
                    name: args.name,
                    address: args.address,
                    number: args.number,
                    monday: args.monday,
                    tuesday: args.tuesday,
                    wednesday: args.wednesday,
                    thursday: args.thursday,
                    friday: args.friday,
                    saturday: args.saturday,
                    sunday: args.sunday
                })

                return foodbranch.save()
            }
        }
    }
})

module.exports =  new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

