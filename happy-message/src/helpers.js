
export const randomMessage = () =>{
  const msgArr = ["msg1", "msg2", "msg3", "msg4", "msg5"]
  const msgArrLength=  msgArr.length
  let randomNumber = Math.floor(Math.random() * msgArrLength )
  return msgArr[randomNumber]
  // return <p>msgArr[randomNumber]</p>
}

// export default randomMessage