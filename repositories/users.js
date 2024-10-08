const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository')

const scrypt = util.promisify(crypto.scrypt);


class UsersRepository extends Repository{
    async create(attrs){
        attrs.id = this.randomID();

        const salt = crypto.randomBytes(8).toString('hex');

        const buf = await scrypt(attrs.password, salt, 64);

        const records = await this.getAll();
        const record = {
            ...attrs, 
            password: `${buf.toString('hex')}.${salt}`
        };
        records.push(record);
        await this.writeAll(records);

        return record;
    }

    async comparePasswords(saved, supplied){
        //saved -> pwd saved in our db 'hashed.salt'
        //supplied -> pwd given to us by a user trying to sing in
        const [hashed,salt]  = saved.split('.');
        const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

        return hashed === hashedSuppliedBuf.toString('hex');
    }
}

module.exports = new UsersRepository('users.json');