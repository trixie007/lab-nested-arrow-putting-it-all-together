function createLoginTracker (userInfo){
  const LoginInfo = {
    Username: "user1",
    Password: "password123"
  };
  let attemptCount = 3
}
const checkPassword = (PasswordAttempt) => {
  attemptCount++;
  if(attemptCount <=3){
    userInfo.Password = "password123"
    console.log("Login successful");
  }else {
    console.log("Login failed");
  }
  if(attemptCount >3){
    console.log("Account locked due too many failed login attempts");
  }
    
};
checkPassword("abc")



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};