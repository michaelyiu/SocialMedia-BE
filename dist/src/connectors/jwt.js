import jwt from "jsonwebtoken";
const createToken = async (user, secret) => {
    const { id, email } = user;
    return await jwt.sign({ id, email }, secret, {
        algorithm: "HS256",
        expiresIn: "7d"
    });
};
export { createToken };
