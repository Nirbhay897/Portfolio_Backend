import brands from "./brands";
import works from './works'
import testimonials from './testimonials'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'


export const schemaTypes = [
    testimonials,
    abouts,
    brands,
    contact,
    experiences,
    skills,
    workExperience,
    works

]

// import testimonials from './testimonials'
// import brands from './brands'
// import abouts from './abouts'
// import experiences from './experiences'
// import skills from './skills'
// import workExperience from './workExperience'
// import contact from './contact'


// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   // We name our schema
//   name: 'default',
//   // Then proceed to concatenate our document type
//   // to the ones provided by any plugins that are installed
//   types: schemaTypes.concat([works, testimonials, brands, abouts, skills, workExperience, experiences, contact
//     /* Your types here! */
//   ]),
// })

