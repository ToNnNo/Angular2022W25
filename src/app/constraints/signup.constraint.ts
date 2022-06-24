export const signupContraint: {[key: string]: any} = {
  email: {
    required: `L'adresse email est obligatoire`,
    email: `Le format de l'adresse email n'est pas correct`
  },
  password: {
    required: `Le mot de passe est obligatoire`
  },
  confirm: {
    required: `La confirmation est obligatoire`,
    match_password: `Le mot de passe et la confirmation ne correspondent pas`
  }
}
