export const githubInfoLoader = async ()=>{
  const response = await fetch(`https://api.github.com/users/mesingh9719`)
  return response.json()
}