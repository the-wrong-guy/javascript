// level {2}
onst getUsers = async ()=> {
  await Promise.all(getUser(), getProfile(), getPosts())
  .then((data)=>({
      user : data[0],
      profile : data[1],
      posts : data[2]
    }))
  .catch(err=> {throw err})
  }
