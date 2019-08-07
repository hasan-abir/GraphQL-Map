import {gql} from 'apollo-boost'

export const getFastFoodQuery = gql`
    {
        fastfoods{
            id
            name
            logo
            tagline
            branches{
                id
                name
                latitude
                longitude
                address
                number
                monday
                tuesday
                wednesday
                thursday
                friday
                saturday
                sunday
            }
        }
    }
`