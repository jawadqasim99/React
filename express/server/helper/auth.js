const bcrypt = require('bcrypt');

async function hashPassword(password) {
    try {
        // Generate a salt
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    } catch (error) {
        // Handle error
        console.error('Error hashing password:', error);
        throw error; // You might want to handle or log this error differently
    }
}

const comparePassword = (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}

module.exports={
    hashPassword,
    comparePassword
}